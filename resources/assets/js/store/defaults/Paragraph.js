let paragraph = {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra eu lectus eu tempor. Duis metus turpis, hendrerit iaculis sem at, venenatis faucibus nisi. Nullam placerat mi nisi, et blandit orci pharetra eu. Praesent posuere suscipit eros eget malesuada.',

    width: 100,
    fontFamily: 'Times New Roman',
    fontWeights: [400, 700],
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 1,
    letterSpacing: 0,
    textAlign: 'left',
    textColor: { r: 0, g: 0, b: 0, a: 1 },
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
    textShadow: {
        offsetX: 0,
        offsetY: 0,
        blurRadius: 0,
        color: { r: 0, g: 0, b: 0, a: 0 },
    },
}

export default {
    type: 'Paragraph',
    selected: false,
    visible: true,
    identifier: undefined,

    sm: paragraph,
    md: paragraph,
    lg: paragraph,
    xl: paragraph,
}