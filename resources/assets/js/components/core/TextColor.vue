<template>
    <div>
        <label class="style-panel-label">Text Colour</label>
        <color-picker-button :propertyName="'textColor'"></color-picker-button>
    </div>
</template>

<script>
import TopbarButton    from '../topbar/TopbarButton'
import ColorPickerButton from './ColorPickerButton'

export default {
    name: "TextColor",

    components: { TopbarButton, ColorPickerButton },
}
</script>