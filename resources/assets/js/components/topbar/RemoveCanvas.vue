<template>
    <top-bar-control @click.native="removeCanvas" variant="outline-danger" icon="palette" tooltip="Delete Canvas"></top-bar-control>
</template>

<script>
import TopBarControl from './TopBarControl';

export default {
    name: "RemoveCanvas",

    components: { TopBarControl },

    methods: {
        removeCanvas() {
            this.$store.commit('removeCanvas');
        },
    }
}
</script>

