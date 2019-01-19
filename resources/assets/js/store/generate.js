// const propertyList = [
//     padding = {
//         functionName: getBackgroundColorCSS,
//     },

//     backgroundColor = {
//         functionName: getBackgroundColorCSS,
//     },
// ];

export const generateHTML = (state) => {
    const canvases = state.canvases;

    canvases.forEach(function (canvas) {
        state.deviceSizes.forEach(function (size) {
            convertElementToCSS(canvas[size]);
        });
    });
}

const camelCaseToDash = (str) => {
    return str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()
  }

const convertElementToCSS = (element) => {
    const properties = Object.keys(element);
    let elementCSS   = '';

    properties.forEach(function (property) {
        getPropertyCSS(element, property);
    });
}

/**
 * Dynamically calls the appropriate method to generate css.
 * If propertyName parameter is 'padding', then paddingCSS function is called.
 */
const getPropertyCSS = (element, propertyName) => {
    const funcName  = 'get' + propertyName.charAt(0).toUpperCase() + propertyName.slice(1) + 'CSS';

    return eval(`${funcName}(element[propertyName])`);
}

const getBackgroundSizeCSS = size => {
    return `background-size: ${size.toLowerCase()};`;
}

const getBackgroundPositionCSS = position => {
    return `background-position: ${position.toLowerCase()};`;
}

const getBackgroundColorCSS = colors => {
    return `background-color: rgba(${colors.r}, ${colors.g}, ${colors.b}, ${colors.a});`;
}

const getPaddingCSS = padding => {
    return `padding: ${padding.top}, ${padding.right}, ${padding.bottom}, ${padding.left};`;
}

