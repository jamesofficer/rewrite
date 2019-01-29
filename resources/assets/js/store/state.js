import defaultCanvas from "./defaults/Canvas";
import { duplicateObject } from "./helpers";

export default {
    // The title the user gives the article.
    articleTitle: null,

    // When the user exports HTML, it will be held here.
    articleHtml: undefined,

    // Hide or show the Colour Picker.
    // showColorPicker: false,

    // The property and optional subProperty the Colour Picker should update.
    // colorPickerProperty: undefined,
    // colorPickerSubProperty: undefined,

    // If true, when the styles of a component are updated the change will apply at all device sizes.
    enableGlobalComponentStyles: true,

    // Sometimes we want to disable keybindings, such as when we are editing a text element.
    enableKeyBindings: true,

    // The currently selected device size. Can be small, medium, large, or extra-large.
    deviceSizes: ['sm', 'md', 'lg', 'xl'],
    deviceSize: 'xl',

    // The indexes of the element that is currently selected by the user.
    selected: {
        canvas: undefined,
        row: undefined,
        column: undefined,
        component: undefined,
        type: undefined,
    },

    // The sidebar icon (element style) that is currently clicked on, e.g. 'Layout', 'Text Controls', etc.
    selectedElementStyle: null,

    // The content of the workspace. The full list of Canvases and everything within them.
    canvases: [
        duplicateObject(defaultCanvas),
    ],

    // The notification dialog box that appears above the article title.
    notification: {
        message: '',
        type: 'success',
        dismissSecs: 5,
        dismissCountDown: 0,
    },

    // Holds an array of all the Fonts used in the article. We do this so we can append the
    // needed stylesheets to the document head when exporting the article. Each object
    // in this array has the font name, and the font weights we need to save.
    fontsUsed: [],
};
