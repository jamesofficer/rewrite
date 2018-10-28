<template>
    <b-modal id="addComponentModal" title="Add Component to Column" size="lg" hide-footer ref="addComponentModal">
        <b-tabs>
            <!-- Main Components -->
            <b-tab title="Main">
                <br>

                <div class="modal-card">
                    <b-card class="mb-2 text-center component-card"
                            @click="addComponent('Heading')"
                    >
                        <icon name="heading" scale="3.5"></icon>
                        <hr>
                        <p>Heading</p>
                    </b-card>
                </div>

                <div class="modal-card">
                    <b-card class="mb-2 text-center component-card"
                            @click="addComponent('Paragraph')"
                    >
                        <icon name="paragraph" scale="3.5"></icon>
                        <hr>
                        <p>Paragraph</p>
                    </b-card>
                </div>

                <div class="modal-card">
                    <b-card class="mb-2 text-center component-card"
                            @click="addComponent('BlockQuote')"
                    >
                        <icon name="quote-right" scale="3.5"></icon>
                        <hr>
                        <p>Quote</p>
                    </b-card>
                </div>

                <div class="modal-card">
                    <b-card class="mb-2 text-center component-card"
                            @click="addComponent('Picture')"
                    >
                        <icon name="image" scale="3.5"></icon>
                        <hr>
                        <p>Image</p>
                    </b-card>
                </div>

                <div class="modal-card">
                    <b-card class="mb-2 text-center component-card"
                            @click="addComponent('HorizontalLine')"
                    >
                        <icon name="minus-square" scale="3.5"></icon>
                        <hr>
                        <p>Horizontal Line</p>
                    </b-card>
                </div>
            </b-tab>

            <!-- Social Media Component -->
            <b-tab title="Social Media">
                <br>

                <div class="modal-card">
                    <b-card class="mb-2 text-center component-card"
                            @click="addComponent('InstagramEmbed')"
                    >
                        <icon name="brands/instagram" scale="3.5"></icon>
                        <hr>
                        <p>Instagram</p>
                    </b-card>
                </div>

                <div class="modal-card">
                    <b-card class="mb-2 text-center component-card"
                            @click="addComponent('FacebookEmbed')"
                    >
                        <icon name="brands/facebook" scale="3.5"></icon>
                        <hr>
                        <p>Facebook</p>
                    </b-card>
                </div>

                <div class="modal-card">
                    <b-card class="mb-2 text-center component-card"
                            @click="addComponent('YouTubeEmbed')"
                    >
                        <icon name="brands/youtube" scale="3.5"></icon>
                        <hr>
                        <p>YouTube</p>
                    </b-card>
                </div>
            </b-tab>
            
            <!-- Food Recipe Components -->
            <b-tab title="Food/Recipes">
                <br>

                <div class="modal-card">
                    <b-card class="mb-2 text-center component-card"
                            @click="addComponent('RecipeSummary')"
                    >
                        <icon name="stopwatch" scale="3.5"></icon>
                        <hr>
                        <p>Recipe Summary</p>
                    </b-card>
                </div>

                <div class="modal-card">
                    <b-card class="mb-2 text-center component-card"
                            @click="addComponent('RecipeIngredients')"
                    >
                        <icon name="utensils" scale="3.5"></icon>
                        <hr>
                        <p>Recipe Ingredients</p>
                    </b-card>
                </div>                
            </b-tab>
        </b-tabs>
    </b-modal>
</template>

<script>
import defaultInstagramEmbed   from '../../store/defaults/InstagramEmbed'
import defaultFacebookEmbed   from '../../store/defaults/FacebookEmbed'

export default {
    name: "AddComponentModal",

    methods: {
        addComponent(componentType) {
            this.$store.commit('addComponent', componentType);

            this.$refs.addComponentModal.hide();
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
    width: 135px;
    height: 175px;
}
</style>
