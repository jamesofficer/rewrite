<template>
    <top-bar-control @click.native="moveComponentDown" variant="outline-primary" icon="arrow-down" tooltip="Move Down"></top-bar-control>
</template>

<script>
import TopBarControl from './TopBarControl';

export default {
    name: "MoveComponentDown",

    components: { TopBarControl },

    methods: {
        moveComponentDown() {
            this.$store.commit('moveComponentDown');
        }
    }
}
</script>

