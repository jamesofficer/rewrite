<template>
    <div class="sidebar-control">
        <sidebar-control @click.native="cloneElement" variant="outline-info" icon="clone" tooltip="Clone"></sidebar-control>
    </div>
</template>

<script>
import SidebarControl from './SidebarControl';

export default {
    name: "CloneElement",

    components: { SidebarControl },

    methods: {
        cloneElement() {
            this.$store.commit('cloneElement');
        }
    }
}
</script>
