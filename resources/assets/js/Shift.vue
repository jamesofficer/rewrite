<template>
    <div>
        <b-container fluid class="top-bar-wrapper">
            <!-- Top Bar -->
            <b-row class="top-bar-styles">
                <b-col :cols="11">
                    <portal-target name="top-bar" class="top-bar-portal-target">
                        <!-- Top Bar settings will appear here. -->
                    </portal-target>
                </b-col>

                <!-- Menu -->
                <b-col :cols="1" class="text-right">
                    <shift-menu ref="menu"></shift-menu>
                </b-col>
            </b-row>
        </b-container>

        <b-container fluid class="shift-header-container">
            <!-- Notification Message -->
            <notification></notification>

            <!-- Article Name -->
            <article-title></article-title>
        </b-container>

        <b-container fluid>
            <!-- Main Workspace -->
            <div class="shift-workspace" ref="shiftArticle">
                <component v-for="(canvas, canvasIndex) in canvases"
                    :is="canvas.type"
                    :key="canvasIndex"
                    :canvasIndex="canvasIndex"
                    @click.native.stop="selectElement(canvasIndex)"
                    class="selectable-element"
                ></component>
            </div>

            <!-- Bottom Corner Minimap -->
            <!-- <minimap></minimap> -->
        </b-container>

        <div class="footer-logo-wrapper">
            <img src="/img/shift_logo_white.png" alt="Shift Logo" class="footer-logo">
            <p class="version-text">Alpha Version</p>
            <p class="contact-text">Found a bug? Have a feature request?</p>
            <p class="contact-text"><strong>writewithshift@gmail.com</strong></p>
        </div>

        <!-- Modal Windows -->
        <div>
            <!-- Add Component Modal -->
            <add-component-modal></add-component-modal>

            <!-- Edit Text Modal -->
            <edit-text-modal></edit-text-modal>

            <!-- Load Article Modal -->
            <load-article-modal></load-article-modal>

            <!-- My Images Modal -->
            <my-images-modal></my-images-modal>

            <!-- Image Gallery Modal -->
            <image-gallery-modal></image-gallery-modal>

            <!-- Export Article Modal -->
            <export-article-modal ref="exportArticleModal"></export-article-modal>

            <!-- Recipe Ingredients Modal -->
            <recipe-ingredients-modal></recipe-ingredients-modal>

            <!-- Background Gradient Modal -->
            <background-gradient-modal></background-gradient-modal>
        </div>
    </div>
</template>

<script>
import KeyBindings             from "./components/mixins/KeyBindings.js";

import ShiftMenu               from "./components/shift/ShiftMenu";
import ArticleTitle            from "./components/shift/ArticleTitle";
import Notification            from "./components/shift/Notification";
import Canvas                  from "./components/layout/Canvas";
import ShiftArticle            from "./components/shift/ShiftArticle";
import Minimap                 from "./components/shift/Minimap";

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
        KeyBindings, ShiftMenu, ArticleTitle, Minimap, Notification, Canvas, ShiftArticle,
        AddComponentModal, EditTextModal, LoadArticleModal, MyImagesModal,
        ImageGalleryModal, ExportArticleModal, RecipeIngredientsModal, BackgroundGradientModal,
    },

    mixins: [KeyBindings],

    computed: {
        canvases() {
            return this.$store.getters.canvases;
        },
    },

    methods: {
        selectElement(canvasIndex) {
            this.$store.commit('selectElement', { canvasIndex: canvasIndex });
        },
    },
};
</script>

<style scoped>
.shift-canvas {
    background: green !important;
    cursor: pointer;
}

.shift-canvas:hover {
    background: darkgreen !important;
}

.top-bar-wrapper {
    position: fixed;
    top: 0;
    z-index: 99;
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

.shift-header-container {
    margin-top: 75px;
    padding: 0 25px;
}

.shift-workspace {
    height: fit-content;
    margin: 5px 15px 30px 15px;
    padding: 0;
    box-shadow: 0 0 20px #ccc;
    overflow: hidden;
}

.footer-logo-wrapper {
    padding: 50px 0;
    text-align: center;
}

.footer-logo {
    filter: brightness(80%);
    width: 150px;
    margin: 0 auto;
}

.version-text {
    color: #bbb;
    margin-top: 20px;
    margin-bottom: 20px;
}

.contact-text {
    color: #bbb;
    font-size: 0.8em;
    margin: 0;
    padding: 0;
}
</style>
