<template>
    <sidebar-control @click.native="clearImage" variant="outline-danger" icon="ban" tooltip="Clear Image"></sidebar-control>
</template>

<script>
import SidebarControl from './SidebarControl';

export default {
    name: "ClearImage",

    components: { SidebarControl },

    methods: {
        clearImage() {
            this.$store.commit('setComponentProperty', { property: 'backgroundImage', value: undefined });
            this.$store.commit('setComponentProperty', { property: 'backgroundSize', value: 'Auto' });
        },
    }
}
</script>

