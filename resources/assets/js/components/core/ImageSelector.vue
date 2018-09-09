<template>
    <sidebar-control>
        <b-btn v-b-modal.imageGalleryModal variant="success">
            <icon name="image"></icon> Select Image
        </b-btn>
    </sidebar-control>
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

