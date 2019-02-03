<template>
    <div>
        <label class="style-panel-label">Size</label>

        <b-form-select v-model="backgroundSize" :options="backgroundSizes"></b-form-select>
    </div>
</template>

<script>
export default {
    name: "BackgroundSize",

    computed: {
        backgroundSize: {
            get () {
                return this.$store.getters.getSelectedElement.backgroundSize;
            },
            set (backgroundSize) {
                this.$store.commit('setComponentProperty', { property: 'backgroundSize', value: backgroundSize });
            }
        },
    },

    data() {
        return {
            backgroundSizes: ['Auto', 'Cover', 'Contain'],
        }
    }
}
</script>

