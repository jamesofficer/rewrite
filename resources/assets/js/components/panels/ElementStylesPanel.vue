<template>
    <div style="padding: 10px">
        <div v-if="selectedElementStyleName === ''">
            <p>No style selected.</p>
        </div>

        <portal-target v-else name="element-styles-panel"></portal-target>
    </div>
</template>

<script>
import FloatingPanel from './FloatingPanel';
import ColorPickerButton from '../properties/ColorPickerButton';

export default {
    name: "ElementStylesPanel",

    components: { FloatingPanel, ColorPickerButton },

    computed: {
        selectedElementStyleName() {
            const elementStyleName = this.$store.getters.selectedElementStyle;

            if (elementStyleName === null) {
                return '';
            }

            return elementStyleName.charAt(0).toUpperCase() + elementStyleName.slice(1);
        },
    }
}
</script>

<style>
.element-controls-panel {
    background: white;
    overflow: hidden;
}
</style>

