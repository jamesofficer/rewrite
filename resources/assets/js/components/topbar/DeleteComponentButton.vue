<template>
    <top-bar-control @click.native="deleteComponent" variant="outline-danger" icon="times" label="Delete Component"></top-bar-control>
</template>

<script>
import TopBarControl from './TopBarControl';

export default {
    name: "DeleteComponentButton",

    components: { TopBarControl },

    methods: {
        deleteComponent() {
            this.$store.commit('deleteComponent');
        }
    }
}
</script>

