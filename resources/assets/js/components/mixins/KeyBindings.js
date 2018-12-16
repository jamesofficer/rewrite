export default {
    mounted() {
        const self = this;

        window.addEventListener('keydown', function(ev) {
            if (self.$store.getters.enableKeyBindings === true) {
                // Move an Element Up.
                if (ev.key === "ArrowUp" && self.$store.getters.canMoveElementUp) {
                    ev.preventDefault();
                    self.$store.commit('moveElement', 'up');
                    return;
                }

                // Move an Element Down.
                if (ev.key === "ArrowDown" && self.$store.getters.canMoveElementDown) {
                    ev.preventDefault();
                    self.$store.commit('moveElement', 'down');
                    return;
                }

                // Move a Column Left
                if (ev.key === "ArrowLeft" && self.$store.getters.getSelectedElementType === 'Column' && self.$store.getters.canMoveElementUp) {
                    self.$store.commit('moveElement', 'up');
                    return;
                }

                // Move a Column Right
                if (ev.key === "ArrowRight" && self.$store.getters.getSelectedElementType === 'Column' && self.$store.getters.canMoveElementDown) {
                    self.$store.commit('moveElement', 'down');
                    return;
                }

                /**
                 * The PLUS (+) key (numpad plus) opens the Add Component modal window.
                 * 
                 */
                if ((ev.key === "+" || ev.key === "=") && self.$store.getters.getSelectedElementType === 'Column') {
                    self.$root.$emit('bv::show::modal', 'addComponentModal');
                    return;
                }

                /**
                 * The DELETE key can delete Components, Columns, Rows or Canvases.
                 * 
                 */
                if (ev.metaKey && (ev.key === "Delete" || ev.key === "Backspace")) {
                    self.$store.commit('deleteElement');
                    return;
                }
            }
        });
    }
}