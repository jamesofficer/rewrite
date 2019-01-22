<template>
    <b-col
        :id="getElementIdentifier"
        :class="{ 'selected-element': elementIsSelected }"
        :style="getElementStyles"
        :cols="element.columnWidth"
    >
        <component v-for="(component, componentIndex) in components"
            :is="component.type"
            :key="componentIndex"
            :canvasIndex="canvasIndex"
            :rowIndex="rowIndex"
            :columnIndex="columnIndex"
            :componentIndex="componentIndex"
            @click.native.stop="selectElement(componentIndex)"
            class="selectable-element"
            v-show="component.visible"
        ></component>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-clone-move-element></delete-clone-move-element>

            <add-component-button></add-component-button>

            <element-positioning :showWidth="false"></element-positioning>

            <element-background :element="element"></element-background>

            <element-borders></element-borders>

            <element-box-shadow></element-box-shadow>

            <column-settings></column-settings>
        </top-bar>
    </b-col>
</template>

<script>
import GetElement          from '../mixins/GetElement'

import TopBar              from '../topbar/TopBar'
import DeleteCloneMoveElement from '../topbar/DeleteCloneMoveElement'
import AddComponentButton  from '../topbar/AddComponentButton'
import ClearImage          from '../topbar/ClearImage'

import ElementPositioning from '../panels/ElementPositioning'
import ElementBackground  from '../panels/ElementBackground'
import ElementBorders     from '../panels/ElementBorders'
import ElementBoxShadow   from '../panels/ElementBoxShadow'
import ColumnSettings     from '../panels/ColumnSettings'

import Heading            from '../Heading'
import Paragraph          from '../Paragraph'
import BlockQuote         from '../BlockQuote'
import Picture            from '../Picture'
import HorizontalLine     from '../HorizontalLine'
import InstagramEmbed     from '../InstagramEmbed'
import FacebookEmbed      from '../FacebookEmbed'
import YouTubeEmbed       from '../YouTubeEmbed'
import RecipeSummary      from '../RecipeSummary'
import RecipeIngredients  from '../RecipeIngredients'

export default {
    name: "Column",

    components: {
        TopBar, AddComponentButton, DeleteCloneMoveElement, ClearImage,
        ElementPositioning, ElementBackground, ElementBorders, ElementBoxShadow, ColumnSettings,
        Heading, Paragraph, BlockQuote, Picture, HorizontalLine,
        InstagramEmbed, FacebookEmbed, YouTubeEmbed,
        RecipeSummary, RecipeIngredients,
    },

    mixins: [GetElement],

    computed: {
        components() {
            return this.$store.getters.components(this.indexes);
        },
    },

    methods: {
        selectElement(componentIndex) {
            this.$store.commit('selectElement', {
                canvasIndex: this.canvasIndex,
                rowIndex: this.rowIndex,
                columnIndex: this.columnIndex,
                componentIndex: componentIndex,
            });
        },
    },
}
</script>