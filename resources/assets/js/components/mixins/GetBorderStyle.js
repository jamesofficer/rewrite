/**
 * This mixin was created to reduce the length of component files that utilise borders.
 *
 */
export default {
    computed: {
        borderTop() {
            return element.border.top + 'px ' + element.border.style + ' black';
        }
    }
};