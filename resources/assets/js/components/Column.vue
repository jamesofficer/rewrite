<template>
    <b-col :cols="element.columnWidth" :class="{ 'selected-element': elementIsSelected }" :style="{
        backgroundColor: 'rgba(' + element.backgroundColor.r + ', ' + element.backgroundColor.g + ', ' + element.backgroundColor.b + ', ' + element.backgroundColor.a + ')',
        paddingTop: element.padding.top + 'px',
        paddingRight: element.padding.right + 'px',
        paddingBottom: element.padding.bottom + 'px',
        paddingLeft: element.padding.left + 'px',
        borderWidth: element.border.top + 'px ' + element.border.right + 'px ' + element.border.bottom + 'px ' + element.border.left + 'px ',
        borderStyle: element.border.style,
        borderColor: 'rgba(' + element.border.color.r + ', ' + element.border.color.g + ', ' + element.border.color.b + ', ' + element.border.color.a + ')',
    }">
        <component v-for="(component, componentIndex) in columnComponents"
            :is="component.type"
            :key="componentIndex"
            :componentIndex="componentIndex"
            :canvasIndex="canvasIndex"
            :columnIndex="columnIndex"
            @click.native.stop="selectComponent(componentIndex)"
            class="shift-component"
        ></component>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <add-component-button></add-component-button>

            <remove-column></remove-column>

            <move-column></move-column>

            <column-width></column-width>

            <background-color></background-color>

            <border></border>
        </top-bar>
    </b-col>
</template>

<script>
import { mapGetters }      from 'vuex'

import TopBar              from './topbar/TopBar'
import AddComponentButton  from './topbar/AddComponentButton'
import RemoveColumn        from './topbar/RemoveColumn'
import MoveColumn          from './topbar/MoveColumn'

import Heading             from './Heading'
import Paragraph           from './Paragraph'
import BlockQuote          from './BlockQuote'
import Picture             from './Picture'
import HorizontalLine      from './HorizontalLine'
import InstagramEmbed      from './InstagramEmbed'
import FacebookEmbed       from './FacebookEmbed'
import YouTubeEmbed        from './YouTubeEmbed'
import RecipeSummary       from './RecipeSummary'
import RecipeIngredients   from './RecipeIngredients'

import ColumnWidth         from './core/ColumnWidth'
import Padding             from './core/Padding'
import BackgroundColor     from './core/BackgroundColor'
import Border              from './core/Border'

export default {
    name: "Column",

    components: {
        TopBar, AddComponentButton, RemoveColumn, MoveColumn,
        Heading, Paragraph, BlockQuote, Picture, HorizontalLine,
        InstagramEmbed, FacebookEmbed, YouTubeEmbed,
        RecipeSummary, RecipeIngredients,
        ColumnWidth, Padding, BackgroundColor, Border
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
    },
}
</script>

<style scoped>
.shift-component:hover {
    cursor: pointer;
    outline: 1px solid #abf3c9;
}

.component-button-group {
    margin: 3px 0;
}
</style>