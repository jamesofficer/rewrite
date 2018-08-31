<template>
    <sidebar-control label="Text Colour">
        <color-picker mutation="setTextColor"></color-picker>
    </sidebar-control>
</template>

<script>
import SidebarControl  from '../sidebar/SidebarControl'
import ColorPicker     from '../mixins/ColorPicker'

export default {
    name: "TextColor",

    components: { SidebarControl, ColorPicker },
}
</script>
