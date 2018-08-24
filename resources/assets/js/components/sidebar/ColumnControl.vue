<template>
    <sidebar-control label="Number of Columns">
        <b-btn @click="addColumn">Add Column</b-btn>
    </sidebar-control>
</template>

<script>
import SidebarControl from '../sidebar/SidebarControl'

export default {
    name: "Columns",

    components: { SidebarControl },

    methods: {
        addColumn() {
            this.$store.commit('addColumnToCanvas');
        }
    }
}
</script>
