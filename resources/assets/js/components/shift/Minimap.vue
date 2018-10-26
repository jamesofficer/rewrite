<template>
    <div class="minimap">
        <div class="minimap-header">
            Minimap
        </div>

        <div class="minimap-body">
            <ol>
                <li v-for="(canvas, canvIndex) in canvases" :key="canvIndex">
                    {{ canvas.type }}

                    <ol>
                        <li v-for="(column, colIndex) in canvas.columns" :key="colIndex">
                            {{ column.type }}

                            <ol>
                                <li v-for="(component, compIndex) in column.components" :key="compIndex">
                                    {{ component.type }}
                                </li>
                            </ol>

                        </li>
                    </ol>

                </li>
            </ol>
        </div>
    </div>
</template>

<script>
export default {
    name: "Minimap",

    computed: {
        canvases() {
            return this.$store.getters.canvases;
        }
    }
}
</script>

<style scoped>
.minimap {
    position: fixed;
    bottom: 0;
    right: 10px;
    background: white;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    width: 300px;
    height: 300px;
    box-shadow: 0px 0px 10px rgba(150, 150, 150, 0.75);
}

.minimap-header {
    background: #38c172;
    color: white;
    padding: 10px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    z-index: 10;
}

.minimap-body {
    height: 100%;
    padding: 10px;
    overflow-y: scroll;
    z-index: 5;
}
</style>

