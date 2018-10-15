import defaultHeading from "./Heading";
import defaultParagraph from "./Paragraph";
import defaultPicture from "./Picture";
import defaultHorizontalLine from "./HorizontalLine";
import defaultBlockQuote from "./BlockQuote";
import defaultInstagramEmbed from "./InstagramEmbed";
import defaultFacebookEmbed from "./FacebookEmbed";
import defaultYouTubeEmbed from "./YouTubeEmbed";
import defaultRecipeSummary from "./RecipeSummary";
import defaultRecipeIngredients from "./RecipeIngredients";

export default {
    type: "Column",
    selected: false,

    components: [defaultHeading, defaultParagraph],

    // Properties:
    columnWidth: 12,
    backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
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
    }
};
