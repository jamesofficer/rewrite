<template>
    <top-bar-control @click.native="moveComponentUp" variant="outline-primary" icon="arrow-up" tooltip="Move Up"></top-bar-control>
</template>

<script>
import TopBarControl from './TopBarControl';

export default {
    name: "MoveComponentUp",

    components: { TopBarControl },

    methods: {
        moveComponentUp() {
            this.$store.commit('moveComponentUp');
        }
    }
}
</script>

