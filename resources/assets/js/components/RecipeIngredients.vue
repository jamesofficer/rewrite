<template>
    <div :class="{ 'selected-element': elementIsSelected }" :style="getElementStyles">

        <!-- Ingredients Heading -->
        <b-row>
            <b-col>
                <!-- Heading -->
                <h5 :style="{
                    borderBottom: '3px solid rgba(' + element.textColor.r + ', ' + element.textColor.g + ', ' + element.textColor.b + ', ' + element.textColor.a + ')',
                    fontFamily: element.fontFamily,
                    fontSize: '1.5em',
                }">
                    Ingredients
                </h5>

                <p v-if="element.foods.length === 0">
                    Please add some ingredients! 🍑 🍔 🥐
                </p>
            </b-col>
        </b-row>

        <!-- Ingredients Table -->
        <div v-for="(food, index) in element.foods" :key="index">
            <b-row>
                <b-col>
                    <h5 class="food-name">{{ food.name }}</h5>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <b-table :fields="fields" :items="food.ingredients" small fixed thead-class="hidden-header">
                        <template slot="measurement" slot-scope="data">
                            {{ data.item.amount }}{{ data.item.measurement }}
                        </template>
                    </b-table>
                </b-col>
            </b-row>
        </div>

        <!-- Cook Notes -->
        <b-row v-if="element.cooksNotes">
            <b-col>
                <hr>
                <h6 class="cooks-notes-text">Cook's Notes</h6>
                <p class="cooks-notes-text">{{ element.cooksNotes }}</p>
            </b-col>
        </b-row>

        <!-- TOP BAR -->
        <sidebar v-if="elementIsSelected">
            <delete-clone-move-element></delete-clone-move-element>

            <recipe-ingredients-button></recipe-ingredients-button>

            <margin></margin>

            <padding></padding>

            <text-color></text-color>

            <font-family></font-family>
        </sidebar>

    </div>
</template>

<script>
import GetElement from "./mixins/GetElement";

import Sidebar                  from "./topbar/Topbar";
import DeleteCloneMoveElement  from "./topbar/DeleteCloneMoveElement";
import RecipeIngredientsButton from "./topbar/RecipeIngredientsButton";

import Margin     from "./core/Margin";
import Padding    from "./core/Padding";
import TextColor  from "./core/TextColor";
import FontFamily from "./core/FontFamily";

export default {
    name: "RecipeIngredients",

    mixins: [GetElement],

    components: {
        Sidebar, DeleteCloneMoveElement, RecipeIngredientsButton,
        Margin, Padding, TextColor, FontFamily
    },

    data() {
        return {
            fields: [
                'measurement',
                'name',
            ],
        }
    },
};
</script>

<style scoped>
.food-name {
    padding: 5px 0;
    color: #666666;
}

.cooks-notes-text {
    color: #666666;
}
</style>
