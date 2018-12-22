import { getElementByIndexes, getSelectedRootElement, getRootElementByIndexes } from "./helpers";

/**
 * Returns the value of the enableGlobalComponentStyles variable.
 *
 */
export const globalComponentStyles = state => {
    return state.enableGlobalComponentStyles;
};

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
export const getSelectedElement = state => {
    return state.selected.element;
};

/**
 * Returns the type of the selected element, e.g. 'Canvas', 'Row' etc.
 * 
 */
export const getSelectedElementType = state => {
    return state.selected.type;
};

/**
 * Returns the type of the selected component, e.g. 'Heading', 'Paragraph', 'Picture' etc.
 * 
 */
export const getSelectedComponentType = state => {
    if (state.selected.type !== undefined) {
        return getSelectedRootElement(state).type;        
    }
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
 * Returns the html of the article.
 *
 */
export const deviceSize = state => {
    return state.deviceSize;
};

/**
 * Returns the notification object from the state.
 *
 */
export const notification = state => {
    return state.notification;
};

/**
 * Returns the enableKeyBindings boolean from the state.
 *
 */
export const enableKeyBindings = state => {
    return state.enableKeyBindings;
};

/**
 * Returns the list of fonts used on this article.
 *
 */
export const fontsUsed = state => {
    return state.fontsUsed;
};

export const getColumnWidthForDeviceSize = state => (deviceSize, i) => {
    console.log('deviceSize');
    console.log(deviceSize);

    console.log('indexes');
    console.log(i);


    // console.log('getting col width for ' + deviceSize);
    
    return state.canvases[i.canvasIndex].rows[i.rowIndex]
            .columns[i.columnIndex][deviceSize].columnWidth;
}

/**
 * Returns the total widths of all the columns on the current canvas.
 *
 */
export const totalColumnWidth = state => {
    if (state.selected.canvas !== undefined && state.selected.row !== undefined) {
        let totalColumnWidth = 0;

        state.canvases[state.selected.canvas].rows[state.selected.row].columns.forEach(column => {
            totalColumnWidth += column[state.deviceSize].columnWidth;
        });

        return totalColumnWidth;
    }
};

export const canMoveElementUp = state => {
    if (state.selected.type === 'Canvas')    return state.selected.canvas > 0;
    if (state.selected.type === 'Row')       return state.selected.row > 0;
    if (state.selected.type === 'Column')    return state.selected.column > 0;
    if (state.selected.type === 'Component') return state.selected.component > 0;
};

export const canMoveElementDown = state => {
    if (state.selected.type === 'Canvas')    return state.selected.canvas    !== (state.canvases.length - 1);
    if (state.selected.type === 'Row')       return state.selected.row       !== (state.canvases[state.selected.canvas].rows.length - 1);
    if (state.selected.type === 'Column')    return state.selected.column    !== (state.canvases[state.selected.canvas].rows[state.selected.row].columns.length - 1);
    if (state.selected.type === 'Component') return state.selected.component !== (state.canvases[state.selected.canvas].rows[state.selected.row].columns[state.selected.column].components.length - 1);
};

/**
 * Returns true if the specified element (based off the indexes) has been selected.
 *
 */
export const elementIsSelected = state => i => {
    return state.selected.canvas    === i.canvasIndex &&
           state.selected.row       === i.rowIndex    &&
           state.selected.column    === i.columnIndex &&
           state.selected.component === i.componentIndex;
};
