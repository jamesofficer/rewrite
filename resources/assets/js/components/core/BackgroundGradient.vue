<template>
    <sidebar-control v-b-modal.backgroundGradientModal icon="brush" tooltip="Background Gradient"></sidebar-control>
</template>

<script>
import SidebarControl from '../sidebar/SidebarControl';

export default {
    name: "BackgroundGradient",

    components: { SidebarControl },
}
</script>