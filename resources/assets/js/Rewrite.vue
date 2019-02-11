<template>
    <div>
        <!-- TopBar -->
        <div id="top-bar">
            <b-container fluid>
                <b-row>
                    <b-col cols="8">
                        <global-styles-switch></global-styles-switch>

                        <portal-target name="sidebar" style="display: inline"></portal-target>
                    </b-col>

                    <b-col cols="4" class="text-right">
                        <device-size-controls></device-size-controls>

                        <menu-button></menu-button>
                    </b-col>
                </b-row>
            </b-container>
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

                <rewrite-footer></rewrite-footer>
            </div>

            <div class="fixed-footer">
                <element-styles-panel></element-styles-panel>

                <minimap></minimap>

                <new-minimap></new-minimap>

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

            <font-select-modal></font-select-modal>
        </div>
    </div>
</template>

<script>
import KeyBindings             from './components/mixins/KeyBindings.js';

import MenuButton              from './components/rewrite/MenuButton';
import GlobalStylesSwitch      from './components/rewrite/GlobalStylesSwitch';
import DeviceSizeControls      from './components/rewrite/DeviceSizeControls';
import ArticleTitle            from './components/rewrite/ArticleTitle';
import Notification            from './components/rewrite/Notification';
import RewriteFooter           from './components/rewrite/RewriteFooter';
import Canvas                  from './components/rewrite/Canvas';

import Minimap                 from './components/panels/Minimap';
import ColorPickerPanel        from './components/panels/ColorPickerPanel';
import ElementStylesPanel      from './components/panels/ElementStylesPanel';

import MenuModal               from './components/dialogs/MenuModal';
import AddComponentModal       from './components/dialogs/AddComponentModal';
import EditTextModal           from './components/dialogs/EditTextModal';
import LoadArticleModal        from './components/dialogs/LoadArticleModal';
import MyImagesModal           from './components/dialogs/MyImagesModal';
import ImageGalleryModal       from './components/dialogs/ImageGalleryModal';
import ExportArticleModal      from './components/dialogs/ExportArticleModal';
import RecipeIngredientsModal  from './components/dialogs/RecipeIngredientsModal';
import BackgroundGradientModal from './components/dialogs/BackgroundGradientModal';
import FontSelectModal         from './components/dialogs/FontSelectModal';

export default {
    name: "Shift",

    components: {
        KeyBindings,
        MenuButton, RewriteFooter, GlobalStylesSwitch, ArticleTitle, DeviceSizeControls, Minimap,
        ColorPickerPanel, ElementStylesPanel, Notification, Canvas,
        AddComponentModal, EditTextModal, MenuModal, LoadArticleModal, MyImagesModal, ImageGalleryModal,
        ExportArticleModal, RecipeIngredientsModal, BackgroundGradientModal, FontSelectModal
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
#top-bar {
    position: fixed;
    width: 100%;
    padding: 8px 10px;
    background: #222;
    z-index: 100;
}

.article-name-container {
    margin: 0 auto;
    padding-top: 75px;
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
