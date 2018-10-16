<template>
    <div>
        <top-bar-control icon="pencil-alt" tooltip="Recipe Summary Values" id="recipe-summary-values-popover"></top-bar-control>

        <b-popover target="recipe-summary-values-popover" placement="bottom">
            <b-row>
                <b-col>
                    <label class="sub-label">Serves</label>
                    <b-form-input type="text" v-model="serves" size="sm"></b-form-input>
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

                

                if (amount > 59)
                {

                    let hours = 0;

                    while(amount > 59)
                    {

                        amount = amount - 60;
                        hours++;

                    }

                    let total;
                    let unit = 'MIN';

                    if (amount == 0) // Complete Hours
                    {
                        
                        total = hours + ' hr';

                        this.$store.commit('setComponentProperty', { property: 'contentPreparation', value: total });
                        this.$store.commit('setComponentProperty', { property: 'unitPreparation', value: undefined });

                        console.log("Wetk");
                    }
                    else // Hour + Min
                    {
                        total = hours + ' hr ' + amount;

                        this.$store.commit('setComponentProperty', { property: 'contentPreparation', value: total });
                        this.$store.commit('setComponentProperty', { property: 'unitPreparation', value: unit });
                    }
                   
                    
                }
                else
                {
                    this.$store.commit('setComponentProperty', { property: 'contentPreparation', value: amount });
                    this.$store.commit('setComponentProperty', { property: 'unitPreparation', value: unit });
                }

            }
        },

        cooking: {
            get() {
                return this.$store.getters.getCurrentElement.contentCooking;
            },
            set (amount) {

                if (amount > 59)
                {

                    let hours = 0;
                    let unit = 'MIN';

                    while(amount > 59)
                    {

                        amount = amount - 60;
                        hours++;

                    }

                    let total;

                    if (amount == 0) // Complete Hours
                    {
                        
                        total = hours + ' hr';

                        this.$store.commit('setComponentProperty', { property: 'contentCooking', value: total });
                        this.$store.commit('setComponentProperty', { property: 'unitCooking', value: undefined });
                    }
                    else // Hour + Min
                    {
                        total = hours + ' hr ' + amount;

                        this.$store.commit('setComponentProperty', { property: 'contentCooking', value: total });
                        this.$store.commit('setComponentProperty', { property: 'unitCooking', value: unit });
                    }
                   
                }
                else
                {
                    this.$store.commit('setComponentProperty', { property: 'contentCooking', value: amount });
                    this.$store.commit('setComponentProperty', { property: 'unitCooking', value: unit });
                }

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

