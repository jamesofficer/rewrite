import defaultCanvas from "./defaults/Canvas";
import { duplicateObject } from "./helpers";

export default {
    articleTitle: null,
    articleHtml: undefined,

    // The Alert Message that appears above the article title.
    alertMessage: {
        message: '',
        type: 'success',
        dismissSecs: 5,
        dismissCountDown: 0,
    },

    canvases: [
        duplicateObject(defaultCanvas),
    ],

    currentCanvas: undefined,
    currentColumn: undefined,
    currentComponent: undefined,

    showAddComponentModal: false,
};
