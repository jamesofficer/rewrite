<template>
    <top-bar-control v-b-modal.imageGalleryModal variant="success" icon="image" label="Select Image">
    </top-bar-control>
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

