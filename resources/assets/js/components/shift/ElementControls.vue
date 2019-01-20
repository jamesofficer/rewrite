<template>
    <floating-panel style="bottom: 5px; left: 205px">
            <template slot="title">Component Styles</template>

            <template slot="content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officiis optio nostrum enim iure minus? Ullam laboriosam officiis adipisci expedita numquam fugit quam, labore minima, molestiae quisquam debitis asperiores dolores?</p>

            </template>
    </floating-panel>
</template>

<script>
import FloatingPanel from './FloatingPanel';

export default {
    name: "ElementControls",

    components: { FloatingPanel },
}
</script>

<style>
.element-controls-panel {
    position: fixed;
    bottom: 5px;
    left: 200px;
    background: white;
    border-radius: 5px;
    width: 280px;
    box-shadow: 0px 0px 10px rgba(150, 150, 150, 0.75);
    overflow: hidden;
}
</style>

