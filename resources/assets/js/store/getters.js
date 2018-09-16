import { getSelectedElement } from "./helpers";

/**
 * Returns the list of Canvases on the state. Used to populate the main workspace.
 */
export const canvases = state => state.canvases;

/**
 * Shows the Add Component Modal window.
 */
export const showAddComponentModal = state =>
    state.showAddComponentModal;

/**
 * Returns the number of columns on this Canvas.
 */
export const columnCount = state => canvasIndex =>
    state.canvases[canvasIndex].columns.length;


/**
 * Returns the total widths of all the columns on the current canvas.
 */
export const totalColumnWidth = state => {
    if (state.currentCanvas !== undefined) {
        let totalColumnWidth = 0;

        state.canvases[state.currentCanvas].columns.forEach(column => {
            totalColumnWidth += column.columnWidth;
        });

        return totalColumnWidth;
    }
}

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
 * This is used to make styling elements easier.
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
 * Returns true if the specified element (based off the indexes) has been selected.
 */
export const elementIsSelected = state => i => {
    if (
        state.currentCanvas    === i.canvasIndex &&
        state.currentColumn    === i.columnIndex &&
        state.currentComponent === i.componentIndex
    ) {
        return true;
    }

    return false;
};