<template>
    <b-form-select size="sm" v-model="fontFamily" :options="fonts" class="top-bar-control" v-b-tooltip.hover title="Font"></b-form-select>
</template>

<script>
export default {
    name: "FontFamily",

    computed: {
        fontFamily: {
            get () {
                return this.$store.getters.getCurrentElement.fontFamily;
            },
            set (font) {
                this.$store.commit('setComponentProperty', { property: 'fontFamily', value: font });
            }
        },
    },

    data() {
        return {
            fonts: [
                'Times New Roman', 'Helvetica', 'Arial', 'Verdana', 'Courier', 'Georgia', 'Comic Sans MS',
            ],
        }
    }
}
</script>
