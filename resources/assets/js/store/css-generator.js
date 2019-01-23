let stylesheet = '';

const propertiesToIgnore = [
    'componentAlignment', 'columnWidth', 'columnOffset', 'content', 'fontWeights', 'src', 'rows', 'columns', 'components'
];

const deviceSizeToPx = {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
};

/**
 * Loops through all Canvases, Rows, Columns, and Components in the workspace and generates
 * a stylesheet for all elements. As we have four primary device sizes we create four
 * seperate media queries, and each element has properties generated for each size.
 *
 */
export const createArticleStylesheet = (state) => {
    const canvases = state.canvases;

    state.deviceSizes.forEach(function (size) {
        // Default styles are mobile first, so we don't use a media query at that size.
        if (size !== 'sm') {
            stylesheet += '@media (min-width: ' + deviceSizeToPx[size] + ') { \n';
        }

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

        if (size !== 'sm') {
            stylesheet += '} \n \n';
        }
    });

    return stylesheet;
}

/**
 * Creates a CSS class and gets the relevant CSS for the element that is passed in.
 *
 */
const convertElementToCSS = (element, elementIdentifier) => {
    const properties = Object.keys(element);
    let elementCSS   = '\t#' + elementIdentifier + ' { \n'

    properties.forEach(function (property) {
        if (! propertiesToIgnore.includes(property)) {
            const css = getPropertyCSS(element, property);

            // Sometimes we may not need to append any css, typically when we are using the default css value.
            if (css !== undefined) {
                elementCSS += '\t \t' + css + '\n';
            }
        }
    });

    elementCSS += '\t } \n \n';
    stylesheet += elementCSS;
}

/**
 * Dynamically calls the appropriate method to generate css. For example, if the
 * propertyName parameter is 'padding', then the paddingCSS function is called.
 *
 */
const getPropertyCSS = (element, propertyName) => {
    const cssFunctionName = 'get' + propertyName.charAt(0).toUpperCase() + propertyName.slice(1) + 'CSS';

    return eval(`${cssFunctionName}(element[propertyName])`);
}

function getBackgroundSizeCSS (size) {
    if (size !== 'Auto') {
        return `background-size: ${size.toLowerCase()};`;
    }
}

// TODO: Update the default value for backgroundPosition. 'center' should NOT be the default.
function getBackgroundPositionCSS (position) {
    if (position !== 'Center') {
        return `background-position: ${position.toLowerCase()};`;
    }
}

function getBackgroundColorCSS (color) {
    if (color.r === 255 && color.g === 255 && color.b === 255 && color.a === 1) {
        return undefined;
    }

    return `background-color: rgba(${color.r}, ${color.g}, ${color.b}, ${color.a});`;
}

function getBackgroundImageCSS (image) {
    return `background-image: ${image};`;
}

function getMarginCSS (margin) {
    const marginTop    = margin.top > 0 ? `${margin.top}px` : '0';
    const marginRight  = margin.right > 0 ? `${margin.right}px` : '0';
    const marginBottom = margin.bottom > 0 ? `${margin.bottom}px` : '0';
    const marginLeft   = margin.left > 0 ? `${margin.left}px` : '0';

    if (marginTop === '0' && marginRight === '0' && marginBottom === '0' && marginLeft === '0') {
        return undefined;
    }

    return `margin: ${marginTop} ${marginRight} ${marginBottom} ${marginLeft};`;
}

function getPaddingCSS (padding) {
    const paddingTop    = padding.top > 0 ? `${padding.top}px` : '0';
    const paddingRight  = padding.right > 0 ? `${padding.right}px` : '0';
    const paddingBottom = padding.bottom > 0 ? `${padding.bottom}px` : '0';
    const paddingLeft   = padding.left > 0 ? `${padding.left}px` : '0';

    if (paddingTop === '0' && paddingRight === '0' && paddingBottom === '0' && paddingLeft === '0') {
        return undefined;
    }

    return `padding: ${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft};`;
}

// TODO: The output of this function slightly breaks the idententation of the final CSS.
function getBorderCSS (border) {
    const borderTop    = border.top > 0 ? `${border.top}px` : '0';
    const borderRight  = border.right > 0 ? `${border.right}px` : '0';
    const borderBottom = border.bottom > 0 ? `${border.bottom}px` : '0';
    const borderLeft   = border.left > 0 ? `${border.left}px` : '0';
    const borderRadius = border.radius > 0 ? `${border.radius}px` : '0';

    if (borderTop === '0' && borderRight === '0' && borderBottom === '0' && borderLeft === '0') {
        return undefined;
    }

    return `
        border-width: ${borderTop} ${borderRight} ${borderBottom} ${borderLeft};
        border-style: ${border.style};
        border-color: rgba(${border.color.r}, ${border.color.g}, ${border.color.b}, ${border.color.a});
        border-radius: ${borderRadius};
    `;
}

function getBoxShadowCSS (shadow) {
    if (shadow.offsetX === 0 && shadow.offsetY === 0 && shadow.blurRadius === 0) {
        return undefined;
    }

    return `box-shadow: ${shadow.offsetX}px ${shadow.offsetY}px ${shadow.blurRadius}px rgba(${shadow.color.r}, ${shadow.color.g}, ${shadow.color.b}, ${shadow.color.a});`;
}

function getTextShadowCSS (shadow) {
    if (shadow.offsetX === 0 && shadow.offsetY === 0 && shadow.blurRadius === 0) {
        return undefined;
    }

    return `text-shadow: ${shadow.offsetX}px ${shadow.offsetY}px ${shadow.blurRadius}px rgba(${shadow.color.r}, ${shadow.color.g}, ${shadow.color.b}, ${shadow.color.a});`;
}

function getWidthCSS (width) {
    if (width !== 100) {
        return `width: ${width}%;`;
    }
}

function getFontFamilyCSS (fontFamily) {
    return `font-family: '${fontFamily}', 'Helvetica', 'Arial', sans-serif;`;
}

function getFontWeightCSS (fontWeight) {
    return `font-weight: ${fontWeight};`;
}

function getFontSizeCSS (fontSize) {
    return `font-size: ${fontSize}pt;`;
}

function getLineHeightCSS (lineHeight) {
    if (lineHeight !== 1) {
        return `line-height: ${lineHeight};`;
    }
}

function getLetterSpacingCSS (letterSpacing) {
    if (letterSpacing !== 0) {
        return `letter-spacing: ${letterSpacing}px;`;
    }
}

function getTextAlignCSS (textAlign) {
    if (textAlign !== 'left') {
        return `text-align: ${textAlign};`;
    }
}

function getTextColorCSS (color) {
    if (color.r === 0 && color.g === 0 && color.b === 0 && color.a === 1) {
        return undefined;
    }

    return `color: rgba(${color.r}, ${color.g}, ${color.b}, ${color.a});`;
}
