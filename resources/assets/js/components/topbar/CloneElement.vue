<template>
    <div>
        <top-bar-control variant="outline-info" icon="clone" tooltip="Clone Element" id="clone-element-popover" @click="showPopover = true"></top-bar-control>

        <b-popover target="clone-element-popover" placement="bottomright" :show.sync="showPopover">
            <!-- If a Canvas is selected, we do not need to specify a position to clone it to -->

            <!-- If a Row is selected, we can clone that Row to other Canvases -->
            <b-row v-if="elementType === 'Row' || elementType === 'Column' || elementType === 'Component'" style="width: 250px">
                <b-col>
                    <h6>Destination Canvas</h6>
                    <b-form-select v-model="selectedCanvasIndex" :options="canvases"></b-form-select>
                </b-col>
            </b-row>

            <!-- If a Column is selected, we can clone that Row to other Canvases -->
            <b-row v-if="elementType === 'Column' || elementType === 'Component'" style="width: 250px">
                <b-col>
                    <h6>Destination Rows</h6>
                    <b-form-select v-model="selectedRowIndex" :options="rows"></b-form-select>
                </b-col>
            </b-row>

            <!-- If a Component is selected, we can clone that Component to other Columns -->
            <b-row v-if="elementType === 'Component'">
                <b-col>
                    <h6>Destination Column</h6>

                    <b-form-select v-model="selectedColumnIndex" :options="columns"></b-form-select>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <b-btn variant="success" @click="cloneElement">Clone</b-btn>
                </b-col>
            </b-row>
        </b-popover>
    </div>
</template>

<script>
import TopBarControl from './TopBarControl';

export default {
    name: "CloneElement",

    components: { TopBarControl },

    props: {
        elementType: {
            type: String,
            required: true,
        }
    },

    computed: {
        currentIndexes() {
            const active = this.$store.getters.getActiveElementIndexes;

            return {
                canvasIndex: active.canvas,
                rowIndex: active.row,
                column: active.column,
                component: active.component,
            }
        },

        canvases() {
            let canvases = [];

            this.$store.getters.canvases.forEach(function (canvas, index) {
                canvases.push({
                    text: 'Canvas ' + (index + 1),
                    value: index,
                });
            });

            this.selectedCanvasIndex = 0;

            return canvases;
        },

        rows() {
            let rows = [];

            this.$store.getters.rows(this.currentIndexes).forEach(function (row, index) {
                rows.push({
                    text: 'Row ' + (index + 1),
                    value: index,
                });
            });

            this.selectedRowIndex = 0;

            return rows;
        },

        columns() {
            let columns = [];

            this.$store.getters.columns(this.currentIndexes).forEach(function (column, index) {
                columns.push({
                    text: 'Column ' + (index + 1),
                    value: index,
                });
            });

            this.selectedColumnIndex = 0;
            
            return columns;        
        },
    },

    data() {
        return {
            showPopover: false,
            selectedCanvasIndex: undefined,
            selectedRowIndex: undefined,
            selectedColumnIndex: undefined,
        }
    },

    methods: {
        cloneElement() {
            this.$store.commit('cloneElement', {
                type: this.elementType,
                canvasIndex: this.selectedCanvasIndex,
                rowIndex: this.selectedRowIndex,
                columnIndex: this.selectedColumnIndex,
            });

            this.showPopover = false;
        }
    }
}
</script>
