<template>
    <div class="minimap">
        <div class="minimap-header">
            <div class="row">
                <div class="col-6">
                    <strong>Layout Map</strong>
                </div>

                <div class="col-6 text-right">
                    <span class="minimap-minimise-button">[-]</span>
                </div>
            </div>
        </div>

        <div class="minimap-body">
            <!-- Loop Canvases -->
            <ul v-for="(canvas, canvasIndex) in canvases" :key="canvasIndex" class="minimap-ul">
                <li class="minimap-element-row">
                    <strong>Canvas {{ canvasIndex + 1 }}</strong>
                </li>

                <!-- Loop Rows -->
                <ul v-for="(row, rowIndex) in canvas.rows" :key="rowIndex" class="minimap-ul minimap-row-list">
                    <li class="minimap-element-row add-left-border">
                        <strong>Row {{ rowIndex + 1 }}</strong>
                    </li>

                    <!-- Loop Columns -->
                    <ul v-for="(column, columnIndex) in row.columns" :key="columnIndex" class="minimap-ul minimap-row-list">
                        <li class="minimap-element-row add-left-border">
                            <strong>Column {{ columnIndex + 1 }}</strong>
                        </li>

                        <!-- Loop Components -->
                        <ul v-for="(component, componentIndex) in column.components" :key="componentIndex" class="minimap-ul minimap-row-list">
                            <li class="minimap-element-row add-left-border">
                                <strong>{{ component.type }}</strong>
                            </li>
                        </ul>
                    </ul>
                </ul>
            </ul>
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
    bottom: 5px;
    right: 5px;
    background: white;
    border-radius: 5px;
    width: 300px;
    height: 300px;
    box-shadow: 0px 0px 10px rgba(150, 150, 150, 0.75);
    overflow: hidden;
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
    overflow-y: scroll;
    z-index: 5;
}

.minimap-minimise-button {
    cursor: pointer;
}

.minimap-minimise-button:hover {
    color: #dddddd;
}

.minimap-ul {
    list-style-type: none;
    padding: 0;
    width: 100%;
}

.minimap-element-row {
    width: 100%;
    padding: 2px 5px;
    border-bottom: 1px solid #dddddd;
    background: rgb(250, 250, 250);
}

.minimap-element-row:nth-child(even) {
    background: rgb(240, 240, 240);
}

.minimap-element-row:hover {
    cursor: pointer;
    background: #dddddd;
}

.add-left-border {
    border-left: 1px solid #dddddd;
}

.minimap-row-list {
    padding-left: 15px;
}

</style>

