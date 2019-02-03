<template>
    <div class="topbar-button">
        <label class="style-panel-label">Clear</label>
        <b-button variant="danger" v-b-tooltip.hover.right tooltip="Clear Image">
            <icon name="ban"></icon>
        </b-button>
    </div>
</template>

<script>
import TopbarButton from './TopbarButton';

export default {
    name: "ClearImage",

    components: { TopbarButton },

    methods: {
        clearImage() {
            this.$store.commit('setComponentProperty', { property: 'backgroundImage', value: undefined });
            this.$store.commit('setComponentProperty', { property: 'backgroundSize', value: 'Auto' });
        },
    }
}
</script>

