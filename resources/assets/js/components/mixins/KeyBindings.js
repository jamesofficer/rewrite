/**
 * KEY BINDING REFERENCE:
 *
 * Up Arrow = moves selection up.
 * Down Arrow = moves selection down.
 * Meta + Up Arrow = moves the current element up - DONE
 * Meta + Down Arrow = moves the current element down - DONE
 * Meta + Left Arrow = moves the column left in its row - DONE
 * Meta + Right Arrow = moves the current column right in its row - DONE
 * Left Arrow = select input to the left in the currently open element panel.
 * Right Arrow = select input to the right in the currently open element panel.
 * Meta + Delete = deletes the current element - DONE
 * Meta + Z = Undo.
 * Meta + Y = Redo.
 * P = Open Element Positioning panel.
 * B = Open Element Borders panel.
 * O = Open Box Shadow panel.
 * S = Open Text Shadow panel.
 * P = Open Element Positioning panel.
 * C = Open Column Settings panel.
 * H = Hide the currently selected element.
 * Meta + Plus = Opens Add Component modal window.
 * > = Decreases the current device size.
 * > = Increases the current device size.
 * [ = Decreases the current column size.
 * ] = Increases the current column size.
 *
 */

export default {
    mounted() {
        const self = this;

        window.addEventListener('keydown', function(ev) {
            if (self.$store.getters.enableKeyBindings === true) {

                // Check for CTRL key combination keybindings.
                if (ev.ctrlKey) {
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

                    // The PLUS (+) key (numpad plus) opens the Add Component modal window.
                    if ((ev.key === "+" || ev.key === "=") && self.$store.getters.getSelectedElementType === 'Column') {
                        self.$root.$emit('bv::show::modal', 'addComponentModal');
                        return;
                    }

                    // The DELETE key can delete Components, Columns, Rows or Canvases.
                    if ((ev.key === "Delete" || ev.key === "Backspace")) {
                        self.$store.commit('deleteElement');
                        return;
                    }
                }
                //
                else {
                    // add other keybndings here...
                }

            }
        });
    }
}