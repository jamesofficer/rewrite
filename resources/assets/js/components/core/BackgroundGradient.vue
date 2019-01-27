<template>
    <div class="sidebar-control">
        <label class="style-panel-label">Gradient</label>
        <b-button v-b-modal.backgroundGradientModal variant="outline-primary" tooltip="Select Image">
            <icon name="brush"></icon>
        </b-button>
    </div>
</template>

<script>
import SidebarControl from '../sidebar/SidebarControl';

export default {
    name: "BackgroundGradient",

    components: { SidebarControl },
}
</script>