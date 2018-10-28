import defaults from "./defaults/_defaults";
import { 
    duplicateObject, getElement, getElementByIndexes, getSiblingElements, resetSelection
} from "./helpers";

/**
 * Adds another Canvas to the Workspace.
 *
 */
export const addCanvas = state => {
    state.canvases.push(duplicateObject(defaults.canvas));
};

/**
 * Adds a Row to the specified Canvas.
 *
 */
export const addRow = state => {
    state.canvases[state.selected.canvas].rows.push(duplicateObject(defaults.row));
};

/**
 * Adds a Column to the specified Row.
 *
 */
export const addColumn = (state, columnWidth) => {
    const newColumn = duplicateObject(defaults.column);
    newColumn.columnWidth = columnWidth;

    getElement(state).columns.push(newColumn);
};

/**
 * Adds a component to the specified column.
 *
 */
export const addComponent = (state, componentType) => {
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

    getSiblingElements(state).push(components[componentType]);
};


/**
 * Used to set CSS properties on components.
 *
 */
export const setComponentProperty = (state, component) => {
    window.Vue.set(getElement(state), component.property, component.value);
};

/**
 * Some Components like Margin and Padding have a subproperty we may need to set.
 *
 */
export const setComponentSubProperty = (state, component) => {
    window.Vue.set(getElement(state)[component.property], component.subproperty, component.value);
};

/**
 * Deletes the selected Element
 *
 */
export const deleteElement = state => {
    const elementType = {
        'Canvas': state.selected.canvas,
        'Row': state.selected.row,
        'Column': state.selected.column,
        'Component': state.selected.component,
    };

    getSiblingElements(state).splice(elementType[state.selected.type], 1);

    resetSelection(state);
};

/**
 * Clones the selected Canvas below it's current position.
 *
 */
export const cloneElement = (state, i) => {
    if (state.selected.type === 'Canvas')    this.cloneCanvas(state);
    if (state.selected.type === 'Row')       this.cloneRow(state, i);
    if (state.selected.type === 'Column')    this.cloneColumn(state, i);
    if (state.selected.type === 'Component') this.cloneComponent(state, i);
};

/**
 * Clones the selected Canvas below it's current position.
 *
 */
export const cloneCanvas = state => {
    state.canvases.splice(state.selected.canvas, 0, duplicateObject(getElement(state)));
};

/**
 * Clones the selected Row to the specified position.
 *
 */
export const cloneRow = (state, i) => {
    state.canvases[i.canvasIndex].rows.splice(0, 0, duplicateObject(getElement(state)));
};

/**
 * Clones the selected Column to the specified position.
 *
 */
export const cloneColumn = (state, i) => {
    let totalColumnWidth = 0;

    state.canvases[i.canvasIndex].rows[i.rowIndex].columns.forEach(function (column) {
        totalColumnWidth += column.columnWidth;
    });

    totalColumnWidth += getElement(state).columnWidth;

    if (totalColumnWidth > 12) {
        this.setNotification(state, {
            message: 'Not enough room to fit that column there. Reduce size of existing columns and try again.',
            type: 'warning',
        });
    } else {
        state.canvases[i.canvasIndex].rows[i.rowIndex].columns.splice(0, 0, duplicateObject(getElement(state)));
    }
};

/**
 * Clones the selected Component to the specified position.
 *
 */
export const cloneComponent = (state, i) => {
    state.canvases[i.canvasIndex].rows[i.rowIndex].columns[i.columnIndex].components.splice(0, 0, duplicateObject(
        getElement(state)
    ));
};

export const moveElement = (state, direction) => {
    const directionIndex      = direction === 'up' ? -1 : 1;
    const elementAboveOrBelow = getElement(state, directionIndex);
    const selectedElement     = state.selected[state.selected.type.toLowerCase()];

    // Swap positions around:
    window.Vue.set(getSiblingElements(state), [selectedElement + (directionIndex)], getElement(state));
    window.Vue.set(getSiblingElements(state), [selectedElement], elementAboveOrBelow);

    // Reselect the moved element:
    state.selected[state.selected.type.toLowerCase()] += (directionIndex);
}

/**
 * Sets the currently selected component to whatever the user clicked on.
 *
 */
export const selectElement = (state, i) => {
    resetSelection(state);

    window.Vue.set(state.selected, 'canvas', i.canvasIndex);
    window.Vue.set(state.selected, 'row', i.rowIndex);
    window.Vue.set(state.selected, 'column', i.columnIndex);
    window.Vue.set(state.selected, 'component', i.componentIndex);

    if (i.componentIndex !== undefined) {
        window.Vue.set(state.selected, 'type', 'Component');
    }
    else if (i.columnIndex !== undefined) {
        window.Vue.set(state.selected, 'type', 'Column');
    }
    else if (i.rowIndex !== undefined) {
        window.Vue.set(state.selected, 'type', 'Row');
    }
    else {
        window.Vue.set(state.selected, 'type', 'Canvas');
    }

    getElement(state).selected = true;
};

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
    resetSelection(state);

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