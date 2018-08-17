// ========================================= //
// Helper Functions
// NOT USED AT THE MOMENT
// ========================================= //

// Returns the selected Canvas or Component
export const getSelectedElement = (state) => {
    if (state.selectedComponent.componentIndex === undefined) {
        return state.canvases[state.selectedComponent.canvasIndex];
    }

    return state.canvases[state.selectedComponent.canvasIndex].components[state.selectedComponent.componentIndex];
}

export const duplicateObject = (object) => {
    return JSON.parse(JSON.stringify(object));
}
