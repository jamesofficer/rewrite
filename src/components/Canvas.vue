<template>
    <div>
        <!-- CANVAS -->
        <div class="shift-canvas" @mouseover="hovering = true" @mouseout="hovering = false" :style="{
            backgroundColor: backgroundColor,
            padding: '20px',
        }">
            <add-component-modal :canvasIndex="index" v-show="hovering" style="float: right"></add-component-modal>

            <component v-for="(component, componentIndex) in canvasComponents"
                v-bind:is="component.type"
                v-bind:key="componentIndex"
                v-bind:index="componentIndex"
                v-bind:canvasIndex="index"
                @click.native.stop="selectComponent(componentIndex)"
            ></component>
        </div>

        <!-- SIDEBAR -->
        <sidebar v-if="canvasIsSelected">
            <sidebar-title title="Canvas"></sidebar-title>

            <!-- Components on this Canvas -->
            <sidebar-control label="Components on Canvas">
                <el-row v-for="(component, componentIndex) in canvasComponents" :key="componentIndex">
                    <el-button-group class="component-button-group">
                        <el-button size="mini">{{ component.type }}</el-button>
                        <el-button size="mini" icon="el-icon-delete" @click="deleteComponent(componentIndex)"></el-button>
                    </el-button-group>
                </el-row>
            </sidebar-control>

            <background-color></background-color>
        </sidebar>
    </div>
</template>

<script>
import Heading           from './Heading';
import Paragraph         from './Paragraph';
import AddComponentModal from './dialogs/AddComponentModal';
import Sidebar           from './sidebar/Sidebar'
import SidebarTitle      from './sidebar/SidebarTitle'
import SidebarControl    from './sidebar/SidebarControl'

// Property Imports:
import BackgroundColor from './core/BackgroundColor'

export default {
    name: "Canvas",

    components: {
        Heading, Paragraph,
        AddComponentModal, Sidebar, SidebarTitle, SidebarControl,
        BackgroundColor,
    },

    props: {
        index: {
            type: Number,
        },
    },

    computed: {
        canvasIsSelected() {
            return this.$store.getters.canvasIsSelected(this.index);
        },

        backgroundColor() {
            return this.$store.state.canvases[this.index].backgroundColor;
        },
    },

    data() {
        return {
            hovering: false,    // used to show and hide the edit button
            canvasComponents: this.$store.state.canvases[this.index].components,
        }
    },

    methods: {
        selectComponent(componentIndex) {
            this.$store.commit('setSelectedComponent', {
                canvasIndex: this.index,
                componentIndex: componentIndex,
            });
        },

        deleteComponent(componentIndex) {
            this.$store.commit('deleteComponent', {
                canvasIndex: this.index,
                componentIndex: componentIndex,
            });
        }
    },
}

</script>

<style scoped>
    .component-button-group {
        margin-bottom: 5px;
    }
</style>

