export const duplicateObject = object => {
    return JSON.parse(JSON.stringify(object));
};

/**
 * By default this returns the currently selected element. We can specify an index array position
 * that is higher or lower than the selected element if we want to. This is usually used when
 * moving an element around the workspace, to the element above or below the current one.
 *  
 */
export const getElement = (state, position = 0) => {
    // Return a Canvas
    if (state.active.type === 'Canvas') {
        return state.canvases[state.active.canvas + (position)];
    }

    // Return a Row
    if (state.active.type === 'Row') {
        return state.canvases[state.active.canvas].rows[state.active.row + (position)];
    }

    // Return a Column
    if (state.active.type === 'Column') {
        return state.canvases[state.active.canvas].rows[state.active.row]
            .columns[state.active.column + (position)];
    }

    // Return a Component
    if (state.active.type === 'Component') {
        return state.canvases[state.active.canvas].rows[state.active.row]
            .columns[state.active.column].components[state.active.component + (position)];
    }
};

/**
 * Returns an element based off the index values that are passed in. This is used to make styling elements easier.
 * 
 */
export const getElementByIndexes = state => i => {
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
 * Returns the array that the current Element sits in.
 * 
 */
export const getSiblingElements = state => {
    if (state.active.type === 'Canvas')    return state.canvases;
    if (state.active.type === 'Row')       return state.canvases[state.active.canvas].rows;
    if (state.active.type === 'Column')    return state.canvases[state.active.canvas].rows[state.active.row].columns;
    if (state.active.type === 'Component') return state.canvases[state.active.canvas].rows[state.active.row].columns[state.active.column].components;
}

/**
 * Clears the current selection.
 *
 */
export const resetSelection = state => {
    window.Vue.set(state.active, "type", undefined);
    window.Vue.set(state.active, "component", undefined);
    window.Vue.set(state.active, "column", undefined);
    window.Vue.set(state.active, "row", undefined);
    window.Vue.set(state.active, "canvas", undefined);
}