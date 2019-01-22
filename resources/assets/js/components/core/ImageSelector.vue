<template>
    <div class="sidebar-control">
        <top-bar-control v-b-modal.imageGalleryModal variant="outline-primary" icon="image" tooltip="Select Image"></top-bar-control>
    </div>
</template>

<script>
import TopBarControl from '../topbar/TopBarControl'

export default {
    name: "ImageSelector",

    components: {
        TopBarControl,
    }
}
</script>

