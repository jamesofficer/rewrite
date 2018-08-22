import defaultCanvas from "./defaults/Canvas";
import { duplicateObject } from "./helpers";

export default {
    articleName: null,
    canvases: [duplicateObject(defaultCanvas)],
    selectedComponent: undefined
};
