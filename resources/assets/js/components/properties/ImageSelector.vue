<template>
    <div class="topbar-button">
        <label class="style-panel-label">Image</label>
        <b-button v-b-modal.imageGalleryModal variant="outline-primary" tooltip="Select Image">
            <icon name="image"></icon>
        </b-button>
    </div>
</template>

<script>
import TopbarButton from '../topbar/TopbarButton'

export default {
    name: "ImageSelector",

    components: {
        TopbarButton,
    }
}
</script>

