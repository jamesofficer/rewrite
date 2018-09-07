import defaultHeading from "./Heading";
import defaultParagraph from "./Paragraph";
import defaultPicture from "./Picture";

export default {
    type: "Column",
    selected: false,

    components: [defaultHeading, defaultParagraph, defaultPicture],

    // Properties:
    backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
    padding: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
    }
};
