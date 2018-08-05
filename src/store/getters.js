// function getComponent(indexes) {
//     return this.state.canvases[indexes.canvasIndex].components[indexes.componentIndex].align;
// }

export const canvases = state => {
    return state.canvases;
};

export const textAlignment = (state) => (i) => state.canvases[i.canvasIndex].components[i.componentIndex].align;
export const fontWeight = (state) => (i) => state.canvases[i.canvasIndex].components[i.componentIndex].fontWeight;