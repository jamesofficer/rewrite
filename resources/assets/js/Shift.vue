<template>
    <div>
        <b-container fluid class="top-bar-wrapper">
            <!-- Top Bar -->
            <b-row class="top-bar-styles">
                <b-col :cols="10">
                    <portal-target name="top-bar" class="top-bar-portal-target">
                        <!-- Top Bar settings will appear here. -->
                    </portal-target>
                </b-col>

                <!-- Menu -->
                <b-col :cols="2" class="text-right">
                    <shift-menu ref="menu"></shift-menu>
                </b-col>
            </b-row>
        </b-container>

        <b-container fluid class="shift-header-container">
            <!-- Session Alert Message -->
            <b-row class="session-alert-message">
                <b-col>
                    <b-alert :variant="sessionAlert.type" dismissible fade :show="sessionAlert.show" @dismissed="sessionAlert.show = false">
                        {{ sessionAlert.message }}
                    </b-alert>
                </b-col>
            </b-row>

            <!-- Overwrite Article Alert -->
            <b-row>
                <b-col>
                    <b-alert show variant="warning" v-if="showArticleOverwriteAlert">
                        <h4 class="alert-heading">Article already exists! Overwrite?</h4>
                        <p>An article already exists with the title: {{ articleTitle }}</p>
                        <p>Do you want to overwrite it?</p>

                        <hr>

                        <p class="mb-0">
                            <b-btn variant="danger" @click="overwriteArticle">Overwrite</b-btn>
                            <b-btn variant="secondary" @click="showArticleOverwriteAlert = false">Cancel</b-btn>
                        </p>
                    </b-alert>
                </b-col>
            </b-row>

            <!-- Article Name -->
            <b-row class="article-name-container">
                <b-col>
                    <h6 class="article-name-label">Article Name</h6>

                    <em v-if="! settingArticleTitle">
                        <h2 class="shift-article-name" @click="setArticleTitle">{{ articleTitle }}</h2>
                    </em>

                    <b-input v-else
                        size="lg"
                        v-model="articleTitle"
                        @blur.native="settingArticleTitle = false"
                        ref="articleTitleInput"
                        class="shift-article-name-input"
                    ></b-input>
                </b-col>
            </b-row>
        </b-container>

        <b-container fluid>
            <!-- Main Workspace -->
            <b-row>
                <b-col col>
                    <div class="shift-workspace">
                        <b-container fluid>
                            <shift-article ref="shiftArticle">
                                <component v-for="(canvas, canvasIndex) in canvases"
                                    v-bind:is="canvas.type"
                                    v-bind:key="canvasIndex"
                                    :canvasIndex="canvasIndex"
                                    @click.native.stop="selectCanvas(canvasIndex)"
                                    class="shift-canvas"
                                ></component>
                            </shift-article>
                        </b-container>
                    </div>
                </b-col>
            </b-row>

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
        </b-container>

        <div class="footer-logo-wrapper">
            <img src="/img/shift_logo_white.png" alt="Shift Logo" class="footer-logo">
            <p class="version-text">Alpha Version</p>
            <p class="contact-text">Found a bug? Have a feature request?</p>
            <p class="contact-text"><strong>writewithshift@gmail.com</strong></p>
        </div>
    </div>
</template>

<script>
import ShiftMenu               from "./components/ShiftMenu";
import Canvas                  from "./components/Canvas";
import ShiftArticle            from "./components/ShiftArticle";
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
        ShiftMenu, Canvas, ShiftArticle,
        AddComponentModal, EditTextModal, LoadArticleModal, MyImagesModal,
        ImageGalleryModal, ExportArticleModal, RecipeIngredientsModal, BackgroundGradientModal,
    },

    computed: {
        articleTitle: {
            get () {
                const articleTitle = this.$store.getters.articleTitle;

                return articleTitle === null ? "Untitled article..." : articleTitle;
            },
            set (value) {
                this.$store.commit('updateArticleTitle', value);
            }
        },

        canvases() {
             return this.$store.getters.canvases;
         },
    },

    data() {
        return {
            show: false,

            settingArticleTitle: false,
            showArticleOverwriteAlert: false,

            sessionAlert: {
                show: false,
                message: '',
                type: 'success',
            },
        }
    },

    methods: {
        setArticleTitle() {
            this.settingArticleTitle = true;

            // We can't focus the input until it has rendered on the next tick.
            this.$nextTick(function() {
                let input = document.querySelector('.shift-article-name-input');
                let strLength = input.value.length;

                input.focus();
                input.setSelectionRange(strLength, strLength);
            });
        },

        selectCanvas(canvasIndex) {
            this.$store.commit('selectCanvas', canvasIndex);
        },

        overwriteArticle() {
            this.$refs.menu.storeArticle(true);
        },
    },
};
</script>

<style scoped>
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
}

.session-alert-message {
    margin-top: 15px;
}

.article-name-container {
    margin: 20px 0;
    padding: 0 10px;
}

.article-name-label {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 0.8em;
    color: #aaa;
}

.shift-article-name {
    padding-bottom: 10px;
    color: #38c172;
    font-family: "Muli", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}

.shift-article-name-input[type='text'] {
    margin: 20px 0 30px 0;
    padding: 15px;
    background: none;
    color: #38c172;
    font-family: "Muli", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    font-size: 1.8rem;
    font-weight: 500;
    font-style: italic;
    line-height: 1.2;
}

.shift-article-name-input[type='text']:focus {
    outline: 0;
}

.shift-article-name:hover {
    cursor: pointer;
    color: gray;
    border-bottom: 1px dashed gray;
}

.shift-workspace {
    height: fit-content;
    margin: 5px 15px 30px 15px;
    padding: 0;
    box-shadow: 0 0 20px #ccc;
    overflow: hidden;
}

.shift-canvas:hover {
    cursor: pointer;
    border: 1px solid #38c172;
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
