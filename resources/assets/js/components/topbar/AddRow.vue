<template>
    <div class="topbar-button">
        <topbar-button
            @click.native="addRow"
            variant="primary"
            icon="align-justify"
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
