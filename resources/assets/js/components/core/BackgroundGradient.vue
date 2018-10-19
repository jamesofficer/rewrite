<template>
    <top-bar-control v-b-modal.backgroundGradientModal icon="brush" tooltip="Background Gradient"></top-bar-control>
</template>

<script>
import TopBarControl from '../topbar/TopBarControl';

export default {
    name: "BackgroundGradient",

    components: { TopBarControl },
}
</script>