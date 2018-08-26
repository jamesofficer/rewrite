import defaultHeading from "./Heading";
import defaultParagraph from "./Paragraph";

export default {
    type: "Column",
    selected: false,

    components: [defaultHeading],

    // Properties:
    backgroundColor: "#ffffff",
    padding: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
    }
};
