import { duplicateObject } from "../helpers";
import defaultColumn from "./Column";
import defaultHeading from "./Heading";
import defaultParagraph from "./Paragraph";

export default {
    type: "Canvas",
    selected: false,

    columns: [duplicateObject(defaultColumn), duplicateObject(defaultColumn)],

    // Properties:
    backgroundColor: "#ffffff",
    padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
};
