// ========================================= //
// Helper Functions
// NOT USED AT THE MOMENT
// ========================================= //

export const getSelectedComponent = (state) => {
    return state.canvases[state.currentlySelectedComponent.canvasIndex].components[state.currentlySelectedComponent.componentIndex];
}

export const duplicateObject = (object) => {
    return JSON.parse(JSON.stringify(object));
}
