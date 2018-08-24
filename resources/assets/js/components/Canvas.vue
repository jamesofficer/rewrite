<template>
    <div>
        <b-row>
            <column v-for="(column, columnIndex) in columnCount" v-bind:key="columnIndex">
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

                    <component v-for="(component, componentIndex) in canvasComponents[columnIndex]"
                        v-bind:is="component.type"
                        v-bind:key="componentIndex"
                        v-bind:index="componentIndex"
                        v-bind:canvasIndex="index"
                        v-bind:columnIndex="columnIndex"
                        @click.native.stop="selectComponent(componentIndex, columnIndex)"
                    ></component>

                    <!-- SIDEBAR -->
                    <sidebar v-if="canvasIsSelected">
                        <sidebar-title title="Canvas"></sidebar-title>

                        <!-- Components on this Canvas -->
                        <sidebar-control label="Components on Canvas">
                            <b-row v-for="(component, componentIndex) in canvasComponents" :key="componentIndex">
                                <b-col>
                                    <b-button-group class="component-button-group">
                                        <b-button size="sm" variant="success" @click="selectComponent(componentIndex, columnIndex)">
                                            {{ component.type }}
                                        </b-button>

                                        <b-button size="sm" variant="success" @click="moveComponentUp(componentIndex, columnIndex)" disabled>
                                            <icon name="arrow-up"></icon>
                                        </b-button>

                                        <b-button size="sm" variant="success" @click="moveComponentDown(componentIndex, columnIndex)" disabled>
                                            <icon name="arrow-down"></icon>
                                        </b-button>

                                        <b-button size="sm" variant="success" @click="deleteComponent(componentIndex, columnIndex)">
                                            <icon name="trash-alt"></icon>
                                        </b-button>
                                    </b-button-group>
                                </b-col>
                            </b-row>
                        </sidebar-control>

                        <hr>

                        <columns></columns>

                        <background-color></background-color>

                        <padding></padding>
                    </sidebar>

                </div>
            </column>
        </b-row>
    </div>
</template>

<script>
import { mapGetters }    from 'vuex'
import Column            from './Column'
import Heading           from './Heading'
import Paragraph         from './Paragraph'
import BlockQuote        from './BlockQuote'
import AddComponentModal from './dialogs/AddComponentModal'
import ColumnControl     from './sidebar/ColumnControl'
import Sidebar           from './sidebar/Sidebar'
import SidebarTitle      from './sidebar/SidebarTitle'
import SidebarControl    from './sidebar/SidebarControl'

// Property Imports:
import BackgroundColor from './core/BackgroundColor'
import Padding from './core/Padding'

export default {
    name: "Canvas",

    components: {
        Column, Heading, Paragraph, BlockQuote,
        ColumnControl, AddComponentModal, Sidebar, SidebarTitle, SidebarControl,
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

        columnCount: {
            get() {
                return this.$store.getters.columnCount(this.index);
            },
            set(amount) {
                this.$store.commit('addColumnsToCanvas', amount);
            }
        },

        canvasComponents() {
            return this.$store.getters.getComponentsForCanvas(this.index);
        },

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
            indexes: {
                canvasIndex: this.index,
            }
        }
    },

    methods: {
        selectComponent(componentIndex, columnIndex) {
            this.$store.commit('setSelectedComponent', {
                canvasIndex: this.index,
                columnIndex: columnIndex,
                componentIndex: componentIndex,
            });
        },

        deleteComponent(componentIndex, columnIndex) {
            this.$store.commit('deleteComponent', {
                canvasIndex: this.index,
                columnIndex: columnIndex,
                componentIndex: componentIndex,
            });
        },

        moveComponentUp(componentIndex, columnIndex) {
            this.$store.commit('moveComponentUp', {
                canvasIndex: this.index,
                columnIndex: columnIndex,
                componentIndex: componentIndex,
            });
        },

        moveComponentDown(componentIndex, columnIndex) {
            this.$store.commit('moveComponentDown', {
                canvasIndex: this.index,
                columnIndex: columnIndex,
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
