<template>
    <b-row :class="{ 'selected-element': elementIsSelected }" :style="{
        marginTop: element.margin.top + 'px',
        marginRight: element.margin.right + 'px',
        marginBottom: element.margin.bottom + 'px',
        marginLeft: element.margin.left + 'px',
        paddingTop: element.padding.top + 'px',
        paddingRight: element.padding.right + 'px',
        paddingBottom: element.padding.bottom + 'px',
        paddingLeft: element.padding.left + 'px',
    }">

        <b-col :style="{
            color: 'rgba(' + element.textColor.r + ', ' + element.textColor.g + ', ' + element.textColor.b + ', ' + element.textColor.a + ')',
        }">

        <!-- Heading -->
            <h5 :style="{
                borderBottom: '1px solid rgba(' + element.textColor.r + ', ' + element.textColor.g + ', ' + element.textColor.b + ', ' + element.textColor.a + ')',
                fontFamily: element.fontFamily,
            }">
                Ingredients
            </h5>

                <!-- Column 1 -->
                <b-col :style="{
                            color: 'rgba(' + element.textColor.r + ', ' + element.textColor.g + ', ' + element.textColor.b + ', ' + element.textColor.a + ')',
                        }">
                            <b>80 ml</b>
                </b-col>

                        <!-- Column 2 -->
                <b-col :style="{
                            color: 'rgba(' + element.textColor.r + ', ' + element.textColor.g + ', ' + element.textColor.b + ', ' + element.textColor.a + ')',
                        }">

                        <p> (⅓ cup) ghee </p>

                </b-col>

                <!-- Cooks Notes -->

                <h6 :style="{
                fontFamily: element.fontFamily,
                opacity: 0.5
            }">
                Cooks Notes
            </h6>

            <p :style="{
                fontFamily: element.fontFamily,
                opacity: 0.5
            }">

            </p>





        </b-col>


        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-component-button></delete-component-button>

            <recipe-ingredients-button></recipe-ingredients-button>

            <margin></margin>

            <padding></padding>

            <text-color></text-color>

            <font-family></font-family>
        </top-bar>
    </b-row>
</template>

<script>
import GetElement from "./mixins/GetElement";

import TopBar from "./topbar/TopBar";
import DeleteComponentButton from "./topbar/DeleteComponentButton";
import RecipeIngredientsButton from "./topbar/RecipeIngredientsButton";

import Margin from "./core/Margin";
import Padding from "./core/Padding";
import TextColor from "./core/TextColor";
import FontFamily from "./core/FontFamily";

export default {
    name: "RecipeIngredients",

    mixins: [GetElement],

    components: {
    TopBar, DeleteComponentButton, RecipeIngredientsButton,
    Margin, Padding, TextColor, FontFamily
    }
};
</script>