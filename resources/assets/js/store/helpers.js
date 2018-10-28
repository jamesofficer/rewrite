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
    // Return a Component
    if (state.active.component !== undefined) {
        return state.canvases[state.active.canvas].rows[state.active.row]
            .columns[state.active.column].components[state.active.component + (position)];
    }

    // Return a Column
    if (state.active.column !== undefined) {
        return state.canvases[state.active.canvas].rows[state.active.row]
            .columns[state.active.column + (position)];
    }

    // Return a Row
    if (state.active.row !== undefined) {
        return state.canvases[state.active.canvas].rows[state.active.row + (position)];
    }

    // Return a Canvas
    if (state.active.canvas !== undefined) {
        return state.canvases[state.active.canvas + (position)];
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