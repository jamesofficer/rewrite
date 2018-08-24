// Returns the selected Canvas or Component
export const getSelectedElement = state => {
    const component = state.selectedComponent;

    if (component.componentIndex === undefined) {
        return state.canvases[component.canvasIndex];
    }

    return state.canvases[component.canvasIndex].columns[component.columnIndex][
        component.componentIndex
    ];
};

export const duplicateObject = object => {
    return JSON.parse(JSON.stringify(object));
};
