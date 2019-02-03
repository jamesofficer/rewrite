<template>
    <div>
        <!-- TopBar -->
        <div id="topbar">
            <b-row>
                <b-col cols="8">
                    <global-styles-switch></global-styles-switch>

                    <portal-target name="sidebar" style="display: inline"></portal-target>
                </b-col>

                <b-col cols="4" class="text-right">
                    <device-size-controls></device-size-controls>

                    <!-- TODO: Extract this to its own component. -->
                    <div class="topbar-button">
                        <b-button v-b-modal.menuModal variant="success">
                            <icon name="bars"></icon>
                        </b-button>
                    </div>
                </b-col>
            </b-row>
        </div>

        <div id="rewrite-container">
            <!-- Main Content Area -->
            <div id="rewrite-content-area">
                <notification></notification>

                <!-- Article Name -->
                <div
                    class="article-name-container"
                    :class="{
                        'sm-device-size': getDeviceSize === 'sm',
                        'md-device-size': getDeviceSize === 'md',
                        'lg-device-size': getDeviceSize === 'lg',
                        'xl-device-size': getDeviceSize === 'xl',
                    }"
                >
                    <article-title></article-title>
                </div>

                <!-- Main Workspace -->
                <div ref="shiftArticle"
                    class="rewrite-workspace"
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

                <shift-footer></shift-footer>
            </div>

            <div class="fixed-footer">
                <element-styles-panel></element-styles-panel>

                <minimap></minimap>

                <color-picker-panel></color-picker-panel>
            </div>

            <!-- Modal Windows -->
            <menu-modal></menu-modal>

            <add-component-modal></add-component-modal>

            <edit-text-modal></edit-text-modal>

            <load-article-modal></load-article-modal>

            <my-images-modal></my-images-modal>

            <image-gallery-modal></image-gallery-modal>

            <export-article-modal ref="exportArticleModal"></export-article-modal>

            <recipe-ingredients-modal></recipe-ingredients-modal>

            <background-gradient-modal></background-gradient-modal>
        </div>
    </div>
</template>

<script>
import KeyBindings             from "./components/mixins/KeyBindings.js";

import ShiftFooter             from "./components/shift/ShiftFooter";
import GlobalStylesSwitch      from "./components/shift/GlobalStylesSwitch";
import ArticleTitle            from "./components/shift/ArticleTitle";
import Notification            from "./components/shift/Notification";
import DeviceSizeControls      from "./components/shift/DeviceSizeControls";

import Canvas                  from "./components/layout/Canvas";

import Minimap                 from "./components/panels/Minimap";
import ColorPickerPanel        from "./components/panels/ColorPickerPanel";
import ElementStylesPanel      from "./components/panels/ElementStylesPanel";

import MenuModal               from './components/dialogs/MenuModal';
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
        KeyBindings, ShiftFooter, GlobalStylesSwitch, ArticleTitle, DeviceSizeControls, Minimap,
        ColorPickerPanel, ElementStylesPanel, Notification, Canvas,
        AddComponentModal, EditTextModal, MenuModal, LoadArticleModal, MyImagesModal, ImageGalleryModal,
        ExportArticleModal, RecipeIngredientsModal, BackgroundGradientModal,
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
#topbar {
    width: 100%;
    padding: 8px 10px;
    background: white;
    border-top: 3px solid #38c172;
    border-bottom: 1px dashed gray;
    box-shadow: 0 5px 10px #ccc;
}

.article-name-container {
    margin: 0 auto;
    padding-top: 20px;
}

#rewrite-container {
    display: flex;
    align-items: stretch;
}

#rewrite-content-area {
    width: 100%;
}

.rewrite-workspace {
    height: fit-content;
    margin: 0 auto;
    padding: 0;
    box-shadow: 0 0 20px #ccc;
    overflow: hidden;
    border-radius: 10px;
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
