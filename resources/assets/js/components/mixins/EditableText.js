/**
 * The Heading and BlockQuote components allow the user to input text directly into
 * the Canvas. All those elements share that logic, which is located in this file.
 *
 */
export default {
    data() {
        return {
            editingText: false,
        }
    },

    methods: {
        selectInput() {
            this.editingText = true;

            this.$nextTick(function () {
                let input = document.getElementById('text-input');
                let strLength = input.value.length;

                input.focus();
                input.setSelectionRange(strLength, strLength);
            });
        },
    }
};