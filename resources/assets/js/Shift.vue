<template>
    <b-container fluid class="shift-container">
        <!-- Session Alert Message -->
        <b-alert :variant="sessionAlert.type" dismissible fade :show="sessionAlert.show" @dismissed="sessionAlert.show = false">
            {{ sessionAlert.message }}
        </b-alert>

        <!-- Overwrite Article Alert -->
        <b-alert show variant="warning" v-if="showArticleOverwriteAlert">
            <h4 class="alert-heading">Article already exists! Overwrite?</h4>
            <p>An article already exists with the title: {{ articleTitle }}</p>
            <p>Do you want to overwrite it?</p>

            <hr>

            <p class="mb-0">
                <b-btn variant="danger" @click="storeArticle(true)">Overwrite</b-btn>
                <b-btn variant="secondary" @click="showArticleOverwriteAlert = false">Cancel</b-btn>
            </p>
        </b-alert>

        <!-- Article Name -->
        <b-row>
            <b-col>
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

        <!-- Top Bar -->
        <b-row class="shift-top-bar">
            <b-col cols="10">
                <portal-target name="top-bar" class="top-bar-portal-target">
                    <!-- Top Bar settings will appear here. -->
                </portal-target>
            </b-col>

            <!-- Menu -->
            <b-col cols="2" class="text-right">
                <!-- Dropdown Menu -->
                <b-dropdown variant="success" size="sm" right>
                    <template slot="button-content">
                        <icon name="bars"></icon> Menu
                    </template>

                    <b-dropdown-item @click="addCanvas">
                        <icon name="palette"></icon> &nbsp; Add Canvas
                    </b-dropdown-item>

                    <b-dropdown-divider></b-dropdown-divider>

                    <b-dropdown-item v-b-modal.myImagesModal>
                        <icon name="images"></icon> &nbsp; My Images
                    </b-dropdown-item>

                    <b-dropdown-divider></b-dropdown-divider>

                    <b-dropdown-item @click="saveArticle">
                        <icon name="save"></icon> &nbsp; Save Article
                    </b-dropdown-item>

                    <b-dropdown-item v-b-modal.loadArticleModal>
                        <icon name="folder-open"></icon> &nbsp; Load Article
                    </b-dropdown-item>

                    <b-dropdown-divider></b-dropdown-divider>

                    <b-dropdown-item v-b-modal @click="previewArticleInNewWindow">
                        <icon name="eye"></icon> &nbsp; Preview Article
                    </b-dropdown-item>

                    <b-dropdown-item variant="warning" @click="showExportArticleModal">
                        <icon name="file-export"></icon> &nbsp; Export Article
                    </b-dropdown-item>
                </b-dropdown>
            </b-col>
        </b-row>

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

        <!-- Load Article Modal -->
        <load-article-modal></load-article-modal>

        <!-- My Images Modal -->
        <my-images-modal></my-images-modal>

        <!-- Image Gallery Modal -->
        <image-gallery-modal></image-gallery-modal>

        <!-- Export Article Modal -->
        <export-article-modal ref="exportArticleModal" :articleHtml="articleHtml"></export-article-modal>

    </b-container>
</template>

<script>
import ShiftArticle       from "./components/ShiftArticle";
import Canvas             from "./components/Canvas";
import AddComponentModal  from './components/dialogs/AddComponentModal';
import LoadArticleModal   from './components/dialogs/LoadArticleModal';
import MyImagesModal      from './components/dialogs/MyImagesModal';
import ImageGalleryModal  from './components/dialogs/ImageGalleryModal';
import ExportArticleModal from './components/dialogs/ExportArticleModal';

