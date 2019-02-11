export const duplicateObject = object => {
    return JSON.parse(JSON.stringify(object));
};

/**
 * By default this returns the currently selected element but we can specify an index array position
 * that is higher or lower than the selected element if we want to. This is usually used when
 * moving an element around the workspace, to the element above or below the current one.
 *
 * @param {*} state
 * @param {*} position - position is usually 1, 0, or -1, i.e. current element (0), one above (1), or one below (-1).
 * @param {*} size - if we want to get the element for a specific size, we can pass that in here (e.g. 'xl', or 'sm').
 */
export const getSelectedElement = (state, position = 0, size = null) => {
    if (size === null) {
        size = state.deviceSize;
    }

    // Return a Canvas
    if (state.selected.type === 'Canvas') {
        return state.canvases[state.selected.canvas + (position)][size];
    }
    // Return a Row
    else if (state.selected.type === 'Row') {
        return state.canvases[state.selected.canvas].rows[state.selected.row + (position)][size];
    }
    // Return a Column
    else if (state.selected.type === 'Column') {
        return state.canvases[state.selected.canvas].rows[state.selected.row]
            .columns[state.selected.column + (position)][size];
    }
    // Return a Component
    else {
        return state.canvases[state.selected.canvas].rows[state.selected.row]
            .columns[state.selected.column].components[state.selected.component + (position)][size];
    }
};

/**
 * Returns an element based off the index values that are passed in. This is used to make styling elements easier.
 *
 */
export const getElementByIndexes = state => i => {
    // If row, column, and component are undefined, return the canvas.
    if (i.rowIndex === undefined && i.columnIndex === undefined && i.componentIndex === undefined) {
        return state.canvases[i.canvasIndex][state.deviceSize];
    }
    // If the component and column are undefined, return the row.
    if (i.rowIndex !== undefined && i.columnIndex === undefined && i.componentIndex === undefined) {
        return state.canvases[i.canvasIndex].rows[i.rowIndex][state.deviceSize];
    }
    // If the component index is undefined, return the column.
    if (i.rowIndex !== undefined && i.columnIndex !== undefined && i.componentIndex === undefined) {
        return state.canvases[i.canvasIndex].rows[i.rowIndex].columns[i.columnIndex][state.deviceSize];
    }
    // Otherwise, return the component.
    return state.canvases[i.canvasIndex].rows[i.rowIndex].columns[i.columnIndex]
                .components[i.componentIndex][state.deviceSize];
};

/**
 * When an element is selected, it doesn't actually select the "entire" element, only the
 * parts that need to be styled for the current device size. By getting the "root"
 * element we are getting the entire element with all device sizes as well.
 *
 */
export const getSelectedRootElement = (state, position = 0) => {
    if (state.selected.type !== undefined) {
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
    }
}

/**
 * Gets the root element, but based off the indexes that are passed in, and not the currently selected element.
 *
 */
export const getRootElementByIndexes = (state, i) => {
    if (i.rowIndex === undefined && i.columnIndex === undefined && i.componentIndex === undefined) {
        return state.canvases[i.canvasIndex];
    }

    if (i.rowIndex !== undefined && i.columnIndex === undefined && i.componentIndex === undefined) {
        return state.canvases[i.canvasIndex].rows[i.rowIndex];
    }

    if (i.rowIndex !== undefined && i.columnIndex !== undefined && i.componentIndex === undefined) {
        return state.canvases[i.canvasIndex].rows[i.rowIndex].columns[i.columnIndex];
    }

    return state.canvases[i.canvasIndex].rows[i.rowIndex].columns[i.columnIndex]
                .components[i.componentIndex];
}

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
    const element = getSelectedRootElement(state);

    element.selected = false;

    window.Vue.set(state.selected, "type", undefined);
    window.Vue.set(state.selected, "component", undefined);
    window.Vue.set(state.selected, "column", undefined);
    window.Vue.set(state.selected, "row", undefined);
    window.Vue.set(state.selected, "canvas", undefined);
}

export const generateIdentifer = () => {
    const length   = 8;
    const chars    = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let identifier = '';

    for (let i = length; i > 0; --i) {
        identifier += chars[Math.round(Math.random() * (chars.length - 1))];
    }

    // TODO: Check the identifier doesn't already exist.

    return identifier;
}
