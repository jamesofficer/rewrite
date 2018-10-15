import defaults from "./defaults/_defaults";
import { duplicateObject, getSelectedElement, deselectCurrentElement } from "./helpers";

/**
 * Adds another Canvas to the Workspace.
 * 
 */
export const addCanvas = state => {
    state.canvases.push(duplicateObject(defaults.canvas));
}

/**
 * Deletes the selected Canvas
 * 
 */
export const removeCanvas = state => {
    state.canvases.splice(state.currentCanvas, 1);
    state.currentCanvas = undefined;
};

/**
 * Deletes a component from a column.
 * 
 */
export const deleteComponent = state => {
    state.canvases[state.currentCanvas].columns[state.currentColumn].components.splice(state.currentComponent, 1);
    state.currentComponent = undefined;
};

/**
 * Moves a Canvas UP the workspace.
 *
 */
export const moveCanvasUp = state => {
    if (state.currentCanvas !== 0) {
        const canvasAbove = state.canvases[state.currentCanvas - 1];
        const thisCanvas  = state.canvases[state.currentCanvas];

        // Swap positions around:
        window.Vue.set(state.canvases, [state.currentCanvas - 1], thisCanvas);
        window.Vue.set(state.canvases, [state.currentCanvas], canvasAbove);

        // Reselect the moved element:
        state.currentCanvas = state.currentCanvas - 1;
    }
};

/**
 * Moves a Canvas DOWN the workspace.
 *
 */
export const moveCanvasDown = state => {
    if (state.currentCanvas !== (state.canvases.length - 1)) {
        const canvasBelow = state.canvases[state.currentCanvas + 1];
        const thisCanvas  = state.canvases[state.currentCanvas];

        // Swap positions around:
        window.Vue.set(state.canvases, [state.currentCanvas + 1], thisCanvas);
        window.Vue.set(state.canvases, [state.currentCanvas], canvasBelow);

        // Reselect the moved element:
        state.currentCanvas = state.currentCanvas + 1;
    }
};


/**
 * Moves a Column left within a Canvas.
 * 
 */
export const moveColumnLeft = state => {
    if (state.currentColumn !== 0) {
        // Get the current column and the one to the left of it.
        const thisColumn   = state.canvases[state.currentCanvas].columns[state.currentColumn];
        const columnToLeft = state.canvases[state.currentCanvas].columns[state.currentColumn - 1];

        // Now we can swap them around.
        window.Vue.set(state.canvases[state.currentCanvas].columns, [state.currentColumn], columnToLeft);
        window.Vue.set(state.canvases[state.currentCanvas].columns, [state.currentColumn - 1], thisColumn);

        // Reselect the moved element:
        state.currentColumn = state.currentColumn - 1;
    }
}

/**
 * Moves a Column right within a Canvas.
 *
 */
export const moveColumnRight = state => {
    if (state.currentColumn !== (state.canvases[state.currentCanvas].columns.length - 1)) {
        // Get the current column and the one to the right of it.
        const thisColumn   = state.canvases[state.currentCanvas].columns[state.currentColumn];
        const columnToLeft = state.canvases[state.currentCanvas].columns[state.currentColumn + 1];

        // Now we can swap them around.
        window.Vue.set(state.canvases[state.currentCanvas].columns, [state.currentColumn], columnToLeft);
        window.Vue.set(state.canvases[state.currentCanvas].columns, [state.currentColumn + 1], thisColumn);

        // Reselect the moved element:
        state.currentColumn = state.currentColumn + 1;
    }
}

/**
 * Moves a component UP in a column.
 * 
 */
export const moveComponentUp = state => {
    if (state.currentComponent !== 0) {
        const thisComponent  = state.canvases[state.currentCanvas].columns[state.currentColumn].components[state.currentComponent];
        const componentAbove = state.canvases[state.currentCanvas].columns[state.currentColumn].components[state.currentComponent - 1];

        // Swap positions around:
        window.Vue.set(state.canvases[state.currentCanvas].columns[state.currentColumn].components, [state.currentComponent - 1], thisComponent);
        window.Vue.set(state.canvases[state.currentCanvas].columns[state.currentColumn].components, [state.currentComponent], componentAbove);

        // Reselect the moved element:
        state.currentComponent = state.currentComponent - 1;
    }
};

/**
 * Moves a component DOWN in a column.
 * 
 */
