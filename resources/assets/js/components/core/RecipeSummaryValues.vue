<template>
    <div>
        <top-bar-control icon="pencil-alt" tooltip="Recipe Summary Values" id="recipe-summary-values-popover"></top-bar-control>

        <b-popover target="recipe-summary-values-popover" placement="bottom">
            <b-row>
                <b-col>
                    <label class="sub-label">Serves</label>
                    <b-form-input type="number" min="1" v-model="serves" size="sm"></b-form-input>
                </b-col>

                <b-col>
                    <label class="sub-label">Preparation (Min)</label>
                    <b-form-input type="number" v-model="preparation" size="sm"></b-form-input>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <label class="sub-label">Cooking (Min)</label>
                    <b-form-input type="number" v-model="cooking" size="sm"></b-form-input>
                </b-col>

                <b-col>
                    <label class="sub-label">Skill Level</label>
                    <b-form-select size="sm" v-model="difficulty" :options="difficulties"></b-form-select>
                </b-col>
            </b-row>
        </b-popover>
    </div>
</template>

<script>
import TopBarControl from '../topbar/TopBarControl';

export default {
    name: "RecipeSummaryValues",

    components: { TopBarControl },

    computed: {
        serves: {
            get() {
                return this.$store.getters.getCurrentElement.contentServes;
            },
            set (amount) {
                this.$store.commit('setComponentProperty', { property: 'contentServes', value: amount });
            }
        },

        preparation: {
            get() {
                return this.$store.getters.getCurrentElement.contentPreparation;
            },
            set (amount) {
                this.$store.commit('setComponentProperty', { property: 'contentPreparation', value: amount });
            }
        },

        cooking: {
            get() {
                return this.$store.getters.getCurrentElement.contentCooking;
            },
            set (amount) {
                this.$store.commit('setComponentProperty', { property: 'contentCooking', value: amount });
            }
        },

        difficulty: {
            get () {
                return this.$store.getters.getCurrentElement.contentDifficulty;
            },
            set (textValue) {
                this.$store.commit('setComponentProperty', { property: 'contentDifficulty', value: textValue });
            }
        },
    },

    data() {
        return {
            difficulties:
            [
                {
                    text: 'Easy',
                    value: 'EASY',
                },
                {
                    text: 'Middle',
                    value: 'MID',
                },
                {
                    text: 'Ace',
                    value: 'ACE',
                },
            ]
        }
    }
}
</script>

