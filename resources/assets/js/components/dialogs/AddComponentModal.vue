<template>
    <b-modal id="addComponentModal" title="Add Component to Column" size="lg" hide-footer v-model="showModal">
        <div class="modal-card">
            <b-card class="mb-2 text-center component-card"
                    @click="addComponent('Heading')"
            >
                <icon name="heading" scale="4"></icon>
                <hr>
                <p>Heading</p>
            </b-card>
        </div>

        <div class="modal-card">
            <b-card class="mb-2 text-center component-card"
                    @click="addComponent('Paragraph')"
            >
                <icon name="paragraph" scale="4"></icon>
                <hr>
                <p>Paragraph</p>
            </b-card>
        </div>

        <div class="modal-card">
            <b-card class="mb-2 text-center component-card"
                    @click="addComponent('BlockQuote')"
            >
                <icon name="quote-right" scale="4"></icon>
                <hr>
                <p>BlockQuote</p>
            </b-card>
        </div>

        <div class="modal-card">
            <b-card class="mb-2 text-center component-card"
                    @click="addComponent('Picture')"
            >
                <icon name="image" scale="4"></icon>
                <hr>
                <p>Image</p>
            </b-card>
        </div>

        <div class="modal-card">
            <b-card class="mb-2 text-center component-card"
                    @click="addComponent('InstagramEmbed')"
            >
                <icon name="brands/instagram" scale="4"></icon>
                <hr>
                <p>Instagram</p>
            </b-card>
        </div>

        <div class="modal-card">
            <b-card class="mb-2 text-center component-card"
                    @click="addComponent('FacebookEmbed')"
            >
                <icon name="brands/facebook" scale="4"></icon>
                <hr>
                <p>Facebook</p>
            </b-card>
        </div>

        <div class="modal-card">
            <b-card class="mb-2 text-center component-card"
                    @click="addComponent('YouTubeEmbed')"
            >
                <icon name="brands/youtube" scale="4"></icon>
                <hr>
                <p>YouTube</p>
            </b-card>
        </div>

        <div class="modal-card">
            <b-card class="mb-2 text-center component-card"
                    @click="addComponent('RecipeSummary')"
            >
                <icon name="brands/youtube" scale="4"></icon>
                <hr>
                <p>RecipeSummary</p>
            </b-card>
        </div>

    </b-modal>
</template>

<script>
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

.component-card {
    width: 150px;
    height: 175px;
}
</style>
