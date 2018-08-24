import defaultCanvas from "./defaults/Canvas";
import { duplicateObject, getSelectedElement } from "./helpers";

// Loads an existing article (updates the canvases).
export const loadArticle = (state, article) => {
    window.Vue.set(state, "articleTitle", article.title);
    window.Vue.set(state, "canvases", JSON.parse(article.article_json));
};

// Sets the title of the article.
export const updateArticleTitle = (state, title) =>
    window.Vue.set(state, "articleTitle", title);

// Adds another Canvas to the Workspace.
export const addCanvas = state =>
    state.canvases.push(duplicateObject(defaultCanvas));

// Adds another column to the specified canvas.
export const addColumnToCanvas = state => {
    state.canvases[state.selectedComponent.canvasIndex].columns.push(
        duplicateObject(defaultCanvas)
    );
};

// Sets the currently selected component to whatever the used clicked on.
export const selectCanvas = (state, canvasIndex) => {
    state.selectedComponent = {
        canvasIndex: canvasIndex,
        componentIndex: undefined
    };

    state.canvases[canvasIndex].selected = true;
};

// Sets the currently selected component to whatever the used clicked on.
export const setSelectedComponent = (state, component) => {
    if (state.selectedComponent !== undefined) {
        getSelectedElement(state).selected = false;
    }

    state.selectedComponent = {
        canvasIndex: component.canvasIndex,
        columnIndex: component.columnIndex,
        componentIndex: component.componentIndex
    };

    getSelectedElement(state).selected = true;
};

// Triggers when the X button is pressed on the sidebar.
export const closeComponent = state => {
    state.selectedComponent = undefined;
};

export const deleteComponent = (state, i) => {
    state.canvases[i.canvasIndex].columns[i.columnIndex].splice(
        i.componentIndex,
        1
    );
};

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
