import defaultCanvas from "./defaults/Canvas";
import { duplicateObject } from "./helpers";

export default {
    articleTitle: null,
    articleHtml: undefined,

    canvases: [
        duplicateObject(defaultCanvas),
    ],

    currentCanvas: undefined,
    currentColumn: undefined,
    currentComponent: undefined,

    copiedStyle: undefined,

    showAddComponentModal: false,
};
