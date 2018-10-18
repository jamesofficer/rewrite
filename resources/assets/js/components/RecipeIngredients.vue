<template>
    <div :class="{ 'selected-element': elementIsSelected }" :style="{
        marginTop: element.margin.top + 'px',
        marginRight: element.margin.right + 'px',
        marginBottom: element.margin.bottom + 'px',
        marginLeft: element.margin.left + 'px',
        paddingTop: element.padding.top + 'px',
        paddingRight: element.padding.right + 'px',
        paddingBottom: element.padding.bottom + 'px',
        paddingLeft: element.padding.left + 'px',
        color: 'rgba(' + element.textColor.r + ', ' + element.textColor.g + ', ' + element.textColor.b + ', ' + element.textColor.a + ')',
    }">

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
        <top-bar v-if="elementIsSelected">
            <delete-clone-move></delete-clone-move>

            <recipe-ingredients-button></recipe-ingredients-button>

            <margin></margin>

            <padding></padding>

            <text-color></text-color>

            <font-family></font-family>
        </top-bar>

    </div>
</template>

<script>
import GetElement from "./mixins/GetElement";

import TopBar                  from "./topbar/TopBar";
import DeleteCloneMove         from "./topbar/DeleteCloneMove";
import DeleteComponentButton   from "./topbar/DeleteComponent";
import RecipeIngredientsButton from "./topbar/RecipeIngredientsButton";

import Margin     from "./core/Margin";
import Padding    from "./core/Padding";
import TextColor  from "./core/TextColor";
import FontFamily from "./core/FontFamily";

export default {
    name: "RecipeIngredients",

    mixins: [GetElement],

    components: {
        TopBar, DeleteCloneMove, DeleteComponentButton, RecipeIngredientsButton,
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
