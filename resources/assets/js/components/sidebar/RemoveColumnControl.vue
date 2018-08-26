<template>
    <sidebar-control>
        <b-btn @click="removeColumn" size="sm" variant="danger">
            <icon name="plus"></icon> Remove Column
        </b-btn>
    </sidebar-control>
</template>

<script>
import SidebarControl from '../sidebar/SidebarControl'

export default {
    name: "RemoveColumnControl",

    components: { SidebarControl },

    methods: {
        removeColumn() {
            this.$store.commit('removeColumnFromCanvas');
        },
    }
}
</script>
