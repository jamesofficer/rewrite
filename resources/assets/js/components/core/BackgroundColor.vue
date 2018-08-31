<template>
    <sidebar-control label="Background Colour">
        <color-picker mutation="setBackgroundColor"></color-picker>
    </sidebar-control>
</template>

<script>
import SidebarControl  from '../sidebar/SidebarControl'
import ColorPicker     from '../mixins/ColorPicker'

export default {
    name: "BackgroundColor",

    components: { SidebarControl, ColorPicker },
}
</script>
