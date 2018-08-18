<template>
    <sidebar-control label="Text Alignment">
        <b-button-group>
            <b-button variant="success" @click="alignText('left')"><icon name="align-left"></icon></b-button>
            <b-button variant="success" @click="alignText('center')"><icon name="align-center"></icon></b-button>
            <b-button variant="success" @click="alignText('right')"><icon name="align-right"></icon></b-button>
            <b-button variant="success" @click="alignText('justified')"><icon name="align-justify"></icon></b-button>
        </b-button-group>
    </sidebar-control>
</template>

<script>
import SidebarControl from '../sidebar/SidebarControl'

export default {
    name: "TextAlignment",

    components: { SidebarControl },

    methods: {
        alignText(position) {
            this.$store.commit('setTextAlignment', position);
        },
    }
}
</script>