export default {
    name: "Shift",

    components: {
        ShiftArticle, Canvas, AddComponentModal, LoadArticleModal, MyImagesModal, ImageGalleryModal, ExportArticleModal
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
             return this.$store.getters.canvases
         },

        showSidebar() {
            return this.$store.getters.showSidebar
        },
    },

    data() {
        return {
            show: false,

            articleHtml: null,
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

        addCanvas() {
            this.$store.commit('addCanvas');
        },

        selectCanvas(canvasIndex) {
            this.$store.commit('selectCanvas', canvasIndex);
        },

        setSessionAlert(message, type) {
            this.sessionAlert = {
                show: true,
                message: message,
                type: type,
            };
        },

        checkArticleExistsWhenSaving (title) {
            return axios.post('/article/check-exists', {
                title: title,
            }).then(response => {
                return response.data;
            });
        },

        saveArticle() {
            const title = this.$store.getters.articleTitle;

            // Don't let users save an article that doesn't have a title.
            if (title === null || title === undefined) {
                window.scrollTo(0, 0);
                this.setSessionAlert('You must give your article a title first.', 'danger');

                return;
            }

            this.checkArticleExistsWhenSaving(title).then((response) => {
                if (response === true) {
                    this.showArticleOverwriteAlert = true;
                } else {
                    this.storeArticle(false);
                }
            });
        },

        storeArticle(overwrite) {
            const canvases = this.$store.getters.canvases;
            const title    = this.$store.getters.articleTitle;

            axios.post('/article/store', {
                title: title,
                article_json: canvases,
                overwrite: overwrite,
            })
            .then(response => {
                this.setSessionAlert('Article saved successfully!', 'success');
            })
            .catch(error => {
                this.setSessionAlert('Uh oh! Something went wrong saving your article.', 'danger');
            });

            window.scrollTo(0, 0);
            this.showArticleOverwriteAlert = false;
        },

        getArticleHtml() {
            this.articleHtml = this.$refs.shiftArticle.$el.innerHTML;
        },

        showExportArticleModal() {
            this.getArticleHtml();
            this.$refs.exportArticleModal.$children[0].show();
        },

        previewArticleInNewWindow() {
            this.getArticleHtml();

            const newWindow = window.open("", "Title", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,top="+(screen.height-400)+",left="+(screen.width-840));
            const normalize = document.createElement("link");
            const bootstrap = document.createElement("link");

            normalize.setAttribute("href", "https://unpkg.com/normalize.css@8.0.0/normalize.css");
            normalize.setAttribute("rel", "stylesheet");

            bootstrap.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css");
            bootstrap.setAttribute("rel", "stylesheet");

            newWindow.document.head.appendChild(normalize);
            newWindow.document.head.appendChild(bootstrap);
            newWindow.document.body.innerHTML = this.articleHtml;
        }
    },
};
</script>

<style scoped>
.shift-container {
    padding: 15px 20px;
}

.shift-article-name {
    padding: 10px;
    margin-bottom: 15px;
    color: #38c172;
}

.shift-article-name-input[type='text'] {
    padding: 30px 10px;
    margin-top: 5px;
    margin-bottom: 15px;
    background: none;
    color: #38c172;
    font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    font-size: 1.8rem;
    font-weight: 500;
    font-style: italic;
    line-height: 1.2;
    outline-width: 0;
}

.shift-article-name-input[type='text']:focus {
    outline: 0;
}

.shift-article-name:hover {
    cursor: pointer;
    color: gray;
    border-bottom: 1px dashed gray;
}

.shift-top-bar {
    padding: 5px;
    margin-bottom: 10px;
}

.shift-top-bar-sticky {
    margin: 0 0 20px 0;
    background: #fff;
    box-shadow: 0 0 20px #ccc;
}

.top-bar-portal-target {
    display: inline-flex;
}

.shift-workspace {
    height: fit-content;
    margin-bottom: 10px;
    padding: 0;
    box-shadow: 0 0 20px #ccc;
    overflow: hidden;
}

.shift-canvas:hover {
    cursor: pointer;
    border: 1px solid #38c172;
}

.shift-sidebar {
    background: #fff;
    box-shadow: 0 0 20px #ccc;
    padding: 5px 10px;
    top: 20px;
    margin-bottom: 25px;
}
</style>
