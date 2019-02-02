/**
 * KEY BINDING REFERENCE:
 *
 * Up Arrow = moves selection up.
 * Down Arrow = moves selection down.
 * Ctrl + Up Arrow = moves the current element up - DONE
 * Ctrl + Down Arrow = moves the current element down - DONE
 * Ctrl + Left Arrow = moves the column left in its row - DONE
 * Ctrl + Right Arrow = moves the current column right in its row - DONE
 * Left Arrow = select input to the left in the currently open element panel.
 * Right Arrow = select input to the right in the currently open element panel.
 * Ctrl + Delete = deletes the current element - DONE
 * Ctrl + Plus = Opens Add Component modal window - DONE
 * Ctrl + H = Hide the currently selected element.
 * Meta/Ctrl + Z = Undo.
 * Meta/Ctrl + Y = Redo.
 * G = Toggle global component styles on or off - DONE
 * P = Open Element Positioning panel - DONE
 * B = Open Element Background panel - DONE
 * O = Open Element Borders panel - DONE
 * X = Open Box Shadow panel - DONE
 * S = Open Text Shadow panel - DONE
 * C = Open Column Settings panel - DONE
 * + = Decreases the current device size - DONE
 * - = Increases the current device size - DONE
 * [ = Decreases the current column size - DONE
 * ] = Increases the current column size - DONE
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
                    if (ev.key === "Delete" || ev.key === "Backspace") {
                        self.$store.commit('deleteElement');
                        return;
                    }
                }
                // Keybindings that don't rely on the CTRL key.
                else {
                    if (ev.key === "ArrowUp") {
                        ev.preventDefault();
                        self.$store.commit('moveSelection', 'up');
                        return;
                    }

                    if (ev.key === "ArrowDown") {
                        ev.preventDefault();
                        self.$store.commit('moveSelection', 'down');
                        return;
                    }

                    if (ev.key === "=") {
                        self.$store.commit('changeDeviceSize', 1)
                        return;
                    }

                    if (ev.key === "-") {
                        self.$store.commit('changeDeviceSize', -1)
                        return;
                    }

                    if (ev.key === "G" || ev.key === 'g') {
                        self.$store.commit('enableGlobalComponentStyles', (! self.$store.getters.globalComponentStyles));
                    }

                    if (ev.key === "p" || ev.key === "P") {
                        self.$store.commit('setSelectedElementStyle', 'positioning');
                        return;
                    }

                    if (ev.key === "t" || ev.key === "T") {
                        self.$store.commit('setSelectedElementStyle', 'text-formatting');
                        return;
                    }

                    if (ev.key === "b" || ev.key === "B") {
                        self.$store.commit('setSelectedElementStyle', 'background');
                        return;
                    }

                    if (ev.key === "o" || ev.key === "O") {
                        self.$store.commit('setSelectedElementStyle', 'borders');
                        return;
                    }

                    if (ev.key === "x" || ev.key === "X") {
                        self.$store.commit('setSelectedElementStyle', 'box-shadow');
                        return;
                    }

                    if (ev.key === "s" || ev.key === "S") {
                        self.$store.commit('setSelectedElementStyle', 'text-shadow');
                        return;
                    }

                    if (ev.key === "c" || ev.key === "C") {
                        self.$store.commit('setSelectedElementStyle', 'column');
                        return;
                    }

                    if (ev.key === "[" && self.$store.getters.getSelectedElementType === 'Column') {
                        self.$store.commit('changeColumnSize', -1)
                        return;
                    }

                    if (ev.key === "]" && self.$store.getters.getSelectedElementType === 'Column') {
                        self.$store.commit('changeColumnSize', 1)
                        return;
                    }
                }

            }
        });
    }
}