import { getSelectedElement } from "./helpers";

/**
 * Returns the list of Canvases on the state. Used to populate the main workspace.
 */
export const canvases = state => state.canvases;

/**
 * Returns the number of columns on this Canvas.
 */
export const columnCount = state => canvasIndex =>
    state.canvases[canvasIndex].columns.length;

/**
 * Returns the list of Components for this particular canvas.
 */
export const getComponentsForColumn = state => i => {
    return state.canvases[i.canvasIndex].columns[i.columnIndex].components;
};

/**
 * Returns the title of the article.
 */
export const articleTitle = state => state.articleTitle;

/**
 * Returns the currently selected element. This can be either a Canvas or a Component.
 * This is used for 'core' components, as they have no knowledge of their indexes.
 */
export const getCurrentElement = state => {
    // currentCanvas will be undefined when the app first starts. Return null to fix errors.
    if (state.currentCanvas === undefined) {
        return null;
    }

    return getSelectedElement(state);
};

/**
 * Returns an element based off the index values that are passed in.
 * This is used on Components, as their indexes can be passed in.
 */
export const getElement = state => i => {
    // If component and column are undefined, return the canvas.
    if (i.componentIndex === undefined && i.columnIndex === undefined) {
        return state.canvases[i.canvasIndex];
    }

    // If the component is undefined, return the column.
    if (i.componentIndex === undefined) {
        return state.canvases[i.canvasIndex].columns[i.columnIndex];
    }

    // Otherwise, return the component.
    return state.canvases[i.canvasIndex].columns[i.columnIndex].components[
        i.componentIndex
    ];
};

/**
 * We want to show the sidebar if something is selected.
 */
export const showSidebar = state => {
    return state.currentCanvas === undefined ? false : true;
};

/**
 * Returns true only if ANY component is selected (returns false if a Canvas is selected).
 */
export const elementIsSelected = state => i => {
    // If nothing is selected, return false.
    if (state.currentCanvas === undefined) {
        return false;
    }

    // Has a Canvas been selected?
    if (
        state.currentCanvas    === i.canvasIndex &&
        state.currentColumn    === undefined &&
        state.currentComponent === undefined
    ) {
        return state.canvases[i.canvasIndex];
    }

    // Has a Column been selected?
    if (
        state.currentCanvas    === i.canvasIndex &&
        state.currentColumn    === i.columnIndex &&
        state.currentComponent === undefined
    ) {
        return true;
    }

    // Has a Component been selected?
    if (
        state.currentCanvas    === i.canvasIndex &&
        state.currentColumn    === i.columnIndex &&
        state.currentComponent === i.componentIndex
    ) {
        return true;
    }
};
