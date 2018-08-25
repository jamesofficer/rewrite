<template>
    <div>
        <b-col class="clickable-component" style="outline: 1px solid red">
            <add-component-modal
                :canvasIndex="this.canvasIndex"
                :columnIndex="this.columnIndex"
                v-show="hovering"
                class="add-component-modal-btn"
            ></add-component-modal>

            <component v-for="(component, componentIndex) in columnComponents"
                :is="component.type"
                :key="componentIndex"
                :index="componentIndex"
                :canvasIndex="canvasIndex"
                :columnIndex="columnIndex"
                @click.native.stop="selectComponent(componentIndex)"
                style="border: 1px solid blue"
            ></component>
        </b-col>

        <!-- SIDEBAR -->
        <sidebar v-if="elementIsSelected">
            <sidebar-title title="Column"></sidebar-title>

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

            <hr>

            <background-color></background-color>

            <padding></padding>
        </sidebar>

    </div>
</template>

<script>
import { mapGetters }    from 'vuex'
import Heading           from './Heading'
import Paragraph         from './Paragraph'
import BlockQuote        from './BlockQuote'

import Padding           from './core/Padding'
import BackgroundColor   from './core/BackgroundColor'

import AddComponentModal from './dialogs/AddComponentModal'
import Sidebar           from './sidebar/Sidebar'
import SidebarTitle      from './sidebar/SidebarTitle'
import SidebarControl    from './sidebar/SidebarControl'

export default {
    name: "Column",

    components: {
        Heading, Paragraph, BlockQuote,
        AddComponentModal, Sidebar, SidebarTitle, SidebarControl,
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
        // ...mapGetters({
        //     getElement: 'getElement',
        // }),

        elementIsSelected() {
            return this.$store.getters.elementIsSelected(this.indexes);
        },

        columnComponents() {
            return this.$store.getters.getComponentsForColumn(this.indexes);
        },

        // element() {
        //     return this.getElement(this.indexes);
        // },
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

<style>
.add-component-modal-btn {
    float: right;
}

.component-button-group {
    margin: 3px 0;
}
</style>