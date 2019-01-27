<template>
    <div>
        <label class="style-panel-label">Colour</label>
        <color-picker-button :propertyName="'backgroundColor'"></color-picker-button>
    </div>
</template>

<script>
import SidebarControl    from '../sidebar/SidebarControl';
import ColorPickerButton from './ColorPickerButton';

export default {
    name: "BackgroundColor",

    components: { SidebarControl, ColorPickerButton },
}
</script>