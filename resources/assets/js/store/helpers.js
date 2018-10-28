export const duplicateObject = object => {
    return JSON.parse(JSON.stringify(object));
};

/**
 * By default this returns the currently selected element. We can specify an index array position
 * that is higher or lower than the selected element if we want to. This is usually used when
 * moving an element around the workspace, to the element above or below the current one.
 *  
 */
export const getSelectedElement = (state, position = 0) => {
    // Return a Canvas
    if (state.selected.type === 'Canvas') {
        return state.canvases[state.selected.canvas + (position)];
    }
    // Return a Row
    else if (state.selected.type === 'Row') {
        return state.canvases[state.selected.canvas].rows[state.selected.row + (position)];
    }
    // Return a Column
    else if (state.selected.type === 'Column') {
        return state.canvases[state.selected.canvas].rows[state.selected.row]
            .columns[state.selected.column + (position)];
    }
    // Return a Component
    else {
        return state.canvases[state.selected.canvas].rows[state.selected.row]
            .columns[state.selected.column].components[state.selected.component + (position)];
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
    if (state.selected.type === 'Canvas') {
        return state.canvases;
    }
    else if (state.selected.type === 'Row') {
        return state.canvases[state.selected.canvas].rows;
    }
    else if (state.selected.type === 'Column') {
        return state.canvases[state.selected.canvas].rows[state.selected.row].columns;
    }
    else {
        return state.canvases[state.selected.canvas].rows[state.selected.row].columns[state.selected.column].components;
    }
}

export const getSiblingsElementByIndexes = (state, i) => {
    // If row, column, and component are undefined, return the canvas.
    if (i.rowIndex === undefined && i.columnIndex === undefined && i.componentIndex === undefined) {
        return state.canvases;
    }

    // If the component and column are undefined, return the row.
    if (i.rowIndex !== undefined && i.columnIndex === undefined && i.componentIndex === undefined) {
        return state.canvases[i.canvasIndex].rows;
    }

    // If the component index is undefined, return the column.
    if (i.rowIndex !== undefined && i.columnIndex !== undefined && i.componentIndex === undefined) {
        return state.canvases[i.canvasIndex].rows[i.rowIndex].columns;
    }

    // Otherwise, return the component.
    return state.canvases[i.canvasIndex].rows[i.rowIndex].columns[i.columnIndex].components;
};

/**
 * Clears the current selection.
 *
 */
export const resetSelection = state => {
    window.Vue.set(state.selected, "type", undefined);
    window.Vue.set(state.selected, "component", undefined);
    window.Vue.set(state.selected, "column", undefined);
    window.Vue.set(state.selected, "row", undefined);
    window.Vue.set(state.selected, "canvas", undefined);
}