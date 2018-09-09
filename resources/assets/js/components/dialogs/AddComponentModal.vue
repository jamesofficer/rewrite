<template>
    <b-modal id="addComponentModal" title="Add Component to Column" size="lg" hide-footer v-model="showModal">
        <div class="modal-card">
            <b-card title="Heading"
                    img-src="../img/heading_component_icon.png"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 10rem;"
                    class="mb-2 text-center"
                    @click="addComponent('Heading')"
            ></b-card>
        </div>

        <div class="modal-card">
            <b-card title="Paragraph"
                    img-src="../img/paragraph_component_icon.png"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 10rem;"
                    class="mb-2 text-center"
                    @click="addComponent('Paragraph')"
            ></b-card>
        </div>

        <div class="modal-card">
            <b-card title="Quote"
                    img-src="../img/blockquote_component_icon.png"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 10rem;"
                    class="mb-2 text-center"
                    @click="addComponent('BlockQuote')"
            ></b-card>
        </div>

        <div class="modal-card">
            <b-card title="Image"
                    img-src="../img/image_component_icon.png"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 10rem;"
                    class="mb-2 text-center"
                    @click="addComponent('Picture')"
            ></b-card>
        </div>

        <div class="modal-card">
            <b-card title="Instagram Embed"
                    img-src="../img/instagram-embed_component_icon.png"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 10rem;"
                    class="mb-2 text-center"
                    @click="addComponent('InstagramEmbed')"
            ></b-card>
        </div>

        <div class="modal-card">
            <b-card title="Facebook Embed"
                    img-src="../img/facebook-embed_component_icon.png"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 10rem;"
                    class="mb-2 text-center"
                    @click="addComponent('FacebookEmbed')"
            ></b-card>
        </div>

        <div class="modal-card">
            <b-card title="Youtube Embed"
                    img-src="../img/youtube-embed_component_icon.png"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 10rem;"
                    class="mb-2 text-center"
                    @click="addComponent('YouTubeEmbed')"
            ></b-card>
        </div>

    </b-modal>
</template>

<script>
import { duplicateObject } from '../../store/helpers'
import defaultHeading      from '../../store/defaults/Heading'
import defaultParagraph    from '../../store/defaults/Paragraph'
import defaultBlockQuote   from '../../store/defaults/BlockQuote'
import defaultInstagramEmbed   from '../../store/defaults/InstagramEmbed'
import defaultFacebookEmbed   from '../../store/defaults/FacebookEmbed'

export default {
    name: "AddComponentModal",

    computed: {
        showModal: {
            get() {
                return this.$store.getters.showAddComponentModal;
            },

            set(toggle) {
                this.$store.commit('toggleAddComponentModal', toggle);
            }
        }
    },

    methods: {
        addComponent(componentType) {
            this.$store.commit('toggleAddComponentModal', false);
            this.$store.commit('addComponentToColumn', componentType);
        }
    },
};
</script>

<style scoped>
.modal-card {
    display: inline-flex;
    margin: 0 5px;
}

.card:hover {
    cursor: pointer;
    background: #38c172;
}

.card-img-top {
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
</style>
