import defaultCanvas from './defaults/Canvas'
import { duplicateObject } from './helpers'

export default {
    canvases: [duplicateObject(defaultCanvas)],
    selectedComponent: undefined,
};