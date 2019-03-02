<template>
    <div>
        <div class="minimap-heading">
            <h6>Minimap</h6>
        </div>

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
                    class="minimap-element-row pad-row"
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
                        class="minimap-element-row pad-column"
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
                            class="minimap-element-row pad-component"
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
</template>

<script>
import FloatingPanel from './FloatingPanel';

export default {
    name: "Minimap",

    components: { FloatingPanel },

    computed: {
        canvases() {
            return this.$store.getters.canvases;
        }
    },

    data() {
        return {
            minimapVisible: true,
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

<style lang="scss" scoped>
.minimap-heading {
    padding: 10px 5px;
    border-top: 1px solid #888;
    border-bottom: 1px solid #888;
    background: #222;

    h6 {
        color: #ccc;
        margin: 0;
    }
}

ul {
    margin: 0;
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
    border-bottom: 1px solid #888;
    background: #333;
    color: white;
}

.minimap-element-row:nth-child(even) {
    background: rgb(240, 240, 240);
}

.minimap-element-row:hover {
    cursor: pointer;
    background: #555;
}

.element-selected {
    color: white;
    background: #999;
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

