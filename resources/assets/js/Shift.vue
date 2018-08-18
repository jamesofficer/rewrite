<template>
    <b-container fluid class="shift-container">
        <!-- Main Workspace -->
        <b-row>
            <b-col class="shift-workspace">
                <component v-for="(canvas, index) in canvases"
                    v-bind:is="canvas.type"
                    v-bind:key="index"
                    :index="index"
                    @click.native="selectCanvas(index)"
                    class="clickable-canvas"
                ></component>

                <!-- Add Canvas Button -->
                <div class="text-center">
                    <b-btn variant="link" @click="addCanvas">
                        <icon name="plus" scale="3" class="add-canvas-icon"></icon>
                    </b-btn>
                </div>
            </b-col>

            <!-- Sidebar -->
            <b-col cols="4" v-if="componentIsSelected" class="shift-sidebar">
                <portal-target name="top-bar" class="sidebar">
                    <!-- Components Settings will appear in here. -->
                </portal-target>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Canvas from "./components/Canvas.vue";

export default {
    name: "Shift",

    components: {
        Canvas
    },

    computed: {
        componentIsSelected() {
            return this.$store.getters.elementIsSelected
        },
    },

    data() {
        return {
            canvases: this.$store.getters.canvases,
        }
    },

    methods: {
        addCanvas() {
            this.$store.commit('addCanvas');
        },

        selectCanvas(index) {
            this.$store.commit('selectCanvas', index);
        },
    },
};
</script>

<style>
    .b-container {
        background: #999;
    }

    .shift-container {
        background: #eee;
    }

    .shift-workspace {
        height: fit-content;
        margin: 20px;
        padding: 0;
        box-shadow: 0 0 20px #ccc;
    }

    .shift-sidebar {
        margin: 20px 20px 20px 0;
        background: #fff;
        box-shadow: 0 0 20px #ccc;
    }

    .add-canvas-icon {
        cursor: pointer;
        color: green;
        margin-bottom: 20px;
    }

    .add-canvas-icon {
        margin: 20px 0;
        cursor: pointer;
        color: #38c172;
    }

    .add-canvas-icon:hover {
        color: green;
    }
</style>
