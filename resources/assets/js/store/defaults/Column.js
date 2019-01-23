import defaultHeading from "./Heading";
import defaultParagraph from "./Paragraph";
import defaultPicture from "./Picture";
import defaultHorizontalLine from "./HorizontalLine";
import defaultBlockQuote from "./BlockQuote";
import defaultInstagramEmbed from "./InstagramEmbed";
import defaultYouTubeEmbed from "./YouTubeEmbed";
import defaultRecipeIngredients from "./RecipeIngredients";

// The default attributes for each breakpoint.
let column = {
    componentAlignment: 'start',
    columnWidth: 12,
    columnOffset: 0,

    // Property Defaults:
    backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
    margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    padding: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
    },
    border: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        style: 'solid',
        color: { r: 0, g: 0, b: 0, a: 1 },
    },
    boxShadow: {
        offsetX: 0,
        offsetY: 0,
        blurRadius: 0,
        color: { r: 0, g: 0, b: 0, a: 1 },
    },
};

export default {
    type: "Column",
    selected: false,
    visible: true,
    identifier: undefined,

    components: [defaultHeading, defaultParagraph, defaultPicture, defaultHorizontalLine],

    sm: column,
    md: column,
    lg: column,
    xl: column,
};