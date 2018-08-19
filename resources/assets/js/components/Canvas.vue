<template>
    <div>
        <!-- CANVAS -->
        <div class="shift-canvas" @mouseover="hovering = true" @mouseout="hovering = false" :style="{
            backgroundColor: backgroundColor,
            padding: '20px',
            paddingTop: element.padding.top + 'px',
            paddingRight: element.padding.right + 'px',
            paddingBottom: element.padding.bottom + 'px',
            paddingLeft: element.padding.left + 'px',
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
                <b-row v-for="(component, componentIndex) in canvasComponents" :key="componentIndex">
                    <b-col>
                        <b-button-group class="component-button-group">
                            <b-button size="sm" variant="success" @click="selectComponent(componentIndex)">
                                {{ component.type }}
                            </b-button>

                            <b-button size="sm" variant="success" @click="moveComponentUp(componentIndex)" disabled>
                                <icon name="arrow-up"></icon>
                            </b-button>

                            <b-button size="sm" variant="success" @click="moveComponentDown(componentIndex)" disabled>
                                <icon name="arrow-down"></icon>
                            </b-button>

                            <b-button size="sm" variant="success" @click="deleteComponent(componentIndex)">
                                <icon name="trash-alt"></icon>
                            </b-button>
                        </b-button-group>
                    </b-col>
                </b-row>
            </sidebar-control>

            <hr>

            <background-color></background-color>

            <padding></padding>
        </sidebar>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Heading           from './Heading';
import Paragraph         from './Paragraph';
import AddComponentModal from './dialogs/AddComponentModal';
import Sidebar           from './sidebar/Sidebar'
import SidebarTitle      from './sidebar/SidebarTitle'
import SidebarControl    from './sidebar/SidebarControl'

// Property Imports:
import BackgroundColor from './core/BackgroundColor'
import Padding from './core/Padding'

export default {
    name: "Canvas",

    components: {
        Heading, Paragraph,
        AddComponentModal, Sidebar, SidebarTitle, SidebarControl,
        BackgroundColor, Padding
    },

    props: {
        index: {
            type: Number,
        },
    },

    computed: {
        ...mapGetters({
            getElement: 'getElement',
        }),

        element() {
            return this.getElement(this.indexes);
        },

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
            indexes: {
                canvasIndex: this.index,
            }
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
        },

        moveComponentUp(componentIndex) {
            this.$store.commit('moveComponentUp', {
                canvasIndex: this.index,
                componentIndex: componentIndex,
            });
        },

        moveComponentDown(componentIndex) {
            this.$store.commit('moveComponentDown', {
                canvasIndex: this.index,
                componentIndex: componentIndex,
            });
        },
    },
}
</script>

<style>
.component-button-group {
    margin: 3px 0;
}
</style>
