const deviceSizeToPx = {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
};

const camelCaseToDash = (str) => {
    return str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()
}

export const generateHTML = (state) => {
    const canvases = state.canvases;

    canvases.forEach(function (canvas) {
        state.deviceSizes.forEach(function (size) {
            convertElementToCSS(canvas[size], canvas.identifier, deviceSizeToPx[size]);
        });
    });
}

const convertElementToCSS = (element, elementIdentifier, mediaQueryWidth) => {
    const properties = Object.keys(element);
    let elementCSS   = '@media (min-width: ' + mediaQueryWidth + ') { \n';

    elementCSS += '.' + elementIdentifier + ' { \n'

    properties.forEach(function (property) {
        elementCSS += getPropertyCSS(element, property) + '\n';
    });

    elementCSS += '} \n } \n';

    console.log(elementCSS);
}

/**
 * Dynamically calls the appropriate method to generate css. If propertyName
 * parameter is 'padding', then paddingCSS function is called.
 *
 */
const getPropertyCSS = (element, propertyName) => {
    const funcName  = 'get' + propertyName.charAt(0).toUpperCase() + propertyName.slice(1) + 'CSS';

    return eval(`${funcName}(element[propertyName])`);
}

function getBackgroundSizeCSS (size) {
    return `background-size: ${size.toLowerCase()};`;
}

function getBackgroundPositionCSS (position) {
    return `background-position: ${position.toLowerCase()};`;
}

function getBackgroundColorCSS (colors) {
    return `background-color: rgba(${colors.r}, ${colors.g}, ${colors.b}, ${colors.a});`;
}

function getPaddingCSS (padding) {
    return `padding: ${padding.top}px ${padding.right}px ${padding.bottom}px ${padding.left}px;`;
}

