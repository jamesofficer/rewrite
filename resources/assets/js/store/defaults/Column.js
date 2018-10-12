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

<<<<<<< HEAD
    components: [defaultHeading, defaultParagraph, defaultHorizontalLine],
=======
    components: [defaultHeading, defaultParagraph, defaultRecipeIngredients, defaultYouTubeEmbed],
>>>>>>> 5be6f4d37f1215e91a95e137365c4b6868f4b341

    // Properties:
    columnWidth: 12,
    backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
    padding: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
    }
};
