import defaultCanvas from './defaults/Canvas'
import { duplicateObject, getSelectedElement } from './helpers'

// Adds another Canvas to the Workspace.
export const addCanvas = state => {
    state.canvases.push(duplicateObject(defaultCanvas));
};

// Sets the currently selected component to whatever the used clicked on.
export const selectCanvas = (state, canvasIndex) => {
    state.selectedComponent = {
        canvasIndex: canvasIndex,
        componentIndex: undefined,
    }

    state.canvases[canvasIndex].selected = true;
};

// Sets the currently selected component to whatever the used clicked on.
export const setSelectedComponent = (state, component) => {
    if (state.selectedComponent !== undefined) {
        getSelectedElement(state).selected = false;
    }

    state.selectedComponent = {
        canvasIndex: component.canvasIndex,
        componentIndex: component.componentIndex,
    }

    getSelectedElement(state).selected = true;
};

export const closeComponent = (state) => {
    state.selectedComponent = undefined;
}

// Sets the background colour on a Canvas
export const setBackgroundColor = (state, color) => {
    window.Vue.set(getSelectedElement(state), 'backgroundColor', color);
};

// Sets the string value of a Text Component
export const updateTextContent = (state, value) => {
    window.Vue.set(getSelectedElement(state), 'content', value);
};

// Sets the Text Alignment on a Text Component
export const alignText = (state, position) => {
    window.Vue.set(getSelectedElement(state), 'align', position);
};

// Sets the Font Size on a Text Component
export const setFontSize = (state, size) => {
    window.Vue.set(getSelectedElement(state), 'fontSize', size);
};

// Sets the Font Weight on a Text Component
export const setFontWeight = (state, weight) => {
    window.Vue.set(getSelectedElement(state), 'fontWeight', weight);
};

