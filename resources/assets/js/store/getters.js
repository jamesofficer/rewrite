import { getSelectedElement } from "./helpers";

/**
 * Returns the list of Canvases on the state. Used to populate the main workspace.
 */
export const canvases = state => {
    return state.canvases;
}

/**
 * Shows the Add Component Modal window.
 */
export const showAddComponentModal = state => {
    return state.showAddComponentModal;
}

/**
 * Returns the number of columns on this Canvas.
 */
export const columnCount = state => canvasIndex => {
    return state.canvases[canvasIndex].columns.length;
}

/**
 * Returns the total widths of all the columns on the current canvas.
 */
export const totalColumnWidth = state => {
    if (state.currentCanvas !== undefined) {
        let totalColumnWidth = 0;

        state.canvases[state.currentCanvas].columns.forEach(column => {
            totalColumnWidth += column.columnWidth;
        });

        return totalColumnWidth;
    }
}

/**
 * Returns true if there is a Canvas above this one.
 *
 */
export const canMoveCanvasUp = state => {
    if (state.currentCanvas !== undefined) {
        return state.currentCanvas > 0;
    }
}

/**
 * Returns true if there is a component below this one.
 *
 */
export const canMoveCanvasDown = state => {
    if (state.currentCanvas !== undefined) {
        return state.currentCanvas !== (state.canvases.length - 1);
    }
}

/**
 * Returns true if there is another column to the left of this one.
 * 
 */
export const canMoveColumnLeft = state => {
    if (state.currentColumn !== undefined) {
        return state.currentColumn > 0;
    }
}

/**
 * Returns true if there is another column to the right of this one i.e: we can move it right.
 *
 */
export const canMoveColumnRight = state => {
    if (state.currentColumn !== undefined) {
        return state.currentColumn !== (state.canvases[state.currentCanvas].columns.length - 1);
    }
}

/**
 * Returns true if there is a component above this one.
 *
 */
export const canMoveComponentUp = state => {
    if (state.currentComponent !== undefined) {
        return state.currentComponent !== 0;
    }
}

/**
 * Returns true if there is a component below this one.
 *
 */
export const canMoveComponentDown = state => {
    if (state.currentComponent !== undefined) {
        const numComponents = state.canvases[state.currentCanvas].columns[state.currentColumn].components.length;

        return state.currentComponent < (numComponents - 1);
    }
}

/**
 * Returns the list of Components for this particular canvas.
 */
export const getComponentsForColumn = state => i => {
    return state.canvases[i.canvasIndex].columns[i.columnIndex].components;
};

/**
 * Returns the currently selected element. This can be either a Canvas or a Component.
 * This is used for 'core' components, as they have no knowledge of their indexes.
 */
export const getCurrentElement = state => {
    // currentCanvas will be undefined when the app first starts. Return null to fix errors.
    if (state.currentCanvas === undefined) {
        return null;
    }

    return getSelectedElement(state);
};

/**
 * Returns an element based off the index values that are passed in.
 * This is used to make styling elements easier.
 */
export const getElement = state => i => {
    // If component and column are undefined, return the canvas.
    if (i.componentIndex === undefined && i.columnIndex === undefined) {
        return state.canvases[i.canvasIndex];
    }

    // If the component is undefined, return the column.
    if (i.componentIndex === undefined) {
        return state.canvases[i.canvasIndex].columns[i.columnIndex];
    }

    // Otherwise, return the component.
    return state.canvases[i.canvasIndex].columns[i.columnIndex].components[
        i.componentIndex
    ];
};

/**
 * Returns true if the specified element (based off the indexes) has been selected.
 */
export const elementIsSelected = state => i => {
    if (
        state.currentCanvas    === i.canvasIndex &&
        state.currentColumn    === i.columnIndex &&
        state.currentComponent === i.componentIndex
    ) {
        return true;
    }

    return false;
};

/**
 * Returns the html of the article.
 */
export const articleHtml = state => {
    return state.articleHtml;
}

/**
 * Returns the title of the article.
 */
export const articleTitle = state => {
    return state.articleTitle;
}