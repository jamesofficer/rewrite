// Returns the list of Canvases on the state.
export const canvases = state => state.canvases;

export const componentIsSelected = state => {
    if (state.currentlySelectedComponent === undefined) {
        return false;
    }

    return true;
}

// Returns the text alignment value of the selected component.
export const textAlignment = (state) => (i) => state.canvases[i.canvasIndex].components[i.componentIndex].align;

// Returns the font weight value of the selected component.
export const fontWeight = (state) => (i) => state.canvases[i.canvasIndex].components[i.componentIndex].fontWeight;