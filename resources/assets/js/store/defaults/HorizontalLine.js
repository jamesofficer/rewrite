let horizontalLine = {
    width: 100,
    textAlign: "center",
    backgroundColor: { r: 200, g: 200, b: 200, a: 1 },
    margin: {
        top: 20,
        right: 0,
        bottom: 20,
        left: 0,
    },
    padding: {
        top: 3,
        right: 0,
        bottom: 3,
        left: 0,
    },
    border: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        radius: 0,
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

export default {
    type: 'HorizontalLine',
    selected: false,

    sm: horizontalLine,
    md: horizontalLine,
    lg: horizontalLine,
    xl: horizontalLine,
}