export const moveComponentDown = state => {
    if (state.currentComponent !== (state.canvases[state.currentCanvas].columns[state.currentColumn].components.length - 1)) {
        const thisComponent  = state.canvases[state.currentCanvas].columns[state.currentColumn].components[state.currentComponent];
        const componentAbove = state.canvases[state.currentCanvas].columns[state.currentColumn].components[state.currentComponent + 1];

        // Swap positions around:
        window.Vue.set(state.canvases[state.currentCanvas].columns[state.currentColumn].components, [state.currentComponent + 1], thisComponent);
        window.Vue.set(state.canvases[state.currentCanvas].columns[state.currentColumn].components, [state.currentComponent], componentAbove);

        // Reselect the moved element:
        state.currentComponent = state.currentComponent + 1;
    }
};

/**
 * Used to set CSS properties on components.
 * 
 */
export const setComponentProperty = (state, component) => {
    window.Vue.set(getSelectedElement(state), component.property, component.value);
}

/**
 * Some Components like Margin and Padding have a subproperty we may need to set.
 * 
 */
export const setComponentSubProperty = (state, component) => {
    window.Vue.set(getSelectedElement(state)[component.property], component.subproperty, component.value);
}

/**
 * Sets the status of the "Add Component" Modal window.
 * 
 */
export const toggleAddComponentModal = (state, toggle) => {
    state.showAddComponentModal = toggle;
}

/**
 * Adds another column to the specified canvas.
 * 
 */
export const addColumnToCanvas = (state, columnWidth) => {
    let newColumn = duplicateObject(defaults.column);

    newColumn.columnWidth = columnWidth;

    state.canvases[state.currentCanvas].columns.push(newColumn);
};

/**
 * Removes a column from the specified canvas. We deselect it first to prevent errors.
 * 
 */
export const removeColumnFromCanvas = state => {
    state.canvases[state.currentCanvas].columns.splice(state.currentColumn, 1);
    state.currentColumn = undefined;
};

/**
 * Sets the currently selected component to whatever the user clicked on.
 * 
 */
export const selectCanvas = (state, canvasIndex) => {
    deselectCurrentElement(state);

    state.currentCanvas    = canvasIndex;
    state.currentColumn    = undefined;
    state.currentComponent = undefined;

    getSelectedElement(state).selected = true;
};

/**
 * Sets the currently selected column to the one that the user clicked on.
 * 
 */
export const selectColumn = (state, i) => {
    deselectCurrentElement(state);

    state.currentCanvas    = i.canvasIndex;
    state.currentColumn    = i.columnIndex;
    state.currentComponent = undefined;

    getSelectedElement(state).selected = true;
};

/**
 * Sets the currently selected component to whatever the user clicked on.
 * 
 */
export const selectComponent = (state, i) => {
    deselectCurrentElement(state);

    state.currentCanvas    = i.canvasIndex;
    state.currentColumn    = i.columnIndex;
    state.currentComponent = i.componentIndex;

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

    state.canvases[state.currentCanvas].columns[state.currentColumn].components
            .push(components[componentType]);
};

/**
 * Sets the articleHtml variable in state, to whatever is in the main workspace.
 * 
 */
export const setArticleHtml = (state, html) => {
    html = this.appendImageUrlsToHtml(html);
    html = this.cleanHtml(html);

    window.Vue.set(state, "articleHtml", html);
} 

/**
 * When previewing an article, we need to append the hostname to the url for images to display properly.
 * 
 */
export const appendImageUrlsToHtml = (html) => {
    const regex  = /(\/storage\/user-images)/g;
    const subst  = 'https://' + window.location.hostname + `\$1`;

    return html.replace(regex, subst);
}

/**
 * When getting an articles html, we want to strip out unnecessary text such as Vue's
 * 'data-v' properties, and any comments in the html (in the form of "<!-- -->");
 *
 */
export const cleanHtml = (html) => {
    const matchDataVText = /(data-v-\w*=""\s)/g;
    const matchComments  = /(<!-*>)/g;

    html = html.replace(matchDataVText, "");
    html = html.replace(matchComments, "");

    return html;
}

/**
 * Sets the title of the article.
 * 
 */
export const updateArticleTitle = (state, title) => {
    window.Vue.set(state, "articleTitle", title);
}

/**
 * Selects an Image from the Image Gallery and sets it for the current image component.
 * 
 */
export const selectImage = (state, image) => {
    window.Vue.set(getSelectedElement(state), "src", image.url);
}

/**
 * Loads an existing article (updates the canvases).
 * 
 */
export const loadArticle = (state, article) => {
    window.Vue.set(state, "articleTitle", article.title);
    window.Vue.set(state, "canvases", JSON.parse(article.article_json));
};