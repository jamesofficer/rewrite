<template>
    <top-bar-control @click.native="copyComponentStyle" variant="outline-primary" icon="clone" tooltip="Clone Component"></top-bar-control>
</template>

<script>
import TopBarControl from './TopBarControl';

export default {
    name: "CopyStyle",

    components: { TopBarControl },

    methods: {
        copyComponentStyle() {
            console.log('copied');
        }
    }
}
</script>
