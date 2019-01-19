<template>
    <div class="minimap" :style="{ 'height' : minimapVisible ? '300px' : '35px' }">
        <div class="minimap-header" @click="minimapVisible = ! minimapVisible">
            <div class="row">
                <div class="col-6">
                    Layout Map
                </div>

                <div class="col-6 text-right">
                    <span class="minimap-minimise-button">
                        <icon :name="minimapVisible ? 'minus' : 'plus'"></icon>
                    </span>
                </div>
            </div>
        </div>

        <div class="minimap-body" v-if="minimapVisible">
            <!-- Loop Canvases -->
            <ul
                v-for="(canvas, canvasIndex) in canvases"
                :key="canvasIndex"
                class="minimap-ul"
            >
                <li
                    class="minimap-element-row"
                    :class="{ 'element-selected' : canvas.selected }"
                    @click="selectElement(canvasIndex)"
                >
                    <span class="collapse-icon-container">
                        <icon name="caret-down"></icon>
                    </span>

                    Canvas {{ canvasIndex + 1 }}

                    <span class="eye-icon-container">
                        <icon :name="canvas.visible ? 'eye' : 'eye-slash'" @click.native="toggleElementVisibility(canvasIndex)"></icon>
                    </span>
                </li>


                <!-- Loop Rows -->
                <ul
                    v-for="(row, rowIndex) in canvas.rows"
                    :key="rowIndex"
                    class="minimap-ul"
                >
                    <li
                        class="minimap-element-row add-left-border pad-row"
                        :class="{ 'element-selected' : row.selected }"
                        @click="selectElement(canvasIndex, rowIndex)"
                    >
                        <span class="collapse-icon-container">
                            <icon name="caret-down"></icon>
                        </span>

                        Row {{ rowIndex + 1 }}

                        <span class="eye-icon-container">
                            <icon :name="row.visible ? 'eye' : 'eye-slash'" @click.native="toggleElementVisibility(canvasIndex, rowIndex)"></icon>
                        </span>
                    </li>


                    <!-- Loop Columns -->
                    <ul
                        v-for="(column, columnIndex) in row.columns"
                        :key="columnIndex"
                        class="minimap-ul"
                    >
                        <li
                            class="minimap-element-row add-left-border pad-column"
                            :class="{ 'element-selected' : column.selected }"
                            @click="selectElement(canvasIndex, rowIndex, columnIndex)"
                        >
                            <span class="collapse-icon-container">
                                <icon name="caret-down"></icon>
                            </span>

                            Column {{ columnIndex + 1 }}

                            <span class="eye-icon-container">
                                <icon :name="column.visible ? 'eye' : 'eye-slash'" @click.native="toggleElementVisibility(canvasIndex, rowIndex, columnIndex)"></icon>
                            </span>
                        </li>


                        <!-- Loop Components -->
                        <ul
                            v-for="(component, componentIndex) in column.components"
                            :key="componentIndex"
                            class="minimap-ul"
                        >
                            <li
                                class="minimap-element-row add-left-border pad-component"
                                :class="{ 'element-selected' : component.selected }"
                                @click="selectElement(canvasIndex, rowIndex, columnIndex, componentIndex)"
                            >
                                {{ component.type }}

                                <span class="eye-icon-container">
                                    <icon :name="component.visible ? 'eye' : 'eye-slash'" @click.native="toggleElementVisibility(canvasIndex, rowIndex, columnIndex, componentIndex)"></icon>
                                </span>
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
    },

    data() {
        return {
            minimapVisible: false,
        }
    },

    methods: {
        selectElement(canvasIndex, rowIndex = undefined, columnIndex = undefined, componentIndex = undefined) {
            this.$store.commit('selectElement', {
                canvasIndex: canvasIndex,
                rowIndex: rowIndex,
                columnIndex: columnIndex,
                componentIndex: componentIndex,
            });
        },

        toggleElementVisibility(canvasIndex, rowIndex = undefined, columnIndex = undefined, componentIndex = undefined) {
            this.$store.commit('toggleElementVisibility', {
                canvasIndex: canvasIndex,
                rowIndex: rowIndex,
                columnIndex: columnIndex,
                componentIndex: componentIndex,
            });
        }
    }
}
</script>

<style scoped>
ul {
    margin: 0;
}

.minimap {
    position: fixed;
    bottom: 50px;
    right: 5px;
    background: white;
    border-radius: 5px;
    width: 280px;
    box-shadow: 0px 0px 10px rgba(150, 150, 150, 0.75);
    overflow: hidden;
}

.minimap-header {
    cursor: pointer;
    background: #38c172;
    color: white;
    padding: 7px 10px;
    border-bottom: 1px solid #24b161;
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
    background: #59e696;
}

.add-left-border {
    border-left: 1px solid #dddddd;
}

.element-selected {
    color: white;
    background: #38c172;
}

.pad-row {
    padding-left: 15px;
}

.pad-column {
    padding-left: 25px;
}

.pad-component {
    padding-left: 60px;
}

.collapse-icon-container {
    padding: 0 5px;
}

.eye-icon-container {
    float: right;
    margin-right: 5px
}
</style>

