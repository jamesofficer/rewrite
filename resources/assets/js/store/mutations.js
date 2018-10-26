import defaults from "./defaults/_defaults";
import { duplicateObject, getSelectedElement, deselectCurrentElement } from "./helpers";

/**
 * Sets the state of the notification object.
 *
 */
export const setNotification = (state, incomingNotification) => {
    window.Vue.set(state.notification, "message", incomingNotification.message);
    window.Vue.set(state.notification, "type", incomingNotification.type);
    window.Vue.set(state.notification, "dismissCountDown", 5);

    window.scrollTo(0, 0);
};

/**
 * Sets the state of the notification object.
 *
 */
export const setNotificationCountDown = (state, countdown) => {
    window.Vue.set(state.notification, "dismissCountDown", countdown);
};

/**
 * Sets the title of the article.
 *
 */
export const updateArticleTitle = (state, title) => {
    window.Vue.set(state, "articleTitle", title);
};

/**
 * Adds another Canvas to the Workspace.
 *
 */
export const addCanvas = state => {
    state.canvases.push(duplicateObject(defaults.canvas));
};


/**
 * Used to set CSS properties on components.
 *
 */
export const setComponentProperty = (state, component) => {
    window.Vue.set(getSelectedElement(state), component.property, component.value);
};

/**
 * Some Components like Margin and Padding have a subproperty we may need to set.
 *
 */
export const setComponentSubProperty = (state, component) => {
    window.Vue.set(getSelectedElement(state)[component.property], component.subproperty, component.value);
};

/**
 * Deletes the selected Canvas
 *
 */
export const deleteCanvas = state => {
    state.canvases.splice(state.active.canvas, 1);
    state.active.canvas = undefined;
};

/**
 * Removes a column from the specified canvas. We deselect it first to prevent errors.
 *
 */
export const deleteColumn = state => {
    state.canvases[state.active.canvas].columns.splice(state.active.column, 1);
    state.active.column = undefined;
};

/**
 * Deletes a Component from a column.
 *
 */
export const deleteComponent = state => {
    if (state.active.component !== undefined) {
        state.canvases[state.active.canvas].rows[state.active.row].columns[state.active.column].components.splice(state.active.component, 1);
    }

    state.active.component = undefined;
};

/**
 * Clones the selected Canvas below it's current position.
 *
 */
export const cloneCanvas = state => {
    const canvas = state.canvases[state.active.canvas];

    state.canvases.splice(state.active.canvas, 0, duplicateObject(canvas));
};

/**
 * Clones the selected Column to the specified position.
 *
 */
export const cloneColumn = (state, destCanvasIndex) => {
    const column = state.canvases[state.active.canvas].rows[state.active.row].columns[state.active.column];

    let totalColumnWidth = 0;

    state.canvases[destCanvasIndex].columns.forEach(function (column) {
        totalColumnWidth += column.columnWidth;
    });

    totalColumnWidth += state.canvases[state.active.canvas].rows[state.active.row].columns[state.active.column].columnWidth;

    if (totalColumnWidth > 12) {
        this.setNotification(state, {
            message: 'Not enough room to fit that column there. Reduce size of existing columns and try again.',
            type: 'warning',
        });
    } else {
        state.canvases[destCanvasIndex].columns.splice(0, 0, duplicateObject(column));
    }
};

/**
 * Clones the selected Component to the specified position.
 *
 */
export const cloneComponent = (state, indexes) => {
    const component = state.canvases[state.active.canvas].rows[state.active.row].columns[state.active.column].components[state.active.component];

    state.canvases[indexes.canvasIndex].columns[indexes.columnIndex].components.splice(0, 0, duplicateObject(component));
};

/**
 * Moves a Canvas UP the workspace.
 *
 */
export const moveCanvasUp = state => {
    if (state.active.canvas !== 0) {
        const canvasAbove = state.canvases[state.active.canvas - 1];
        const thisCanvas  = state.canvases[state.active.canvas];

        // Swap positions around:
        window.Vue.set(state.canvases, [state.active.canvas - 1], thisCanvas);
        window.Vue.set(state.canvases, [state.active.canvas], canvasAbove);

        // Reselect the moved element:
        state.active.canvas = state.active.canvas - 1;
    }
};

/**
 * Moves a Canvas DOWN the workspace.
 *
 */
export const moveCanvasDown = state => {
    if (state.active.canvas !== (state.canvases.length - 1)) {
        const canvasBelow = state.canvases[state.active.canvas + 1];
        const thisCanvas  = state.canvases[state.active.canvas];

        // Swap positions around:
        window.Vue.set(state.canvases, [state.active.canvas + 1], thisCanvas);
        window.Vue.set(state.canvases, [state.active.canvas], canvasBelow);

        // Reselect the moved element:
        state.active.canvas = state.active.canvas + 1;
    }
};

