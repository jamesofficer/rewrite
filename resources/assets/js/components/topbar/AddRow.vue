<template>
    <div class="topbar-button">
        <topbar-button
            @click.native="addRow"
            variant="outline-success"
            icon="columns"
            tooltip="Add Row to Canvas"
        ></topbar-button>
    </div>
</template>

<script>
import TopbarButton from './TopbarButton';

export default {
    name: "AddColumn",

    components: { TopbarButton },

    methods: {
        addRow() {
            this.$store.commit('addRow');
        },
    }
}
</script>
