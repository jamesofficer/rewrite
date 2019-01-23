<template>
    <div class="sidebar-control">
        <sidebar-control
            @click.native="deleteElement"
            variant="danger"
            icon="times"
            tooltip="Delete Element"
        ></sidebar-control>
    </div>
</template>

<script>
import SidebarControl from './SidebarControl';

export default {
    name: "DeleteElement",

    components: { SidebarControl },

    methods: {
        deleteElement() {
            this.$store.commit('deleteElement');
        },
    }
}
</script>

