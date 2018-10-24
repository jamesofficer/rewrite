import defaultColumn from "./Column";

export default {
    type: "Canvas",
    selected: false,

    columns: [defaultColumn],
    columnAlignment: 'start',

    // Properties:
    backgroundSize: 'Auto',
    backgroundColor: { r: 255, g: 255, b: 255, a: 1 },
    backgroundPosition: 'Center',
    padding: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
    }
};
