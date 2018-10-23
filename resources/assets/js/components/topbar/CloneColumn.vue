<template>
    <div>
        <top-bar-control variant="outline-info" icon="clone" tooltip="Clone Column" id="clone-column-popover"></top-bar-control>

        <b-popover target="clone-column-popover" placement="bottomright" :show.sync="showPopover">
            <b-row style="width: 250px">
                <b-col>
                    <h6>Destination Canvas</h6>

                    <b-form-select v-model="canvasIndex" :options="canvases"></b-form-select>
                </b-col>
            </b-row>

            <br>

            <b-row>
                <b-col>
                    <b-btn variant="success" @click="cloneColumn">Clone</b-btn>
                </b-col>
            </b-row>
        </b-popover>
    </div>
</template>

<script>
import TopBarControl from './TopBarControl';

export default {
    name: "CloneColumn",

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
    },

    data() {
        return {
            showPopover: false,
            canvasIndex: 0,
        }
    },

    methods: {
        cloneColumn() {
            this.$store.commit('cloneColumn', this.canvasIndex);
        }
    }
}
</script>

