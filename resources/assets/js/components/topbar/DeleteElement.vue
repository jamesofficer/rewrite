<template>
    <div class="topbar-button">
        <topbar-button
            @click.native="deleteElement"
            variant="danger"
            icon="trash-alt"
            tooltip="Delete Element"
        ></topbar-button>
    </div>
</template>

<script>
import TopbarButton from './TopbarButton';

export default {
    name: "DeleteElement",

    components: { TopbarButton },

    methods: {
        deleteElement() {
            this.$store.commit('deleteElement');
        },
    }
}
</script>

