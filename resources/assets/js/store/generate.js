let stylesheet = '';

const propertiesToIgnore = [
    'componentAlignment', 'columnWidth', 'columnOffset', 'content', 'fontWeights', 'src',
];

const deviceSizeToPx = {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
};

export const generateHTML = (state) => {
    const canvases = state.canvases;

    state.deviceSizes.forEach(function (size) {
        stylesheet += '@media (min-width: ' + deviceSizeToPx[size] + ') { \n';

        canvases.forEach(function (canvas) {
            convertElementToCSS(canvas[size], canvas.identifier);

            canvas.rows.forEach(function (row) {
                convertElementToCSS(row[size], row.identifier);

                row.columns.forEach(function (column) {
                    convertElementToCSS(column[size], column.identifier);

                    column.components.forEach(function (component) {
                        convertElementToCSS(component[size], component.identifier);
                    });
                });
            });
        });

        stylesheet += '} \n \n';
    });

    console.log(stylesheet);
}

const convertElementToCSS = (element, elementIdentifier) => {
    const properties = Object.keys(element);
    let elementCSS   = '\t.' + elementIdentifier + ' { \n'

    properties.forEach(function (property) {
        if (! propertiesToIgnore.includes(property)) {
            elementCSS += '\t \t' + getPropertyCSS(element, property) + '\n';
        }
    });

    elementCSS += '\t } \n \n';
    stylesheet += elementCSS;
}

/**
 * Dynamically calls the appropriate method to generate css. If propertyName
 * parameter is 'padding', then paddingCSS function is called.
 *
 */
const getPropertyCSS = (element, propertyName) => {
    const funcName  = 'get' + propertyName.charAt(0).toUpperCase() + propertyName.slice(1) + 'CSS';

    const result = eval(`${funcName}(element[propertyName])`);

    // console.log(result);

    return result;
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

function getMarginCSS (margin) {
    return `margin: ${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px;`;
}

function getPaddingCSS (padding) {
    return `padding: ${padding.top}px ${padding.right}px ${padding.bottom}px ${padding.left}px;`;
}

function getBorderCSS (border) {
    return `border: ${border.top}px ${border.right}px ${border.bottom}px ${border.left}px ${border.style} rgba(${border.color.r}, ${border.color.g}, ${border.color.b}, ${border.color.a});`;
}

function getBoxShadowCSS (shadow) {
    return `box-shadow: ${shadow.offsetX}px ${shadow.offsetY}px ${shadow.blurRadius}px rgba(${shadow.color.r}, ${shadow.color.g}, ${shadow.color.b}, ${shadow.color.a});`;
}

function getTextShadowCSS (shadow) {
    return `text-shadow: ${shadow.offsetX}px ${shadow.offsetY}px ${shadow.blurRadius}px rgba(${shadow.color.r}, ${shadow.color.g}, ${shadow.color.b}, ${shadow.color.a});`;
}

function getWidthCSS (width) {
    return `width: ${width}%;`;
}

function getFontFamilyCSS (fontFamily) {
    return `font-family: ${fontFamily}, Helvetica, Arial, sans-serif;`;
}

function getFontWeightCSS (fontWeight) {
    return `font-weight: ${fontWeight};`;
}

function getFontSizeCSS (fontSize) {
    return `font-size: ${fontSize};`;
}

function getLineHeightCSS (lineHeight) {
    return `line-height: ${lineHeight};`;
}

function getLetterSpacingCSS (letterSpacing) {
    return `letter-spacing: ${letterSpacing}px;`;
}

function getTextAlignCSS (textAlign) {
    return `text-align: ${textAlign};`;
}

function getTextColorCSS (color) {
    return `color: rgba(${color.r}, ${color.g}, ${color.b}, ${color.a});`;
}