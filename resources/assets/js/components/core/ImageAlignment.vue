<template>
    <sidebar-control label="Image Alignment">
        <b-button-group>
            <b-button variant="success" @click="alignImage('left')">Left</b-button>
            <b-button variant="success" @click="alignImage('center')">Center</b-button>
            <b-button variant="success" @click="alignImage('right')">Right</b-button>
        </b-button-group>
    </sidebar-control>
</template>

<script>
import SidebarControl from '../sidebar/SidebarControl'

export default {
    name: "ImageAlign",

    components: { SidebarControl },

    methods: {
        alignImage(position) {
            // Image Align actually uses the text-align css property to align the image.
            this.$store.commit('setTextAlignment', position);
        },
    }
}
</script>
