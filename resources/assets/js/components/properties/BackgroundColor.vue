<template>
    <div>
        <label class="style-panel-label">Colour</label>
        <color-picker-button :propertyName="'backgroundColor'"></color-picker-button>
    </div>
</template>

<script>
import TopbarButton    from '../topbar/TopbarButton';
import ColorPickerButton from './ColorPickerButton';

export default {
    name: "BackgroundColor",

    components: { TopbarButton, ColorPickerButton },
}
</script>