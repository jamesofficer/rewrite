<template>
    <div>
        <div class="minimap-heading">
            <h6>Styles</h6>
        </div>

        <div v-if="selectedElementStyleName === ''">
            <p style="color: white; padding: 10px;">No style selected.</p>
        </div>

        <div v-else style="padding: 10px">
            <portal-target name="element-styles-panel"></portal-target>
        </div>
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

<style lang="scss" scoped>
.minimap-heading {
    padding: 10px 5px;
    border-top: 1px solid #888;
    border-bottom: 1px solid #888;
    background: #222;

    h6 {
        color: #ccc;
        margin: 0;
    }
}

.element-controls-panel {
    background: white;
    overflow: hidden;
}
</style>
