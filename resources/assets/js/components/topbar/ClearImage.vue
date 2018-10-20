<template>
    <top-bar-control @click.native="clearImage" variant="outline-danger" icon="ban" tooltip="Clear Image"></top-bar-control>
</template>

<script>
import TopBarControl from './TopBarControl';

export default {
    name: "ClearImage",

    components: { TopBarControl },

    methods: {
        clearImage() {
            this.$store.commit('setComponentProperty', { property: 'backgroundImage', value: undefined });
            this.$store.commit('setComponentProperty', { property: 'backgroundSize', value: 'Auto' });
        },
    }
}
</script>

