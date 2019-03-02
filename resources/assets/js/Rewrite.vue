<template>
    <div style="height: 100%">
        <!-- TopBar -->
        <div id="top-bar">
            <div id="top-bar-left">
                <global-styles-switch></global-styles-switch>

                <portal-target name="topbar"></portal-target>
            </div>

            <div id="top-bar-center">
                <device-size-controls></device-size-controls>
            </div>

            <div id="top-bar-right">
                <menu-button></menu-button>
            </div>
        </div>

        <div id="sidebar-container">
            <div id="sidebar">
                <element-styles-panel></element-styles-panel>

                <minimap></minimap>

                <color-picker-panel></color-picker-panel>
            </div>
        </div>

        <div id="rewrite-container">
            <div id="rewrite-article-container">
                <!-- Main Content Area -->
                <div id="rewrite-content-area">
                    <!-- <notification></notification> -->
                    <!-- Article Name -->
                    <!-- <div
                        class="article-name-container"
                        :class="{
                            'sm-device-size': getDeviceSize === 'sm',
                            'md-device-size': getDeviceSize === 'md',
                            'lg-device-size': getDeviceSize === 'lg',
                            'xl-device-size': getDeviceSize === 'xl',
                        }"
                    >
                        <article-title></article-title>
                    </div>-->
                    <!-- Main Workspace -->
                    <div
                        ref="rewriteArticle"
                        id="rewrite-workspace"
                        :class="{
                            'sm-device-size': getDeviceSize === 'sm',
                            'md-device-size': getDeviceSize === 'md',
                            'lg-device-size': getDeviceSize === 'lg',
                            'xl-device-size': getDeviceSize === 'xl',
                        }"
                    >
                        <canvas
                            v-for="(canvas, canvasIndex) in canvases"
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
    </div>
</template>

<script>
import KeyBindings from "./components/mixins/KeyBindings.js";

import GridCreatorButton from "./components/topbar/GridCreatorButton";
import MenuButton from "./components/rewrite/MenuButton";
import GlobalStylesSwitch from "./components/rewrite/GlobalStylesSwitch";
import DeviceSizeControls from "./components/rewrite/DeviceSizeControls";
import ArticleTitle from "./components/rewrite/ArticleTitle";
import Notification from "./components/rewrite/Notification";
import RewriteFooter from "./components/rewrite/RewriteFooter";
import Canvas from "./components/rewrite/Canvas";

import Minimap from "./components/panels/Minimap";
import ColorPickerPanel from "./components/panels/ColorPickerPanel";
import ElementStylesPanel from "./components/panels/ElementStylesPanel";

import GridCreator from "./components/dialogs/GridCreator";
import MenuModal from "./components/dialogs/MenuModal";
import AddComponentModal from "./components/dialogs/AddComponentModal";
import EditTextModal from "./components/dialogs/EditTextModal";
import LoadArticleModal from "./components/dialogs/LoadArticleModal";
import MyImagesModal from "./components/dialogs/MyImagesModal";
import ImageGalleryModal from "./components/dialogs/ImageGalleryModal";
import ExportArticleModal from "./components/dialogs/ExportArticleModal";
import RecipeIngredientsModal from "./components/dialogs/RecipeIngredientsModal";
import BackgroundGradientModal from "./components/dialogs/BackgroundGradientModal";
import FontSelectModal from "./components/dialogs/FontSelectModal";

export default {
    name: "Rewrite",

    components: {
        KeyBindings,
        GridCreatorButton,
        MenuButton,
        RewriteFooter,
        GlobalStylesSwitch,
        ArticleTitle,
        DeviceSizeControls,
        Minimap,
        ColorPickerPanel,
        ElementStylesPanel,
        Notification,
        Canvas,
        GridCreator,
        AddComponentModal,
        EditTextModal,
        MenuModal,
        LoadArticleModal,
        MyImagesModal,
        ImageGalleryModal,
        ExportArticleModal,
        RecipeIngredientsModal,
        BackgroundGradientModal,
        FontSelectModal,
    },

    mixins: [KeyBindings],

    computed: {
        canvases() {
            return this.$store.getters.canvases;
        },

        getDeviceSize() {
            return this.$store.getters.deviceSize;
        },
    },

    methods: {
        selectElement(canvasIndex) {
            this.$store.commit("selectElement", { canvasIndex: canvasIndex });
        },
    },

    mounted() {
        this.$root.$emit("bv::show::modal", "createGridModal");
    },
};
</script>

<style lang="scss" scoped>
#top-bar {
    position: fixed;
    display: grid;
    grid-template-columns: 3fr 1fr 3fr;
    align-items: center;
    width: 100%;
    padding: 8px 10px;
    background: #333;
    z-index: 100;
}

#top-bar-right {
    display: inline;
}

#top-bar-center {
    justify-self: center;
}

#top-bar-right {
    justify-self: end;
}

#rewrite-container {
    position: relative;
    // left: 325px;

    #rewrite-article-container {
        display: grid;
        align-items: center;
        justify-items: center;
    }
}

#sidebar-container {
    position: fixed;
    width: 325px;
    z-index: 10;

    #sidebar {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 3fr 2fr;
        background: #333;
        margin-top: 56px;
    }
}

.article-name-container {
    margin: 0 auto;
    padding-top: 75px;
}

#rewrite-article-container {
    display: flex;
    align-items: stretch;
    padding: 25px;
}

#rewrite-content-area {
    width: 100%;
}

#rewrite-workspace {
    height: fit-content;
    margin-top: 40px;
    padding: 0;
    box-shadow: 0 0 20px #ccc;
    overflow: hidden;
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
