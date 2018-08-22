/**
 * Returns the list of Canvases on the state. Used to populate the main workspace.
 */
export const canvases = state => state.canvases;

/**
 * Returns the name of the article.
 */
export const articleName = state => state.articleName;

/**
 * Returns the indexes of currently selected canvas and component (or undefined if nothing selected)
 */
export const getCurrentIndexes = state => state.selectedComponent;

/**
 * Returns the currently selected element. This can be either a Canvas or a Component.
 * This is used for 'core' components, as they have no knowledge of their indexes.
 */
export const getCurrentElement = state => {
    const element = state.selectedComponent;

    // selectedComponent will be undefined when the app first starts. Return null to fix errors.
    if (state.selectedComponent === undefined) {
        return null;
    }

    if (element.componentIndex === undefined) {
        return state.canvases[element.canvasIndex];
    } else {
        return state.canvases[element.canvasIndex].components[
            element.componentIndex
        ];
    }
};

/**
 * Returns an element based off the index values that are passed in.
 * This is used on Components, as their indexes can be passed in.
 */
export const getElement = state => i => {
    if (i.componentIndex === undefined) {
        return state.canvases[i.canvasIndex];
    }

    return state.canvases[i.canvasIndex].components[i.componentIndex];
};

/**
 * If this returns true the sidebar will be displayed, as something is selected (Canvas or Component).
 */
export const elementIsSelected = state =>
    state.selectedComponent ? true : false;

/**
 * Returns true only if ANY component is selected (returns false if a Canvas is selected).
 */
export const componentIsSelected = state => i => {
    if (state.selectedComponent !== undefined) {
        if (
            state.selectedComponent.canvasIndex === i.canvasIndex &&
            state.selectedComponent.componentIndex === i.componentIndex
        ) {
            return true;
        }
    }

    return false;
};

// Determines whether the SPECIFIED Canvas is selected and should appear in the sidebar.
// If the componentIndex value of the 'selectedElement' object in the state is
// undefined, then we know no component is selected, but a canvas has been.
export const canvasIsSelected = state => canvasIndex => {
    if (state.selectedComponent !== undefined) {
        if (
            state.selectedComponent.canvasIndex === canvasIndex &&
            state.selectedComponent.componentIndex === undefined
        ) {
            return true;
        }
    }

    return false;
};
