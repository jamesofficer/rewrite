<template>
    <div class="sidebar-control">
        <top-bar-control @click.native="deleteElement" variant="danger" icon="times" tooltip="Delete"></top-bar-control>
    </div>
</template>

<script>
import TopBarControl from './TopBarControl';

export default {
    name: "DeleteElement",

    components: { TopBarControl },

    methods: {
        deleteElement() {
            this.$store.commit('deleteElement');
        },
    }
}
</script>

