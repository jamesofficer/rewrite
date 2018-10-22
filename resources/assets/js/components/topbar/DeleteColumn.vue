<template>
    <top-bar-control @click.native="deleteColumn" variant="outline-danger" icon="columns" tooltip="Delete Column"></top-bar-control>
</template>

<script>
import TopBarControl from './TopBarControl';

export default {
    name: "DeleteColumn",

    components: { TopBarControl },

    methods: {
        deleteColumn() {
            this.$store.commit('deleteColumn');
        },
    }
}
</script>
