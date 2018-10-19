<template>
    <b-col :cols="element.columnWidth" :class="{ 'selected-element': elementIsSelected }" :style="getElementStyles">
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
            <remove-column></remove-column>

            <move-column></move-column>

            <add-component-button></add-component-button>

            <padding></padding>

            <background-color></background-color>

            <border></border>

            <box-shadow></box-shadow>

            <column-width></column-width>
        </top-bar>
    </b-col>
</template>

<script>
import { mapGetters }      from 'vuex'
import GetElement          from './mixins/GetElement'

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
import BoxShadow           from './core/BoxShadow'

export default {
    name: "Column",

    components: {
        TopBar, AddComponentButton, RemoveColumn, MoveColumn,
        Heading, Paragraph, BlockQuote, Picture, HorizontalLine,
        InstagramEmbed, FacebookEmbed, YouTubeEmbed,
        RecipeSummary, RecipeIngredients,
        ColumnWidth, Padding, BackgroundColor, Border, BoxShadow,
    },

    mixins: [GetElement],

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
        columnComponents() {
            return this.$store.getters.getComponentsForColumn(this.indexes);
        },
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