/**
 * Moves a Column left within a Canvas.
 *
 */
export const moveColumnLeft = state => {
    if (state.active.column !== 0) {
        // Get the current column and the one to the left of it.
        const thisColumn   = state.canvases[state.active.canvas].rows[state.active.row].columns[state.active.column];
        const columnToLeft = state.canvases[state.active.canvas].columns[state.active.column - 1];

        // Now we can swap them around.
        window.Vue.set(state.canvases[state.active.canvas].columns, [state.active.column], columnToLeft);
        window.Vue.set(state.canvases[state.active.canvas].columns, [state.active.column - 1], thisColumn);

        // Reselect the moved element:
        state.active.column = state.active.column - 1;
    }
};

/**
 * Moves a Column right within a Canvas.
 *
 */
export const moveColumnRight = state => {
    if (state.active.column !== (state.canvases[state.active.canvas].columns.length - 1)) {
        // Get the current column and the one to the right of it.
        const thisColumn   = state.canvases[state.active.canvas].rows[state.active.row].columns[state.active.column];
        const columnToLeft = state.canvases[state.active.canvas].columns[state.active.column + 1];

        // Now we can swap them around.
        window.Vue.set(state.canvases[state.active.canvas].columns, [state.active.column], columnToLeft);
        window.Vue.set(state.canvases[state.active.canvas].columns, [state.active.column + 1], thisColumn);

        // Reselect the moved element:
        state.active.column = state.active.column + 1;
    }
};

/**
 * Moves a component UP in a column.
 *
 */
export const moveComponentUp = state => {
    if (state.active.component !== 0) {
        const thisComponent  = state.canvases[state.active.canvas].rows[state.active.row].columns[state.active.column].components[state.active.component];
        const componentAbove = state.canvases[state.active.canvas].rows[state.active.row].columns[state.active.column].components[state.active.component - 1];

        // Swap positions around:
        window.Vue.set(state.canvases[state.active.canvas].rows[state.active.row].columns[state.active.column].components, [state.active.component - 1], thisComponent);
        window.Vue.set(state.canvases[state.active.canvas].rows[state.active.row].columns[state.active.column].components, [state.active.component], componentAbove);

        // Reselect the moved element:
        state.active.component = state.active.component - 1;
    }
};

/**
 * Moves a component DOWN in a column.
 *
 */
export const moveComponentDown = state => {
    if (state.active.component !== (state.canvases[state.active.canvas].rows[state.active.row].columns[state.active.column].components.length - 1)) {
        const thisComponent  = state.canvases[state.active.canvas].rows[state.active.row].columns[state.active.column].components[state.active.component];
        const componentAbove = state.canvases[state.active.canvas].rows[state.active.row].columns[state.active.column].components[state.active.component + 1];

        // Swap positions around:
        window.Vue.set(state.canvases[state.active.canvas].rows[state.active.row].columns[state.active.column].components, [state.active.component + 1], thisComponent);
        window.Vue.set(state.canvases[state.active.canvas].rows[state.active.row].columns[state.active.column].components, [state.active.component], componentAbove);

        // Reselect the moved element:
        state.active.component = state.active.component + 1;
    }
};

/**
 * Adds a Row to the specified Canvas.
 *
 */
export const addRowToCanvas = state => {
    const newRow = duplicateObject(defaults.row);

    state.canvases[state.active.canvas].columns.push(newRow);
};

/**
 * Adds a Column to the specified Row.
 *
 */
export const addColumnToRow = (state, columnWidth) => {
    const newColumn = duplicateObject(defaults.column);

    newColumn.columnWidth = columnWidth;

    state.canvases[state.active.canvas].columns.push(newColumn);
};

/**
 * Sets the currently selected component to whatever the user clicked on.
 *
 */
export const selectCanvas = (state, canvasIndex) => {
    deselectCurrentElement(state);

    state.active.canvas    = canvasIndex;
    state.active.column    = undefined;
    state.active.component = undefined;

    getSelectedElement(state).selected = true;
};

/**
 * Sets the currently selected column to the one that the user clicked on.
 *
 */
export const selectColumn = (state, i) => {
    deselectCurrentElement(state);

    state.active.canvas    = i.canvasIndex;
    state.active.column    = i.columnIndex;
    state.active.component = undefined;

    getSelectedElement(state).selected = true;
};

/**
 * Sets the currently selected component to whatever the user clicked on.
 *
 */
export const selectComponent = (state, i) => {
    deselectCurrentElement(state);

    state.active.canvas    = i.canvasIndex;
    state.active.column    = i.columnIndex;
    state.active.component = i.componentIndex;

    getSelectedElement(state).selected = true;
};

