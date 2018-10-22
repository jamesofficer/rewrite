export default {
    mounted() {
        const self = this;

        window.addEventListener('keyup', function(ev) {
            /**
             * Pressing the UP ARROW key moves a Component, Column, or Canvas up.
             * 
             */
            if (ev.key === "ArrowUp") {
                if (self.$store.getters.aComponentIsSelected) {
                    self.$store.commit('moveComponentUp');                    
                    return;
                }

                if (self.$store.getters.aColumnIsSelected) {
                    self.$store.commit('moveColumnRight');
                    return;
                }

                if (self.$store.getters.aCanvasIsSelected) {
                    self.$store.commit('moveCanvasUp');                    
                    return;
                }
            }

            /**
             * Pressing the DOWN ARROW key moves a Component, Column, or Canvas down.
             * 
             */
            if (ev.key === "ArrowDown") {
                if (self.$store.getters.aComponentIsSelected) {
                    self.$store.commit('moveComponentDown');                    
                    return;
                }

                if (self.$store.getters.aColumnIsSelected) {
                    self.$store.commit('moveColumnLeft');
                    return;
                }

                if (self.$store.getters.aCanvasIsSelected) {
                    self.$store.commit('moveCanvasDown');                    
                    return;
                }
            }

            /**
             * Pressing the DOWN ARROW key moves a Component, Column, or Canvas down.
             * 
             */
            if (ev.key === "ArrowLeft" && self.$store.getters.aColumnIsSelected) {
                self.$store.commit('moveColumnLeft');
                return;
            }

            if (ev.key === "ArrowRight" && self.$store.getters.aColumnIsSelected) {
                    self.$store.commit('moveColumnRight');
                    return;
            }

            /**
             * The PLUS (+) key (numpad plus) opens the Add Component modal window.
             * 
             */
            if (ev.key === "+" && self.$store.getters.aColumnIsSelected) {
                self.$store.commit('toggleAddComponentModal', true);
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