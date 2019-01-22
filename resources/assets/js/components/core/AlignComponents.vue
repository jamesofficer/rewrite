<template>
    <b-form-select
        size="sm"
        v-model="componentAlignment"
        :options="alignmentOptions"
        v-b-tooltip.hover 
        title="Component Alignment"
        class="top-bar-btn"
    ></b-form-select>
</template>

<script>
export default {
    name: "AlignComponents",

    computed: {
        componentAlignment: {
            get() {
                return this.$store.getters.getSelectedElement.componentAlignment;
            },
            set(alignment) {
                this.$store.commit('setComponentProperty', { property: 'componentAlignment', value: alignment });
            }
        },
    },
    
    data() {
        return {
            alignmentOptions: [
                {
                    text: 'Top',
                    value: 'start',
                },
                {
                    text: 'Center',
                    value: 'center',
                },
                {
                    text: 'Bottom',
                    value: 'end',
                }
            ]
        }
    }
}
</script>

