<template>
    <b-form-select
        size="sm"
        v-model="componentAlignment"
        :options="alignmentOptions"
        v-b-tooltip.hover 
        title="Component Alignment"
        class="top-bar-control top-bar-number-input"
    ></b-form-select>
</template>

<script>
import TopBarControl from './TopBarControl'

export default {
    name: "AlignComponents",

    components: {
        TopBarControl,
    },

    computed: {
        componentAlignment: {
            get() {
                return this.$store.getters.getCurrentElement.componentAlignment;
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

