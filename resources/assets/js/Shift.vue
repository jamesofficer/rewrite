<template>
    <div id="app">
        <b-container fluid>
            <!-- Top Bar -->
            <b-row class="top-bar-styles">
                <b-col :cols="9">
                    <portal-target name="top-bar" class="top-bar-portal-target">
                        <!-- Top Bar settings will appear here. -->
                    </portal-target>
                </b-col>

                <!-- Global Styles Switch -->
                <b-col :cols="2" class="text-right">
                    <global-styles-switch></global-styles-switch>
                </b-col>

                <!-- Menu -->
                <b-col :cols="1" class="text-right">
                    <shift-menu ref="menu"></shift-menu>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="12">
                    <!-- Notification Message -->
                    <notification></notification>

                    <div 
                        class="article-name-container"
                        :class="{
                            'sm-device-size': getDeviceSize === 'sm',
                            'md-device-size': getDeviceSize === 'md',
                            'lg-device-size': getDeviceSize === 'lg',
                            'xl-device-size': getDeviceSize === 'xl',
                        }"
                    >
                        <!-- Article Name -->
                        <article-title></article-title>
                    </div>
                </b-col>
            </b-row>

            <!-- Main Workspace -->
            <b-container fluid>
                <div ref="shiftArticle"
                    class="shift-workspace"
                    :class="{
                        'sm-device-size': getDeviceSize === 'sm',
                        'md-device-size': getDeviceSize === 'md',
                        'lg-device-size': getDeviceSize === 'lg',
                        'xl-device-size': getDeviceSize === 'xl',
                    }"
                >
                    <canvas v-for="(canvas, canvasIndex) in canvases"
                        is="Canvas"
                        :key="canvasIndex"
                        :canvasIndex="canvasIndex"
                        @click.native.stop="selectElement(canvasIndex)"
                        class="selectable-canvas"
                        v-show="canvas.visible"
                    ></canvas>
                </div>
            </b-container>

            <shift-footer></shift-footer>
        </b-container>
        <!-- End of Shift Container -->

        <div class="fixed-footer">
            <!-- Element Styles Panel -->
            <!-- <element-styles-panel></element-styles-panel> -->

            <!-- Device Size Buttons -->
            <device-size-controls></device-size-controls>

            <!-- Bottom Corner Minimap -->
            <minimap></minimap>
        </div>

        <!-- Modal Windows -->
        <add-component-modal></add-component-modal>

        <edit-text-modal></edit-text-modal>

        <load-article-modal></load-article-modal>

        <my-images-modal></my-images-modal>

        <image-gallery-modal></image-gallery-modal>

        <export-article-modal ref="exportArticleModal"></export-article-modal>

        <recipe-ingredients-modal></recipe-ingredients-modal>

        <background-gradient-modal></background-gradient-modal>
    </div>
</template>

<script>
import KeyBindings             from "./components/mixins/KeyBindings.js";

import ShiftMenu               from "./components/shift/ShiftMenu";
import ShiftFooter             from "./components/shift/ShiftFooter";
import GlobalStylesSwitch      from "./components/shift/GlobalStylesSwitch";
import ArticleTitle            from "./components/shift/ArticleTitle";
import Notification            from "./components/shift/Notification";
import DeviceSizeControls      from "./components/shift/DeviceSizeControls";
import Minimap                 from "./components/shift/Minimap";

import Canvas                  from "./components/layout/Canvas";

import AddComponentModal       from './components/dialogs/AddComponentModal';
import EditTextModal           from './components/dialogs/EditTextModal';
import LoadArticleModal        from './components/dialogs/LoadArticleModal';
import MyImagesModal           from './components/dialogs/MyImagesModal';
import ImageGalleryModal       from './components/dialogs/ImageGalleryModal';
import ExportArticleModal      from './components/dialogs/ExportArticleModal';
import RecipeIngredientsModal  from './components/dialogs/RecipeIngredientsModal';
import BackgroundGradientModal from './components/dialogs/BackgroundGradientModal';

export default {
    name: "Shift",

    components: {
        KeyBindings, ShiftMenu, ShiftFooter, GlobalStylesSwitch, ArticleTitle, DeviceSizeControls, Minimap,
        Notification, Canvas, AddComponentModal, EditTextModal, LoadArticleModal, MyImagesModal,
        ImageGalleryModal, ExportArticleModal, RecipeIngredientsModal, BackgroundGradientModal,
    },

    mixins: [KeyBindings],

    computed: {
        canvases() {
            return this.$store.getters.canvases;
        },

        getDeviceSize() {
            return this.$store.getters.deviceSize;
        }
    },

    methods: {
        selectElement(canvasIndex) {
            this.$store.commit('selectElement', { canvasIndex: canvasIndex });
        },
    },
};
</script>

<style scoped>
.article-name-container {
    margin: 0 auto;
    padding-top: 20px;
}

.shift-canvas {
    background: green !important;
    cursor: pointer;
}

.shift-canvas:hover {
    background: darkgreen !important;
}

.top-bar-styles {
    z-index: 100;
    background: white;
    padding: 10px 15px;
    border-top: 5px solid #38c172;
    border-bottom: 1px dashed gray;
    box-shadow: 0 0 20px #ccc;
}

.top-bar-portal-target {
    display: inline-flex;
}

.shift-workspace {
    height: fit-content;
    margin: 0 auto;
    padding: 0;
    box-shadow: 0 0 20px #ccc;
    overflow: hidden;
}

.fixed-footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
}

.sm-device-size {
    width: 576px;
}

.md-device-size {
    width: 768px;
}

.lg-device-size {
    width: 992px;
}

.xl-device-size {
    width: 1200px;
}
</style>
