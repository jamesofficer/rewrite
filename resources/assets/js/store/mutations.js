import defaultCanvas     from "./defaults/Canvas";
import defaultColumn     from "./defaults/Column";
import defaultHeading    from "./defaults/Heading";
import defaultParagraph  from "./defaults/Paragraph";
import defaultBlockQuote from "./defaults/BlockQuote";
import { duplicateObject, getSelectedElement, deselectCurrentElement } from "./helpers";

// Triggers when the X button is pressed on the sidebar.
export const closeSidebar = state => {
    deselectCurrentElement(state);

    state.currentCanvas    = undefined;
    state.currentColumn    = undefined;
    state.currentComponent = undefined;
};

// Sets the status of the "Add Component" Modal window.
export const toggleAddComponentModal = (state, toggle) => {
    state.showAddComponentModal = toggle;
};

// Adds another Canvas to the Workspace.
export const addCanvas = state => state.canvases.push(duplicateObject(defaultCanvas));

// Deletes the selected Canvas
export const removeCanvas = state => {
    state.canvases.splice(state.currentCanvas, 1);
    state.currentCanvas = undefined;
}

// Adds another column to the specified canvas.
export const addColumnToCanvas = state => {
    state.canvases[state.currentCanvas].columns.push(
        duplicateObject(defaultColumn)
    );
};

// Removes a column from the specified canvas. We deselect it first to prevent errors.
export const removeColumnFromCanvas = state => {
    state.currentColumn = undefined;
    state.canvases[state.currentCanvas].columns.splice(state.currentColumn, 1);
};

// Sets the currently selected component to whatever the used clicked on.
export const selectCanvas = (state, canvasIndex) => {
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

export const deleteComponent = (state, i) => {
    state.canvases[i.canvasIndex].columns[i.columnIndex].splice(i.componentIndex, 1);
};

// Adds a component to the specified column.
export const addComponentToColumn = (state, componentType) => {
    if (componentType === "Heading") {
        state.canvases[state.currentCanvas].columns[state.currentColumn].components
            .push(duplicateObject(defaultHeading));
    }

    if (componentType === "Paragraph") {
        state.canvases[state.currentCanvas].columns[state.currentColumn].components
            .push(duplicateObject(defaultParagraph));
    }

    if (componentType === "BlockQuote") {
        state.canvases[state.currentCanvas].columns[state.currentColumn].components
            .push(duplicateObject(defaultBlockQuote));
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



// Border Mutations
export const setBorderTop = (state, borderVal) =>
    window.Vue.set(getSelectedElement(state).bordertop, "top", borderVal);
export const setBorderRight = (state, borderVal) =>
    window.Vue.set(getSelectedElement(state).padding, "right", borderVal);
export const setBorderBottom = (state, borderVal) =>
    window.Vue.set(getSelectedElement(state).padding, "bottom", borderVal);
export const setBorderLeft = (state, borderVal) =>
    window.Vue.set(getSelectedElement(state).padding, "left", borderVal);
