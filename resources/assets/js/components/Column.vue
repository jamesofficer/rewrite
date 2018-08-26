<template>
    <b-col :style="{
        backgroundColor: element.backgroundColor,
        paddingTop: element.padding.top + 'px',
        paddingRight: element.padding.right + 'px',
        paddingBottom: element.padding.bottom + 'px',
        paddingLeft: element.padding.left + 'px',
    }">
        <add-component-modal
            :canvasIndex="this.canvasIndex"
            :columnIndex="this.columnIndex"
            v-show="hovering"
            class="add-component-modal-btn"
        ></add-component-modal>

        <component v-for="(component, componentIndex) in columnComponents"
            :is="component.type"
            :key="componentIndex"
            :componentIndex="componentIndex"
            :canvasIndex="canvasIndex"
            :columnIndex="columnIndex"
            @click.native.stop="selectComponent(componentIndex)"
            class="shift-component"
        ></component>

        <!-- SIDEBAR -->
        <sidebar v-if="elementIsSelected" title="Column">
            <!-- Components on this Column -->
            <!-- <sidebar-control label="Components on Canvas">
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
            </sidebar-control> -->

            <remove-column-control></remove-column-control>

            <background-color></background-color>

            <padding></padding>
        </sidebar>
    </b-col>
</template>

<script>
import { mapGetters }      from 'vuex'
import AddComponentModal   from './dialogs/AddComponentModal'

import RemoveColumnControl from './sidebar/RemoveColumnControl'
import Sidebar             from './sidebar/Sidebar'
import SidebarControl      from './sidebar/SidebarControl'

import Heading             from './Heading'
import Paragraph           from './Paragraph'
import BlockQuote          from './BlockQuote'

import Padding             from './core/Padding'
import BackgroundColor     from './core/BackgroundColor'

export default {
    name: "Column",

    components: {
        AddComponentModal, RemoveColumnControl, Sidebar, SidebarControl,
        Heading, Paragraph, BlockQuote,
        Padding, BackgroundColor
    },

    props: {
        canvasIndex: {
            type: Number,
            required: true,
        },
        columnIndex: {
            type: Number,
            required: true,
        },
    },

    computed: {
        ...mapGetters({
            getElement: 'getElement',
        }),

        elementIsSelected() {
            return this.$store.getters.elementIsSelected(this.indexes);
        },

        columnComponents() {
            return this.$store.getters.getComponentsForColumn(this.indexes);
        },

        element() {
            return this.getElement(this.indexes);
        },
    },

    data() {
        return {
            hovering: false,    // used to show and hide the edit button
            indexes: {
                canvasIndex: this.canvasIndex,
                columnIndex: this.columnIndex,
            }
        }
    },

    methods: {
        selectComponent(componentIndex) {
            this.$store.commit('selectComponent', {
                canvasIndex: this.canvasIndex,
                columnIndex: this.columnIndex,
                componentIndex: componentIndex,
            });
        },
    }
}
</script>

<style scoped>
.shift-component:hover {
    cursor: pointer;
    outline: 1px solid #abf3c9;
}

.add-component-modal-btn {
    float: right;
}

.component-button-group {
    margin: 3px 0;
}
</style>