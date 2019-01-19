<template>
    <b-modal @change="saveRecipe" :id="'recipeIngredientsModal'" title="Edit Recipe Ingredients" size="lg" ref="recipeIngredientsModal" hide-footer lazy>
        <!-- New Food Input -->
        <b-row>
            <b-col>
                <h5>Add Food to Recipe</h5>
            </b-col>
        </b-row>

        <b-row>
            <b-col cols="10">
                <b-form-input
                    type="text"
                    v-model="newFoodName"
                    id="foodInput"
                    placeholder="Food Name (e.g. Pastry)"
                    size="sm"
                    :state="foodInputState"
                ></b-form-input>

                <b-form-invalid-feedback id="foodInputFeedback">
                    Food name must be at least 2 characters long.
                </b-form-invalid-feedback>

                <hr>
            </b-col>

            <b-col cols="2">
                <b-btn variant="success" @click="addFood" size="sm">Add Food</b-btn>
            </b-col>
        </b-row>

        <!-- List of Foods and Ingredients -->
        <div v-for="(food, index) in foods" :key="index">
            <b-row>
                <b-col>
                    <h4>{{ food.name }}</h4>
                </b-col>
            </b-row>

            <b-row v-for="(ingredient, index) in food.ingredients" :key="index">
                <b-col cols="2" class="ingredient-input">
                    <b-form-input v-model="ingredient.amount" type="number" min="1" size="sm"></b-form-input>
                </b-col>

                <b-col cols="2" class="ingredient-input">
                    <b-form-select v-model="ingredient.measurement" :options="measurements" size="sm"></b-form-select>
                </b-col>

                <b-col cols="8" class="ingredient-input">
                    <b-form-input v-model="ingredient.name" type="text" placeholder="e.g. plain flour" size="sm"></b-form-input>
                </b-col>
            </b-row>

            <b-row>
                <b-col class="text-right">
                    <b-btn variant="success" @click="addIngredient(index)" size="sm">Add Ingredient to {{ food.name }}</b-btn>

                    <hr>
                </b-col>
            </b-row>
        </div>

         <b-row>
            <b-col>
                <h5>Cooks Notes</h5>
                <b-textarea rows="3" v-model="cooksNotes"></b-textarea>
            </b-col>
        </b-row>
    </b-modal>


</template>

<script>
export default {
    name: "RecipeIngredientsModal",

    computed: {
        foodInputState() {
            return this.newFoodName.length > 2 ? true : false
        }
    },

    data() {
        return {
            foods: [],

            newFoodName: '',
            measurements: ['', 'l', 'ml', 'g', 'mg'],
            cooksNotes: '',
        }
    },

    methods: {
        addFood() {
            if (this.foodInputState) {
                this.foods.push({
                    name: this.newFoodName,
                    ingredients: [
                        {
                            amount: 1,
                            measurement: 'g',
                            name: '',
                        }
                    ],
                });

                this.newFoodName = '';
            }
        },

        addIngredient(foodIndex) {
            this.foods[foodIndex].ingredients.push({
                amount: 1,
                measurement: 'g',
                name: '',
            });
        },

        saveRecipe() {
            this.$store.commit('setComponentProperty', {
                property: 'foods',
                value: this.foods,
            });

            this.$store.commit('setComponentProperty', {
                property: 'cooksNotes',
                value: this.cooksNotes,
            });
        },
    }
}
</script>

<style scoped>
.ingredient-input {
    margin-bottom: 5px;
}
</style>
