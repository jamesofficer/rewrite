<template>
    <div :style="{
        backgroundColor: backgroundColor,
        padding: '20px',
    }">
        <div class="shift-canvas" @mouseover="hovering = true" @mouseout="hovering = false">
            <add-component-modal :canvasIndex="index" v-show="hovering" style="float: right"></add-component-modal>

            <component v-for="(component, componentIndex) in canvasComponents"
                v-bind:is="component.type"
                v-bind:key="componentIndex"
                v-bind:index="componentIndex"
                v-bind:canvasIndex="index"
                @click.native.stop="selectComponent(componentIndex)"
            ></component>
        </div>

        <sidebar v-if="canvasIsSelected">
            <sidebar-title title="Canvas"></sidebar-title>

            <sidebar-control label="Background Color">
                <el-select v-model="backgroundColor" placeholder="White" size="mini">
                    <el-option :value="'white'">White</el-option>
                    <el-option :value="'red'">Red</el-option>
                    <el-option :value="'blue'">Blue</el-option>
                    <el-option :value="'green'">Green</el-option>
                    <el-option :value="'black'">Black</el-option>
                </el-select>
            </sidebar-control>

        </sidebar>
    </div>
</template>

<script>
import Heading           from './Heading';
import AddComponentModal from './dialogs/AddComponentModal';
import Sidebar           from './sidebar/Sidebar'
import SidebarTitle      from './sidebar/SidebarTitle'
import SidebarControl    from './sidebar/SidebarControl'

export default {
    name: "Canvas",

    components: {
        Heading, AddComponentModal, Sidebar, SidebarTitle, SidebarControl
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

        backgroundColor: {
            get () {
                return this.$store.state.canvases[this.index].backgroundColor;
            },
            set(color) {
                this.$store.commit('setBackgroundColor', color);
            }
        },
    },

    data() {
        return {
            hovering: false,    // used to show and hide the edit button
            canvasComponents: this.$store.state.canvases[this.index].components,
        }
    },

    methods: {
        selectComponent(index) {
            this.$store.commit('setSelectedComponent', {
                canvasIndex: this.index,
                componentIndex: index,
            });
        },
    },
}

</script>
