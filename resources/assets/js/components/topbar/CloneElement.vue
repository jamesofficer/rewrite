<template>
    <top-bar-control @click.native="cloneElement" variant="outline-info" icon="clone" tooltip="Clone"></top-bar-control>
</template>

<script>
import TopBarControl from './TopBarControl';

export default {
    name: "CloneElement",

    components: { TopBarControl },

    methods: {
        cloneElement() {
            this.$store.commit('cloneElement');
        }
    }
}
</script>
