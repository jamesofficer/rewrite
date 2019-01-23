<template>
    <div class="sidebar-control">
        <sidebar-control v-b-modal.imageGalleryModal variant="outline-primary" icon="image" tooltip="Select Image"></sidebar-control>
    </div>
</template>

<script>
import SidebarControl from '../sidebar/SidebarControl'

export default {
    name: "ImageSelector",

    components: {
        SidebarControl,
    }
}
</script>

