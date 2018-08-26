import defaultColumn from "./Column";
import defaultHeading from "./Heading";
import defaultParagraph from "./Paragraph";

export default {
    type: "Canvas",
    selected: false,

    columns: [defaultColumn, defaultColumn],

    // Properties:
    backgroundColor: "#ffffff",
    padding: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
    }
};
