/**
 * Returns the list of Canvases on the state. Used to populate the main workspace.
 */
export const canvases = state => state.canvases;

/**
 * Returns the indexes of currently selected canvas and component (or undefined if nothing selected)
 */
export const getCurrentIndexes = state => state.selectedComponent;

/**
 * If this returns true the sidebar will be displayed, as something is selected (Canvas or Component).
 */
export const elementIsSelected = state => state.selectedComponent ? true : false;

/**
 * Returns true only if ANY component is selected (returns false if a Canvas is selected).
 */
export const componentIsSelected = state => {
    if (state.selectedComponent !== undefined) {
        if (state.selectedComponent.componentIndex !== undefined) {
            return true;
        }
    }

    return false;
}

// Determines whether the SPECIFIED Canvas is selected and should appear in the sidebar.
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