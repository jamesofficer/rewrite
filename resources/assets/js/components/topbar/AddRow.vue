<template>
    <div class="sidebar-control">
        <top-bar-control
            @click.native="addRow"
            variant="outline-success"
            icon="columns"
            tooltip="Add Row to Canvas"
        ></top-bar-control>
    </div>
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
