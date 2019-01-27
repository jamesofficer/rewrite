<template>
    <div>
        <label class="style-panel-label">Text Colour</label>
        <color-picker-button :propertyName="'textColor'"></color-picker-button>
    </div>
</template>

<script>
import SidebarControl    from '../sidebar/SidebarControl'
import ColorPickerButton from './ColorPickerButton'

export default {
    name: "TextColor",

    components: { SidebarControl, ColorPickerButton },
}
</script>