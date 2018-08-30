export const duplicateObject = object => {
    return JSON.parse(JSON.stringify(object));
};

export const deselectCurrentElement = state => {
    if (state.currentCanvas !== undefined) {
        if (state.currentColumn === undefined && state.currentComponent === undefined) {
            state.canvases[state.currentCanvas].selected = false;
        } else if (state.currentColumn !== undefined && state.currentComponent === undefined) {
            state.canvases[state.currentCanvas].columns[state.currentColumn].selected = false;
        } else {
            state.canvases[state.currentCanvas].columns[state.currentColumn].components[state.currentComponent].selected = false;
        }
    }
}

// Returns the selected Canvas, Column, or Component
export const getSelectedElement = state => {
    // Return a Canvas
    if (state.currentColumn === undefined && state.currentComponent === undefined) {
        return state.canvases[state.currentCanvas];
    }

    // Return a Column
    if (state.currentColumn !== undefined && state.currentComponent === undefined) {
        return state.canvases[state.currentCanvas].columns[state.currentColumn];
    }

    // Return a Component
    return state.canvases[state.currentCanvas].columns[state.currentColumn].components[state.currentComponent];
};

