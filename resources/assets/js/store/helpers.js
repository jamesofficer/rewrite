export const duplicateObject = object => {
    return JSON.parse(JSON.stringify(object));
};

export const deselectCurrentElement = state => {
    if (state.active.canvas !== undefined) {
        // Deselect a Canvas
        if (state.active.row === undefined && state.active.column === undefined && state.active.component === undefined) {
            state.canvases[state.active.canvas].selected = false;
        }

        // Deselect a Row
        else if (state.active.row !== undefined && state.active.column === undefined && state.active.component === undefined) {
            state.canvases[state.active.canvas].columns[state.active.column].selected = false;
        }

        // Deselect a Column
        else if (state.active.column !== undefined && state.active.component === undefined) {
            state.canvases[state.active.canvas].columns[state.active.column].selected = false;
        }

        // Deselect a Component
        else {
            state.canvases[state.active.canvas].rows[state.active.row].columns[state.active.column].components[state.active.component].selected = false;
        }
    }
};

// Returns the selected Canvas, Column, or Component
export const getSelectedElement = state => {
    // Return a Canvas
    if (state.active.row === undefined && state.active.column === undefined && state.active.component === undefined) {
        return state.canvases[state.active.canvas];
    }

    // Return a Row
    if (state.active.column !== undefined && state.active.component === undefined) {
        return state.canvases[state.active.canvas].rows[state.active.row];
    }

    // Return a Column
    if (state.active.component === undefined) {
        return state.canvases[state.active.canvas].rows[state.active.row].columns[state.active.column];
    }

    // Return a Component
    return state.canvases[state.active.canvas].rows[state.active.row].columns[state.active.column].components[state.active.component];
};

