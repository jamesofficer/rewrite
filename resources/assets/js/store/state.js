import defaultCanvas from "./defaults/Canvas";
import { duplicateObject } from "./helpers";

export default {
    articleTitle: null,
    articleHtml: undefined,

    // The notification dialog box that appears above the article title.
    notification: {
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

    // Holds an array of all the Fonts used in the article. We do this so we can append the
    // needed stylesheets to the document head when exporting the article. Each object
    // in this array has the font name, and the font weights we need to save.
    fontsUsed: [],
};
