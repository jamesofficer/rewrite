import defaultCanvas from "./defaults/Canvas";
import defaultColumn from "./defaults/Column";
import { duplicateObject, getSelectedElement, deselectCurrentElement } from "./helpers";

// Adds another Canvas to the Workspace.
export const addCanvas = state => state.canvases.push(duplicateObject(defaultCanvas));

// Adds another column to the specified canvas.
export const addColumnToCanvas = state => {
    state.canvases[state.currentCanvas].columns.push(
        duplicateObject(defaultColumn)
    );
};

// Sets the currently selected component to whatever the used clicked on.
export const selectCanvas = (state, canvasIndex) => {
    console.log('canvInd: ' + canvasIndex);

    deselectCurrentElement(state);

    state.currentCanvas    = canvasIndex;
    state.currentColumn    = undefined;
    state.currentComponent = undefined;

    getSelectedElement(state).selected = true;
};

export const selectColumn = (state, i) => {
    deselectCurrentElement(state);

    state.currentCanvas    = i.canvasIndex;
    state.currentColumn    = i.columnIndex;
    state.currentComponent = undefined;

    getSelectedElement(state).selected = true;
};

// Sets the currently selected component to whatever the used clicked on.
export const selectComponent = (state, i) => {
    deselectCurrentElement(state);

    state.currentCanvas    = i.canvasIndex;
    state.currentColumn    = i.columnIndex;
    state.currentComponent = i.componentIndex;

    getSelectedElement(state).selected = true;
};

// Triggers when the X button is pressed on the sidebar.
export const closeComponent = state => {
    state.selectedComponent = undefined;
};

export const deleteComponent = (state, i) => {
    state.canvases[i.canvasIndex].columns[i.columnIndex].splice(i.componentIndex, 1);
};

// Adds a component to the specified column.
export const addComponentToColumn = state => component => {
    if (component.type === "Heading") {
        state.canvases[component.indexes.canvasIndex].columns[
            component.indexes.columnIndex
        ].push(duplicateObject(defaultHeading));
    }

    if (component.type === "Paragraph") {
        state.canvases[component.indexes.canvasIndex].columns[
            component.indexes.columnIndex
        ].push(duplicateObject(defaultParagraph));
    }

    if (component.type === "BlockQuote") {
        state.canvases[component.indexes.canvasIndex].columns[
            component.indexes.columnIndex
        ].push(duplicateObject(defaultBlockQuote));
    }
};

// ===================================================== //
// Saving/Loading Articles. (should probably be actions)
// ===================================================== //

// Loads an existing article (updates the canvases).
export const loadArticle = (state, article) => {
    window.Vue.set(state, "articleTitle", article.title);
    window.Vue.set(state, "canvases", JSON.parse(article.article_json));
};

// Sets the title of the article.
export const updateArticleTitle = (state, title) =>
    window.Vue.set(state, "articleTitle", title);

// ===================================================== //
// CSS Property Mutators.
// ===================================================== //

// Sets the string value of a Text Component
export const updateTextContent = (state, value) =>
    window.Vue.set(getSelectedElement(state), "content", value);

// Sets the Text Alignment on a Text Component
export const setTextAlignment = (state, position) =>
    window.Vue.set(getSelectedElement(state), "textAlign", position);

// Sets the Font Size on a Text Component
export const setFontSize = (state, size) =>
    window.Vue.set(getSelectedElement(state), "fontSize", size);

// Sets the Font Weight on a Text Component
export const setFontWeight = (state, weight) =>
    window.Vue.set(getSelectedElement(state), "fontWeight", weight);

// Sets the Font Family on a Text Component
export const setFontFamily = (state, family) =>
    window.Vue.set(getSelectedElement(state), "fontFamily", family);

// Sets the Text Colour on a Text Component
export const setTextColor = (state, color) =>
    window.Vue.set(getSelectedElement(state), "textColor", color);

// Sets the Background Colour on a Component
export const setBackgroundColor = (state, color) =>
    window.Vue.set(getSelectedElement(state), "backgroundColor", color);

// Padding Mutations
export const setPaddingTop = (state, padding) =>
    window.Vue.set(getSelectedElement(state).padding, "top", padding);
export const setPaddingRight = (state, padding) =>
    window.Vue.set(getSelectedElement(state).padding, "right", padding);
export const setPaddingBottom = (state, padding) =>
    window.Vue.set(getSelectedElement(state).padding, "bottom", padding);
export const setPaddingLeft = (state, padding) =>
    window.Vue.set(getSelectedElement(state).padding, "left", padding);
