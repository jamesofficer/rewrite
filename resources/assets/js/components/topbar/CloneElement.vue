<template>
    <div>
        <top-bar-control variant="outline-info" icon="clone" tooltip="Clone Element" id="clone-element-popover" @click="showPopover = true"></top-bar-control>

        <b-popover target="clone-element-popover" placement="bottomright" :show.sync="showPopover">
            <b-row v-if="currentIndexes.row !== undefined" style="width: 250px">
                <b-col>
                    <h6>Destination Canvas</h6>

                    <b-form-select v-model="selectedCanvasIndex" :options="menuOptions.canvases"></b-form-select>
                </b-col>

                <br>
            </b-row>


            <b-row v-if="currentIndexes.column !== undefined" style="width: 250px">
                <b-col>
                    <h6>Destination Rows</h6>

                    <b-form-select v-model="selectedRowIndex" :options="menuOptions.rows"></b-form-select>
                </b-col>

                <br>
            </b-row>

<!-- 

            <b-row>
                <b-col>
                    <h6>Destination Column</h6>

                    <b-form-select v-model="columnIndex" :options="columns"></b-form-select>
                </b-col>
            </b-row>

            <br> -->

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

    computed: {
        currentIndexes() {
            return this.$store.getters.getActiveElementIndexes;            
        },

        menuOptions() {
            let indexes = {
                canvasIndex: this.currentIndexes.canvas,
                rowIndex: this.currentIndexes.row,
            }

            let menus = {
                canvases: [],
                rows: [],
                columns: [],
            };

            this.$store.getters.canvases.forEach(function (canvas, index) {
                menus.canvases.push({
                    text: 'Canvas ' + (index + 1),
                    value: index,
                });
            });

            this.$store.getters.rows(indexes).forEach(function (row, index) {
                menus.rows.push({
                    text: 'Row ' + (index + 1),
                    value: index,
                });
            });

            if (indexes.rowIndex !== undefined) {
                this.$store.getters.columns(indexes).forEach(function (column, index) {
                    menus.columns.push({
                        text: 'Column ' + (index + 1),
                        value: index,
                    });
                });
            }

            return menus;
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
                canvasIndex: this.selectedCanvasIndex,
                rowIndex: this.selectedRowIndex,
                columnIndex: this.selectedColumnIndex,
            });

            this.showPopover = false;
        }
    }
}
</script>
