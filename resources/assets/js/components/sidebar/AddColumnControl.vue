<template>
    <sidebar-control>
        <b-btn @click="addColumn" size="sm" variant="success">
            <icon name="plus"></icon> Add Column
        </b-btn>
    </sidebar-control>
</template>

<script>
import SidebarControl from '../sidebar/SidebarControl'

export default {
    name: "AddColumnControl",

    components: { SidebarControl },

    methods: {
        addColumn() {
            this.$store.commit('addColumnToCanvas');
        },
    }
}
</script>
