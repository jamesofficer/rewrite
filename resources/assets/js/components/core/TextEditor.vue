<template>
    <div>
        <top-bar >
            <top-bar-control icon="bold" tooltip="asdlkaskldj Bold Selection" variant="outline-success"></top-bar-control>

            <button v-if="! showEditor" @click="showEditor = true">edit text</button>
            <button v-if="showEditor" @click="finishEditing">finish editing</button>
            <button v-if="showEditor" @click="boldText">bold</button>
        </top-bar>

        <div contenteditable="true" v-if="showEditor" ref="editor">
            {{ content }}
        </div>

        <div v-else contenteditable="false" v-html="content">

        </div>
    </div>
</template>

<script>
import TopBar from '../topbar/TopBar'
import TopBarControl from '../topbar/TopBarControl'

export default {
    name: "TextEditor",

    components: {
        TopBar, TopBarControl,
    },

    data() {
        return {
            showEditor: false,
            content: 'Your text goes here...',
        }
    },

    methods: {
        finishEditing() {
            this.content = this.$refs.editor.innerText;
            this.showEditor = false;

            console.log(this.content);
        },

        boldText() {
            this.$refs.editor.focus();
            this.surroundWithSpan("bold");

            return false;
        },

        surroundWithSpan(tagName) {
    		if (tagName === "bold") {
                this.surroundSelection("<span style='font-weight: bold'>", "</style>");
            }
        },

        surroundSelection(textBefore, textAfter) {
            if (window.getSelection) {
                let sel = window.getSelection();

                if (sel.rangeCount > 0) {
                    let range = sel.getRangeAt(0);
                    let startNode = range.startContainer, startOffset = range.startOffset;
                    let boundaryRange = range.cloneRange();
                    let startTextNode = document.createTextNode(textBefore);
                    let endTextNode = document.createTextNode(textAfter);

                    boundaryRange.collapse(false);
                    boundaryRange.insertNode(endTextNode);
                    boundaryRange.setStart(startNode, startOffset);
                    boundaryRange.collapse(true);
                    boundaryRange.insertNode(startTextNode);

                    // Reselect the original text
                    range.setStartAfter(startTextNode);
                    range.setEndBefore(endTextNode);
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
            }
        }

    }
}
</script>
