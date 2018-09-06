import defaultHeading from "./Heading";
import defaultParagraph from "./Paragraph";
import defaultPicture from "./Picture";

export default {
    type: "Column",
    selected: false,

    components: [defaultHeading, defaultParagraph],

    // Properties:
    backgroundColor: null,
    padding: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
    }
};
