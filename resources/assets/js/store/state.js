import defaultCanvas from "./defaults/Canvas";
import { duplicateObject } from "./helpers";

export default {
    articleTitle: null,
    canvases: [duplicateObject(defaultCanvas)],

    currentCanvas: undefined,
    currentColumn: undefined,
    currentComponent: undefined,

    showAddComponentModal: false,
};
