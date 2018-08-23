import defaultCanvas from "./defaults/Canvas";
import { duplicateObject } from "./helpers";

export default {
    articleTitle: null,
    canvases: [duplicateObject(defaultCanvas)],
    selectedComponent: undefined
};
