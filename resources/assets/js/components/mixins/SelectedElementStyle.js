export default {
    methods: {
        elementStyleIsSelected() {
            return this.$store.getters.selectedElementStyle === this.elementStyleName;
        },

        setSelectedElementStyle() {
            this.$store.commit('setSelectedElementStyle', this.elementStyleName);
        }
    }
}