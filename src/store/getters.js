// Returns the list of Canvases present in the state object.
export const canvases = state => state.canvases;

// If this returns true the sidebar will be displayed, as something is selected.
export const elementIsSelected = state => state.selectedComponent ? true : false;

// Determines whether or a not a Canvas is selected and should appear in the sidebar.
// If the componentIndex value of the 'selectedElement' object in the state is
// undefined, then we know no component is selected, but a canvas has been.
export const canvasIsSelected = (state) => (canvasIndex) => {
    if (state.selectedComponent !== undefined) {
        if (state.selectedComponent.canvasIndex === canvasIndex && state.selectedComponent.componentIndex === undefined) {
            return true;
        }
    }

    return false;
}

// Returns the text alignment value of the selected component.
export const textAlignment = (state) => (i) => state.canvases[i.canvasIndex].components[i.componentIndex].align;

// Returns the font weight value of the selected component.
export const fontWeight = (state) => (i) => state.canvases[i.canvasIndex].components[i.componentIndex].fontWeight;