export const duplicateObject = object => {
    return JSON.parse(JSON.stringify(object));
};


export const getSelectedElement = state => {
    // Return a Component
    if (state.active.component !== undefined) {
        return state.canvases[state.active.canvas].rows[state.active.row].columns[state.active.column].components[state.active.component];
    }

    // Return a Column
    if (state.active.column !== undefined) {
        return state.canvases[state.active.canvas].rows[state.active.row].columns[state.active.column];
    }

    // Return a Row
    if (state.active.row !== undefined) {
        return state.canvases[state.active.canvas].rows[state.active.row];
    }

    // Return a Canvas
    if (state.active.canvas !== undefined) {
        return state.canvases[state.active.canvas];
    }
};

/**
 * Clears the current selection.
 *
 */
export const resetSelection = state => {
    window.Vue.set(state.active, "canvas", undefined);
    window.Vue.set(state.active, "row", undefined);
    window.Vue.set(state.active, "column", undefined);
    window.Vue.set(state.active, "component", undefined);
}