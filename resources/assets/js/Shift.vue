<template>
    <div id="rewrite-container">
        <!-- Sidebar -->
        <div id="sidebar">
            <shift-menu ref="menu"></shift-menu>

            <global-styles-switch></global-styles-switch>

            <portal-target name="sidebar"></portal-target>
        </div>

        <!-- Main Content Area -->
        <div id="rewrite-content-area">
            <div class="device-size-controls-container">
                <device-size-controls></device-size-controls>
            </div>

            <!-- NOTIFCATION IS CAUSING EXTRA PIXELS TO BE ADDED TO RIGHT OF WINDOW -->
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

            <shift-footer></shift-footer>
        </div>

        <div class="fixed-footer">
            <element-styles-panel></element-styles-panel>

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
import ElementStylesPanel         from "./components/shift/ElementStylesPanel";
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
        ElementStylesPanel, Notification, Canvas, AddComponentModal, EditTextModal, LoadArticleModal, MyImagesModal,
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
#rewrite-container {
    display: flex;
    align-items: stretch;
    border-top: 5px solid #38c172;
}

#sidebar {
    height: 100vh;
    width: 65px;
    position: fixed;
    top: 5px;
    background: white;
    padding: 10px;
    border-right: 1px dashed gray;
}

#rewrite-content-area {
    width: 100%;
    margin-left: 65px;
}

.article-name-container {
    margin: 0 auto;
    padding-top: 20px;
}

.device-size-controls-container {
    position: fixed;
    top: 10px;
    left: 70px;
}

.sidebar-styles {
    z-index: 100;
    background: white;
    padding: 10px 15px;
    border-bottom: 1px dashed gray;
    box-shadow: 0 0 20px #ccc;
}

.sidebar-portal-target {
    display: block;
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
