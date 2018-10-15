<template>
    <top-bar-control @click.native="cloneComponent" variant="outline-primary" icon="clone" tooltip="Clone Component"></top-bar-control>
</template>

<script>
import TopBarControl from './TopBarControl';

export default {
    name: "CloneComponent",

    components: { TopBarControl },

    methods: {
        cloneComponent() {
            this.$store.commit('cloneComponent');
        }
    }
}
</script>
