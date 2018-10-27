<template>
    <top-bar-control @click.native="deleteElement" variant="outline-danger" icon="times" tooltip="Delete Element"></top-bar-control>
</template>

<script>
import TopBarControl from './TopBarControl';

export default {
    name: "DeleteElement",

    components: { TopBarControl },

    methods: {
        deleteElement() {
            this.$store.commit('deleteElement');
        },
    }
}
</script>

