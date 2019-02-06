<template>
    <section id="minimap">
        <div id="minimap-header">
            <h6>Minimap</h6>

            <icon name="minus"></icon>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto distinctio est fugiat fugit illo libero nesciunt nobis officia optio saepe, sed suscipit temporibus. Ad aliquid dolor magni provident soluta?</p>
    </section>
</template>

<script>
export default {
    name: 'NewMinimap',
}
</script>

<style lang="scss" scoped>
#minimap {
    display: grid;
    grid-template-rows: 50px 1fr;
    background: red;
    margin: auto;
    height: 300px;
    width: 300px;

    #minimap-header {
        background: black;
        display: flex;
        justify-content: space-between;
    }

    h6 {
        color: white;
    }

    .fa-icon {
        color: white;
    }
}
</style>