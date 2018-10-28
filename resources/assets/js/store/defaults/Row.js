import defaultColumn from "./Column";

export default {
    type: "Row",
    selected: false,

    columns: [defaultColumn],

    // Properties:
    backgroundSize: 'Auto',
    backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
    backgroundPosition: 'Center',
    margin: {
        top: 20,
        right: 0,
        bottom: 20,
        left: 0
    },
    padding: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
    },
    border: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        style: 'solid',
        color: { r: 0, g: 0, b: 0, a: 1 },
    },
    boxShadow: {
        offsetX: 0,
        offsetY: 0,
        blurRadius: 0,
        color: { r: 0, g: 0, b: 0, a: 1 },
    },
}