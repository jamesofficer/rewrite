import { duplicateObject, getSelectedElement, deselectCurrentElement } from "./helpers";
import defaultCanvas     from "./defaults/Canvas";
import defaultColumn     from "./defaults/Column";
import defaultHeading    from "./defaults/Heading";
import defaultParagraph  from "./defaults/Paragraph";
import defaultBlockQuote from "./defaults/BlockQuote";
import defaultPicture    from "./defaults/Picture";
import defaultInstagram  from "./defaults/InstagramEmbed";
import defaultFacebook   from "./defaults/FacebookEmbed";
import defaultYouTube    from "./defaults/YouTubeEmbed";
import defaultRecipeSummary    from "./defaults/RecipeSummary";
import defaultRecipeIngredients  from "./defaults/RecipeIngredients";

// Adds another Canvas to the Workspace.
export const addCanvas = state => state.canvases.push(duplicateObject(defaultCanvas));

// Deletes the selected Canvas
export const removeCanvas = state => {
    state.canvases.splice(state.currentCanvas, 1);
    state.currentCanvas = undefined;
};

// Deletes a component from a column.
export const deleteComponent = (state) => {
    state.canvases[state.currentCanvas].columns[state.currentColumn].components.splice(state.currentComponent, 1);
    state.currentComponent = undefined;
};

// Moves a component UP in a column.
export const moveComponentUp = state => {
    const currentComponentPos = state.currentComponent;

    if (currentComponentPos === 0) {
        return;
    }

    // Swap positions around:
    const componentAbove = state.canvases[state.currentCanvas].columns[state.currentColumn].components[currentComponentPos - 1];
    const thisComponent  = state.canvases[state.currentCanvas].columns[state.currentColumn].components[currentComponentPos];

    window.Vue.set(state.canvases[state.currentCanvas].columns[state.currentColumn].components, [currentComponentPos - 1], thisComponent);
    window.Vue.set(state.canvases[state.currentCanvas].columns[state.currentColumn].components, [currentComponentPos], componentAbove);

    // Reselect the moved element:
    state.currentComponent = currentComponentPos - 1;
};

// Moves a component DOWN in a column.
export const moveComponentDown = state => {
    const currentComponentPos = state.currentComponent;

    if (currentComponentPos === (state.canvases[state.currentCanvas].columns[state.currentColumn].components.length - 1)) {
        return;
    }

    // Swap positions around:
    const componentAbove = state.canvases[state.currentCanvas].columns[state.currentColumn].components[currentComponentPos + 1];
    const thisComponent  = state.canvases[state.currentCanvas].columns[state.currentColumn].components[currentComponentPos];

    window.Vue.set(state.canvases[state.currentCanvas].columns[state.currentColumn].components, [currentComponentPos + 1], thisComponent);
    window.Vue.set(state.canvases[state.currentCanvas].columns[state.currentColumn].components, [currentComponentPos], componentAbove);

    // Reselect the moved element:
    state.currentComponent = currentComponentPos + 1;
};

// Used to set CSS properties on components.
export const setComponentProperty = (state, component) =>
    window.Vue.set(getSelectedElement(state), component.property, component.value);

// Some Components like Margin and Padding have a subproperty we may need to set.
export const setComponentSubProperty = (state, component) =>
    window.Vue.set(getSelectedElement(state)[component.property], component.subproperty, component.value);

// Sets the status of the "Add Component" Modal window.
export const toggleAddComponentModal = (state, toggle) =>
    state.showAddComponentModal = toggle;

// Adds another column to the specified canvas.
export const addColumnToCanvas = (state, columnWidth) => {
    let newColumn = duplicateObject(defaultColumn);

    newColumn.columnWidth = columnWidth;

    state.canvases[state.currentCanvas].columns.push(newColumn);
};

// Removes a column from the specified canvas. We deselect it first to prevent errors.
export const removeColumnFromCanvas = state => {
    state.canvases[state.currentCanvas].columns.splice(state.currentColumn, 1);
    state.currentColumn = undefined;
};

// Sets the currently selected component to whatever the user clicked on.
export const selectCanvas = (state, canvasIndex) => {
    deselectCurrentElement(state);

    state.currentCanvas    = canvasIndex;
    state.currentColumn    = undefined;
    state.currentComponent = undefined;

    getSelectedElement(state).selected = true;
};

export const selectColumn = (state, i) => {
    deselectCurrentElement(state);

    state.currentCanvas    = i.canvasIndex;
    state.currentColumn    = i.columnIndex;
    state.currentComponent = undefined;

    getSelectedElement(state).selected = true;
};

// Sets the currently selected component to whatever the user clicked on.
export const selectComponent = (state, i) => {
    deselectCurrentElement(state);

    state.currentCanvas    = i.canvasIndex;
    state.currentColumn    = i.columnIndex;
    state.currentComponent = i.componentIndex;

    getSelectedElement(state).selected = true;
};

// Adds a component to the specified column.
export const addComponentToColumn = (state, componentType) => {
    const components = {
        "Heading": duplicateObject(defaultHeading),
        "Paragraph": duplicateObject(defaultParagraph),
        "BlockQuote": duplicateObject(defaultBlockQuote),
        "Picture": duplicateObject(defaultPicture),
        "InstagramEmbed": duplicateObject(defaultInstagram),
        "FacebookEmbed": duplicateObject(defaultFacebook),
        "YouTubeEmbed": duplicateObject(defaultYouTube),
        "RecipeSummary": duplicateObject(defaultRecipeSummary),
        "RecipeIngredients": duplicateObject(defaultRecipeIngredients),
    };

    state.canvases[state.currentCanvas].columns[state.currentColumn].components
            .push(components[componentType]);
};

// Sets the title of the article.
export const updateArticleTitle = (state, title) =>
    window.Vue.set(state, "articleTitle", title);

// Selects an Image from the Image Gallery and sets it for the current image component.
export const selectImage = (state, image) =>
    window.Vue.set(getSelectedElement(state), "src", image.url);

// Loads an existing article (updates the canvases).
export const loadArticle = (state, article) => {
    window.Vue.set(state, "articleTitle", article.title);
    window.Vue.set(state, "canvases", JSON.parse(article.article_json));
};