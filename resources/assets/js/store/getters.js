import { getSelectedElement } from "./helpers";

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
    console.table(i);
    return state.canvases[i.canvasIndex].rows[i.rowIndex].columns[i.columnIndex].components;
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
    if (state.active.canvas !== undefined && state.active.row !== undefined) {
        let totalColumnWidth = 0;

        state.canvases[state.active.canvas].rows[state.active.row].columns.forEach(column => {
            totalColumnWidth += column.columnWidth;
        });

        return totalColumnWidth;
    }
};

/**
 * Returns true if there is a Canvas above this one.
 *
 */
export const canMoveCanvasUp = state => {
    if (state.active.canvas !== undefined) {
        return state.active.canvas > 0;
    }
};

/**
 * Returns true if there is a component below this one.
 *
 */
export const canMoveCanvasDown = state => {
    if (state.active.canvas !== undefined) {
        return state.active.canvas !== (state.canvases.length - 1);
    }
};

/**
 * Returns true if there is another column to the left of this one.
 * 
 */
export const canMoveColumnLeft = state => {
    if (state.active.column !== undefined) {
        return state.active.column > 0;
    }
};

/**
 * Returns true if there is another column to the right of this one i.e: we can move it right.
 *
 */
export const canMoveColumnRight = state => {
    if (state.active.column !== undefined) {
        return state.active.column !== (state.canvases[state.active.canvas].rows[state.active.row].columns.length - 1);
    }
};

/**
 * Returns true if there is a component above this one.
 *
 */
export const canMoveComponentUp = state => {
    if (state.active.component !== undefined) {
        return state.active.component !== 0;
    }
};

/**
 * Returns true if there is a component below this one.
 *
 */
export const canMoveComponentDown = state => {
    if (state.active.component !== undefined) {
        const numComponents = state.canvases[state.active.canvas].rows[state.active.row].columns[state.active.column].components.length;

        return state.active.component < (numComponents - 1);
    }
};

/**
 * Returns the currently selected element. This can be either a Canvas or a Component.
 * This is used for 'core' components, as they have no knowledge of their indexes.
 * 
 */
export const getCurrentElement = state => {
    // The active canvas will be undefined when the app first starts. Return null to fix errors.
    if (state.active.canvas === undefined) {
        return null;
    }

    return getSelectedElement(state);
};

/**
 * Returns an element based off the index values that are passed in. This is used to make styling elements easier.
 * 
 */
export const getElement = state => i => {
    // If row, column, and component are undefined, return the canvas.
    if (i.rowIndex === undefined && i.columnIndex === undefined && i.componentIndex === undefined) {
        return state.canvases[i.canvasIndex];
    }

    // If the component and column are undefined, return the row.
    if (i.rowIndex !== undefined && i.columnIndex === undefined && i.componentIndex === undefined) {
        return state.canvases[i.canvasIndex].rows[i.rowIndex];
    }

    // If the component index is undefined, return the column.
    if (i.rowIndex !== undefined && i.columnIndex !== undefined && i.componentIndex === undefined) {
        return state.canvases[i.canvasIndex].rows[i.rowIndex].columns[i.columnIndex];
    }

    // Otherwise, return the component.
    return state.canvases[i.canvasIndex].rows[i.rowIndex].columns[i.columnIndex].components[
        i.componentIndex
    ];
};

/**
 * Returns true if a Canvas is selected.
 * 
 */
export const aCanvasIsSelected = state => {
    return state.active.canvas !== undefined &&
           state.active.row    === undefined &&
           state.active.column === undefined &&
           state.active.component === undefined;
};

/**
 * Returns true if a Row is selected.
 *
 */
export const aRowIsSelected = state => {
    return state.active.canvas !== undefined &&
           state.active.row    !== undefined &&
           state.active.column === undefined &&
           state.active.component === undefined;
};

/**
 * Returns true if a Column is selected.
 * 
 */
export const aColumnIsSelected = state => {
    return state.active.canvas !== undefined &&
           state.active.row    !== undefined &&
           state.active.column !== undefined &&
           state.active.component === undefined;
};

/**
 * Returns true if a Component is selected.
 * 
 */
export const aComponentIsSelected = state => {
    return state.active.canvas !== undefined &&
           state.active.row    !== undefined &&
           state.active.column !== undefined &&
           state.active.component !== undefined;
};

/**
 * Returns true if the specified element (based off the indexes) has been selected.
 * 
 */
export const elementIsSelected = state => i => {
    return state.active.canvas    === i.canvasIndex &&
           state.active.row       === i.rowIndex &&
           state.active.column    === i.columnIndex &&
           state.active.component === i.componentIndex;
};


