<template>
    <top-bar-control @click.native="addRow"
                     variant="outline-success"
                     icon="columns"
                     label="Add Row"
                     tooltip="Add Row to Canvas"
    ></top-bar-control>
</template>

<script>
import TopBarControl from './TopBarControl';

export default {
    name: "AddColumn",

    components: { TopBarControl },

    methods: {
        addRow() {
            this.$store.commit('addRow');
        },
    }
}
</script>
