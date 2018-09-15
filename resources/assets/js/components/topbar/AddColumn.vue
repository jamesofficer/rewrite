<template>
    <top-bar-control @click.native="addColumn" variant="outline-success" icon="columns" label="Add Column"></top-bar-control>
</template>

<script>
import TopBarControl from './TopBarControl';

export default {
    name: "AddColumn",

    components: { TopBarControl },

    methods: {
        addColumn() {
            this.$store.commit('addColumnToCanvas');
        },
    }
}
</script>
