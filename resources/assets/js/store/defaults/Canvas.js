import defaultRow from "./Row";

let canvas = {
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

export default {
    type: "Canvas",
    selected: false,
    visible: true,

    rows: [defaultRow],

    sm: canvas,
    md: canvas,
    lg: canvas,
    xl: canvas,
};
