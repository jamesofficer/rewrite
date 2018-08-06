import defaultCanvas from './defaults/Canvas'
import { duplicateObject, getSelectedComponent } from './helpers'

// Adds another Canvas to the Workspace.
export const addCanvas = state => {
    state.canvases.push(duplicateObject(defaultCanvas));
};

// Sets the currently selected component to whatever the used clicked on.
export const setSelectedComponent = (state, selectedComponent) => {
    if (state.currentlySelectedComponent !== undefined) {
        getSelectedComponent(state).selected = false;
    }

    state.currentlySelectedComponent = {
        canvasIndex: selectedComponent.canvasIndex,
        componentIndex: selectedComponent.componentIndex,
    }

    getSelectedComponent(state).selected = true;
};

export const closeComponent = (state) => {
    state.currentlySelectedComponent = undefined;
}

// Sets the string value of a Text Component
export const updateTextContent = (state, value) => {
    window.Vue.set(getSelectedComponent(state), 'content', value);
};

// Sets the Text Alignment on a Text Component
export const alignText = (state, position) => {
    window.Vue.set(getSelectedComponent(state), 'align', position);
};

// Sets the Font Size on a Text Component
export const setFontSize = (state, size) => {
    window.Vue.set(getSelectedComponent(state), 'fontSize', size);
};

// Sets the Font Weight on a Text Component
export const setFontWeight = (state, weight) => {
    window.Vue.set(getSelectedComponent(state), 'fontWeight', weight);
};

