<template>
    <div class="topbar-button">
        <topbar-button @click.native="cloneElement" variant="outline-info" icon="clone" tooltip="Clone"></topbar-button>
    </div>
</template>

<script>
import TopbarButton from './TopbarButton';

export default {
    name: "CloneElement",

    components: { TopbarButton },

    methods: {
        cloneElement() {
            this.$store.commit('cloneElement');
        }
    }
}
</script>
