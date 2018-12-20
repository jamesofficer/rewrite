<template>
    <b-col
        :cols="element.columnWidth"
        :style="getElementStyles"
        :class="{ 'selected-element': elementIsSelected }"
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

            <margin></margin>

            <padding></padding>

            <background-color></background-color>

            <background-gradient></background-gradient>

            <image-selector></image-selector>

            <border></border>

            <box-shadow></box-shadow>

            <!-- Only need these for background images -->
            <template v-if="element.backgroundImage !== undefined && element.backgroundImage.includes('url')">
                <background-size></background-size>

                <background-position></background-position>
            </template>

            <!-- Clearing a background image also clears a background gradient -->
            <template v-if="element.backgroundImage">
                <clear-image></clear-image>
            </template>

            <column-width></column-width>

            <align-components></align-components>
        </top-bar>
    </b-col>
</template>

<script>
import GetElement          from '../mixins/GetElement'

import TopBar              from '../topbar/TopBar'
import DeleteCloneMoveElement from '../topbar/DeleteCloneMoveElement'
import AddComponentButton  from '../topbar/AddComponentButton'
import AlignComponents     from '../topbar/AlignComponents'
import ClearImage          from '../topbar/ClearImage'
import BackgroundSize      from '../core/BackgroundSize'

import ColumnWidth         from '../core/ColumnWidth'
import Margin              from '../core/Margin'
import Padding             from '../core/Padding'
import BackgroundColor     from '../core/BackgroundColor'
import BackgroundGradient  from '../core/BackgroundGradient'
import BackgroundPosition  from '../core/BackgroundPosition'
import ImageSelector       from '../core/ImageSelector'
import Border              from '../core/Border'
import BoxShadow           from '../core/BoxShadow'

import Heading             from '../Heading'
import Paragraph           from '../Paragraph'
import BlockQuote          from '../BlockQuote'
import Picture             from '../Picture'
import HorizontalLine      from '../HorizontalLine'
import InstagramEmbed      from '../InstagramEmbed'
import FacebookEmbed       from '../FacebookEmbed'
import YouTubeEmbed        from '../YouTubeEmbed'
import RecipeSummary       from '../RecipeSummary'
import RecipeIngredients   from '../RecipeIngredients'

export default {
    name: "Column",

    components: {
        TopBar, AddComponentButton, AlignComponents, DeleteCloneMoveElement, ClearImage,
        ColumnWidth, Margin, Padding, BackgroundColor, BackgroundGradient, ImageSelector, Border, BoxShadow, BackgroundPosition, BackgroundSize,
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

<style scoped>
.component-button-group {
    margin: 3px 0;
}
</style>