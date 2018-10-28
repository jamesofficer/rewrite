export default {
    mounted() {
        const self = this;

        window.addEventListener('keyup', function(ev) {
            // Move an Element Up.
            if (ev.key === "ArrowUp") {
                self.$store.commit('moveElement', 'up');
            }

            // Move an Element Down.
            if (ev.key === "ArrowDown") {
                self.$store.commit('moveElement', 'down');
            }

            // Move a Column Left
            if (ev.key === "ArrowLeft" && self.$store.getters.aColumnIsSelected) {
                self.$store.commit('moveElement', 'up');
            }

            // Move a Column Right
            if (ev.key === "ArrowRight" && self.$store.getters.aColumnIsSelected) {
                self.$store.commit('moveElement', 'down');
            }

            /**
             * The PLUS (+) key (numpad plus) opens the Add Component modal window.
             * 
             */
            if (ev.key === "+" && self.$store.getters.aColumnIsSelected) {
                self.$root.$emit('bv::show::modal', 'addComponentModal');
                return;
            }

            /**
             * The DELETE key can delete Components, Columns or Canvases.
             * 
             */
            if (ev.key === "Delete") {
                if (self.$store.getters.aComponentIsSelected) {
                    self.$store.commit('deleteComponent');                    
                    return;
                }

                if (self.$store.getters.aColumnIsSelected) {
                    self.$store.commit('deleteColumn');
                    return;
                }

                if (self.$store.getters.aCanvasIsSelected) {
                    self.$store.commit('deleteCanvas');                    
                    return;
                }
            }
        });
    }
}