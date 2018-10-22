<template>
    <top-bar-control @click.native="deleteCanvas" variant="outline-danger" icon="palette" tooltip="Delete Canvas"></top-bar-control>
</template>

<script>
import TopBarControl from './TopBarControl';

export default {
    name: "DeleteCanvas",

    components: { TopBarControl },

    methods: {
        deleteCanvas() {
            this.$store.commit('deleteCanvas');
        },
    }
}
</script>

