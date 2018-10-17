<template>
    <top-bar-control @click.native="removeColumn" variant="outline-danger" icon="columns" tooltip="Delete Column"></top-bar-control>
</template>

<script>
import TopBarControl from './TopBarControl';

export default {
    name: "RemoveColumn",

    components: { TopBarControl },

    methods: {
        removeColumn() {
            this.$store.commit('removeColumnFromCanvas');
        },
    }
}
</script>
