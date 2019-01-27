<template>
    <div class="sidebar-control">
        <label class="style-panel-label">Image</label>
        <b-button v-b-modal.imageGalleryModal variant="outline-primary" tooltip="Select Image">
            <icon name="image"></icon>
        </b-button>
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

