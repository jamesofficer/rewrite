<template>
    <top-bar-control variant="outline-info" icon="clone" tooltip="Clone Canvas" @click.native="cloneCanvas"></top-bar-control>    
</template>

<script>
import TopBarControl from './TopBarControl';

export default {
    name: "CloneCanvas",

    components: { TopBarControl },

    methods: {
        cloneCanvas() {
            this.$store.commit('cloneCanvas');
        }
    }
}
</script>

