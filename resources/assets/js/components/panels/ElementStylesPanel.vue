<template>
    <floating-panel style="bottom: 5px; left: 75px;" :height="'307px'" :width="'auto'">
        <template slot="title">{{ selectedElementStyleName }} Controls</template>

        <template slot="content">
            <div style="padding: 10px">
                <div v-if="selectedElementStyleName === ''">
                    <p>No style selected.</p>
                </div>

                <portal-target v-else name="element-styles-panel"></portal-target>
            </div>
        </template>
    </floating-panel>
</template>

<script>
import FloatingPanel from './FloatingPanel';
import ColorPickerButton from '../core/ColorPickerButton';

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
    position: fixed;
    bottom: 5px;
    left: 200px;
    width: 280px;
    background: white;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(150, 150, 150, 0.75);
    overflow: hidden;
}
</style>

