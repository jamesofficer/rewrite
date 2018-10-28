import { getElement, getElementByIndexes } from "./helpers";

/**
 * Returns the list of Canvases on the state. Used to populate the main workspace.
 * 
 */
export const canvases = state => {
    return state.canvases;
};

/**
 * Returns the Rows on the active Canvas.
 *
 */
export const rows = state => i => {
    return state.canvases[i.canvasIndex].rows;
};

/**
 * Returns the Columns in the active Row.
 * 
 */
export const columns = state => i => {
    return state.canvases[i.canvasIndex].rows[i.rowIndex].columns;
};

/**
 * Returns the list of Components for this particular canvas.
 * 
 */
export const components = state => i => {
    return state.canvases[i.canvasIndex].rows[i.rowIndex].columns[i.columnIndex].components;
};

/**
 * Returns the index values from the state.selected object.
 *
 */ 
export const getActiveElement = state => {
    return state.selected;
}

/**
 * Returns an element based off the index values that are passed in. This is used to make styling elements easier.
 * 
 */
export const getSpecifiedElement = (state, i) => {
    return getElementByIndexes(state, i);
};

/**
 * Returns the currently selected element. This can be either a Canvas, Row or a Component.
 * This is used for 'micro' components, as they have no knowledge of their indexes.
 * 
 */
export const getCurrentElement = state => {
    // The active canvas will be undefined when the app first starts. Return null to fix errors.
    if (state.selected.canvas === undefined) {
        return null;
    }

    return getElement(state);
};

/**
 * Returns the title of the article.
 *
 */
export const articleTitle = state => {
    return state.articleTitle;
};

/**
 * Returns the html of the article.
 *
 */
export const articleHtml = state => {
    return state.articleHtml;
};

/**
 * Returns the notification object from the state.
 *
 */
export const notification = state => {
    return state.notification;
};

/**
 * Returns the list of fonts used on this article.
 *
 */
export const fontsUsed = state => {
    return state.fontsUsed;
};

/**
 * Returns the total widths of all the columns on the current canvas.
 * 
 */
export const totalColumnWidth = state => {
    if (state.selected.canvas !== undefined && state.selected.row !== undefined) {
        let totalColumnWidth = 0;

        state.canvases[state.selected.canvas].rows[state.selected.row].columns.forEach(column => {
            totalColumnWidth += column.columnWidth;
        });

        return totalColumnWidth;
    }
};

export const canMoveElementUp = state => {
    if (state.selected.type === 'Canvas')    return state.selected.canvas > 0;
    if (state.selected.type === 'Row')       return state.selected.row > 0;
    if (state.selected.type === 'Column')    return state.selected.column > 0;
    if (state.selected.type === 'Component') return state.selected.component > 0;
}

export const canMoveElementDown = state => {
    if (state.selected.type === 'Canvas')    return state.selected.canvas    !== (state.canvases.length - 1);
    if (state.selected.type === 'Row')       return state.selected.row       !== (state.canvases[state.selected.canvas].rows.length - 1);
    if (state.selected.type === 'Column')    return state.selected.column    !== (state.canvases[state.selected.canvas].rows[state.selected.row].columns.length - 1);
    if (state.selected.type === 'Component') return state.selected.component !== (state.canvases[state.selected.canvas].rows[state.selected.row].columns[state.selected.column].components.length - 1);
}

/**
 * Returns true if a Canvas is selected.
 * 
 */
export const aCanvasIsSelected = state => {
    return state.selected.canvas    !== undefined &&
           state.selected.row       === undefined &&
           state.selected.column    === undefined &&
           state.selected.component === undefined;
};

/**
 * Returns true if a Row is selected.
 *
 */
export const aRowIsSelected = state => {
    return state.selected.canvas    !== undefined &&
           state.selected.row       !== undefined &&
           state.selected.column    === undefined &&
           state.selected.component === undefined;
};

/**
 * Returns true if a Column is selected.
 * 
 */
export const aColumnIsSelected = state => {
    return state.selected.canvas    !== undefined &&
           state.selected.row       !== undefined &&
           state.selected.column    !== undefined &&
           state.selected.component === undefined;
};

/**
 * Returns true if a Component is selected.
 * 
 */
export const aComponentIsSelected = state => {
    return state.selected.canvas    !== undefined &&
           state.selected.row       !== undefined &&
           state.selected.column    !== undefined &&
           state.selected.component !== undefined;
};

/**
 * Returns true if the specified element (based off the indexes) has been selected.
 * 
 */
export const elementIsSelected = state => i => {
    return state.selected.canvas    === i.canvasIndex &&
           state.selected.row       === i.rowIndex &&
           state.selected.column    === i.columnIndex &&
           state.selected.component === i.componentIndex;
};


