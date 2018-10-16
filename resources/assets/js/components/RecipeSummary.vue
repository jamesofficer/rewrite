<template>
    <div>
        <b-row :class="{ 'selected-element': elementIsSelected }" :style="{
            margin: element.margin.top + 'px ' + element.margin.right + 'px ' + element.margin.bottom + 'px ' + element.margin.left + 'px',
            padding: element.padding.top + 'px ' + element.padding.right + 'px ' + element.padding.bottom + 'px ' + element.padding.left + 'px',
        }">

            <!-- Serves -->
            <b-col :style="{
                color: 'rgba(' + element.textColor.r + ', ' + element.textColor.g + ', ' + element.textColor.b + ', ' + element.textColor.a + ')',
            }">
                <h5 :style="{
                    borderBottom: '1px solid rgba(' + element.textColor.r + ', ' + element.textColor.g + ', ' + element.textColor.b + ', ' + element.textColor.a + ')',
                    fontFamily: element.fontFamily,
                }">
                    SERVES
                </h5>

                <p :style="{
                    fontFamily: element.fontFamily,
                    marginBottom: 0,
                }">
                    <strong style="font-size: 2em; padding: 0;">{{ element.contentServes }}</strong>
                </p>
            </b-col>

            <!-- Preparation Time -->
            <b-col :style="{
                color: 'rgba(' + element.textColor.r + ', ' + element.textColor.g + ', ' + element.textColor.b + ', ' + element.textColor.a + ')',
            }">
                <h5 :style="{
                    borderBottom: '1px solid rgba(' + element.textColor.r + ', ' + element.textColor.g + ', ' + element.textColor.b + ', ' + element.textColor.a + ')',
                    fontFamily: element.fontFamily,
                }">
                    PREPARATION
                </h5>

                <p :style="{
                    fontFamily: element.fontFamily,
                    marginBottom: 0,
                }">
                    <strong style="font-size: 2em;">{{ element.contentPreparation }}</strong>
                </p>

                <p :style="{
                    fontFamily: element.fontFamily,
                    marginBottom: 0,
                }">
                    {{ element.unitPreparation }}
                </p>
            </b-col>

            <!-- Cooking Time -->
            <b-col :style="{
                color: 'rgba(' + element.textColor.r + ', ' + element.textColor.g + ', ' + element.textColor.b + ', ' + element.textColor.a + ')',
            }">
                <h5 :style="{
                    borderBottom: '1px solid rgba(' + element.textColor.r + ', ' + element.textColor.g + ', ' + element.textColor.b + ', ' + element.textColor.a + ')',
                    fontFamily: element.fontFamily,
                }">
                    COOKING
                </h5>

                <p :style="{
                    fontFamily: element.fontFamily,
                    marginBottom: 0,
                }">
                    <strong style="font-size: 2em; padding: 0;">{{ element.contentCooking }}</strong>
                </p>

                <p :style="{
                    fontFamily: element.fontFamily,
                    marginBottom: 0,
                }">
                    {{ element.unitCooking }}
                </p>
            </b-col>

            <!-- Skill Level -->
            <b-col :style="{
                color: 'rgba(' + element.textColor.r + ', ' + element.textColor.g + ', ' + element.textColor.b + ', ' + element.textColor.a + ')',
            }">
                <h5 :style="{
                    borderBottom: '1px solid rgba(' + element.textColor.r + ', ' + element.textColor.g + ', ' + element.textColor.b + ', ' + element.textColor.a + ')',
                    fontFamily: element.fontFamily,
                }">
                    SKILL LEVEL
                </h5>

                <p :style="{
                    fontFamily: element.fontFamily,
                    marginBottom: 0,
                }">
                    <strong style="font-size: 2em; padding: 0;">{{ element.contentDifficulty }}</strong>
                </p>
            </b-col>
        </b-row>


        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-clone-move></delete-clone-move>

            <recipe-summary-values></recipe-summary-values>

            <margin></margin>

            <padding></padding>

            <text-color></text-color>

            <font-family></font-family>
        </top-bar>
    </div>
</template>

<script>
import GetElement        from './mixins/GetElement'

import TopBar            from './topbar/TopBar'
import DeleteCloneMove   from './topbar/DeleteCloneMove'

import Margin               from './core/Margin'
import Padding              from './core/Padding'
import TextColor            from './core/TextColor'
import FontFamily           from './core/FontFamily'
import RecipeSummaryValues  from './core/RecipeSummaryValues'

export default {
    name: "RecipeSummary",

    mixins: [GetElement],

    components: {
        TopBar, DeleteCloneMove,
        RecipeSummaryValues, Margin, Padding, TextColor, FontFamily,
    },
}
</script>