/**
 * Adds a component to the specified column.
 *
 */
export const addComponentToColumn = (state, componentType) => {
    const components = {
        "Heading": duplicateObject(defaults.heading),
        "Paragraph": duplicateObject(defaults.paragraph),
        "BlockQuote": duplicateObject(defaults.blockQuote),
        "Picture": duplicateObject(defaults.picture),
        "HorizontalLine": duplicateObject(defaults.horizontalLine),
        "InstagramEmbed": duplicateObject(defaults.instagram),
        "FacebookEmbed": duplicateObject(defaults.facebook),
        "YouTubeEmbed": duplicateObject(defaults.youtube),
        "RecipeSummary": duplicateObject(defaults.recipeSummary),
        "RecipeIngredients": duplicateObject(defaults.recipeIngredients),
    };

    state.canvases[state.active.canvas].rows[state.active.row].columns[state.active.column].components
            .push(components[componentType]);
};

/**
 * Sets the articleHtml variable in state, to whatever is in the main workspace.
 *
 */
export const buildHtml = (state, html) => {
    html = this.createHtmlHead(state, html, state.articleTitle);
    html = this.cleanHtml(html);
    html = this.appendImageUrlsToHtml(html);
    html += "</body>";
    html += "</html>";

    window.Vue.set(state, "articleHtml", html);
};

/**
 * Appends a <head> to the HTML. Includes stylesheets.
 * 
 */
export const createHtmlHead = (state, html, title) => {
    let fonts = this.getUniqueFontList(state.fontsUsed);
    let head  = '';

    head += "<!DOCTYPE html>";
    head += "<html>";
    head += "<head>";
    head += "<meta charset=\"UTF-8\">";
    head += "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">";
    head += "<meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">";
    head += "<title>" + title + "</title>";
    head += "<link rel='stylesheet' href='https://unpkg.com/normalize.css@8.0.0/normalize.css'>";
    head += "<link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'>";

    // Append the needed fonts.
    fonts.forEach(function (font) {
        let fontStylesheet = "<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=" + font.name + ":";

        font.weights.forEach(function (weight) {
            fontStylesheet += weight + ",";
        });

        head += (fontStylesheet += "'>");
    });

    head += "</head>";
    head += "<body>";

    return head + html;
};

/**
 * When building our html, we don't want to import the same font stylesheet multiple times. This function
 * removes any duplicate fonts from fontsUsed, allowing us to build up the stylesheets more efficiently.
 * 
 */
export const getUniqueFontList = fontsUsed => {
    let uniqueFonts = [];
    let fontsAdded  = [];

    fontsUsed.forEach(function (font) {
        if (! fontsAdded.includes(font.name)) {
            fontsAdded.push(font.name);
            uniqueFonts.push(font);
        }
    });

    return uniqueFonts;
};

/**
 * When previewing an article, we need to append the hostname to the url for images to display properly.
 *
 */
export const appendImageUrlsToHtml = html => {
    const regex  = /(\/storage\/user-images)/g;
    const subst  = location.protocol + '//' + window.location.hostname + `\$1`;

    return html.replace(regex, subst);
};

/**
 * When getting an articles html, we want to strip out unnecessary text such as Vue's
 * 'data-v' properties, and any comments in the html (in the form of "<!-- -->");
 *
 */
export const cleanHtml = html => {
    const matchDataVText   = /(data-v-\w*=""\s)/g;
    const matchBoilerplate = /(\sshift-canvas|class="shift-component"|shift-column\s|\sselected-canvas|shift-component|selected-element|\sclass="\s?"|\sclass="v-portal"|<!-*>)/g;

    html = html.replace(matchDataVText, "");
    html = html.replace(matchBoilerplate, "");

    return html;
};

/**
 * Loads an existing article (updates the canvases).
 *
 */
export const loadArticle = (state, article) => {
    // Reset selection first (prevents a bug that breaks element selection).
    window.Vue.set(state, "currentCanvas", undefined);
    window.Vue.set(state, "currentColumn", undefined);
    window.Vue.set(state, "currentComponent", undefined);

    // Now load in the article itself.
    window.Vue.set(state, "articleTitle", article.title);
    window.Vue.set(state, "canvases", JSON.parse(article.article_json));

    // Load in custom fonts if there are any, otherwise set to an empty array.
    if (JSON.parse(article.fonts_used)) {
        window.Vue.set(state, "fontsUsed", JSON.parse(article.fonts_used));
    } else {
        state.fontsUsed = [];
    }
};

/**
 * Adds a font to the list of used fonts.
 * 
 */
export const addFontToFontsUsed = (state, font) => {
    state.fontsUsed.push(font);
};