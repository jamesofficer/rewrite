// This element is named 'Picture' as 'Image' is a reserved tag.

let picture = {
    src: undefined,

    textAlign: "left",
    width: 75,
    margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
    padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
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
    type: "Picture",
    selected: false,
    visible: true,
    identifier: undefined,

    sm: picture,
    md: picture,
    lg: picture,
    xl: picture,
};
