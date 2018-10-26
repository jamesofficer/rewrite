<template>
    <div>
        <top-bar-control variant="outline-info" icon="clone" tooltip="Clone Component" id="clone-component-popover" @click="showPopover = true"></top-bar-control>

        <b-popover target="clone-component-popover" placement="bottomright" :show.sync="showPopover">
            <b-row style="width: 250px">
                <b-col>
                    <h6>Destination Canvas</h6>

                    <b-form-select v-model="canvasIndex" :options="canvases"></b-form-select>
                </b-col>
            </b-row>

            <br>

            <b-row>
                <b-col>
                    <h6>Destination Column</h6>

                    <b-form-select v-model="columnIndex" :options="columns"></b-form-select>
                </b-col>
            </b-row>

            <br>

            <b-row>
                <b-col>
                    <b-btn variant="success" @click="cloneComponent">Clone</b-btn>
                </b-col>
            </b-row>
        </b-popover>
    </div>
</template>

<script>
import TopBarControl from './TopBarControl';

export default {
    name: "CloneComponent",

    components: { TopBarControl },

    computed: {
        canvases() {
            let canvasOptions = [];

            this.$store.getters.canvases.forEach(function (canvas, index) {
                canvasOptions.push({
                    text: 'Canvas #' + (index + 1),
                    value: index,
                });
            });

            return canvasOptions;
        },

        columns() {
            let columnOptions = [];
            const columns = this.$store.getters.columns(this.canvasIndex);

            for (let i = 0; i < columns.length; i++) {
                columnOptions.push({
                    text: 'Column #' + (i + 1),
                    value: i,
                });
            }

            return columnOptions;
        },
    },

    data() {
        return {
            showPopover: false,
            canvasIndex: 0,
            columnIndex: 0,
        }
    },

    methods: {
        cloneComponent() {
            this.$store.commit('cloneComponent', {
                canvasIndex: this.canvasIndex,
                columnIndex: this.columnIndex,
            });

            this.showPopover = false;
        }
    }
}
</script>
