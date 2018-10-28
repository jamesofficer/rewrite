<template>
    <div :class="{ 'selected-element': elementIsSelected }" :style="getElementStyles">
        <b-row>

            <!-- Serves -->
            <b-col>
                <h5 :style="{
                    borderBottom: '1px solid rgba(' + this.element.textColor.r + ', ' + this.element.textColor.g + ', ' + this.element.textColor.b + ', ' + this.element.textColor.a + ')',
                    fontFamily: this.element.fontFamily,
                    fontWeight: 400,
                }">
                    SERVES
                </h5>

                <p :style="{
                    fontFamily: this.element.fontFamily,
                    fontSize: '2em',
                    fontWeight: 700,
                    marginBottom: 0,
                }">
                    {{ element.contentServes }}
                </p>
            </b-col>

            <!-- Preparation Time -->
            <b-col>
                <h5 :style="{
                    borderBottom: '1px solid rgba(' + this.element.textColor.r + ', ' + this.element.textColor.g + ', ' + this.element.textColor.b + ', ' + this.element.textColor.a + ')',
                    fontFamily: this.element.fontFamily,
                    fontWeight: 400,
                }">
                    PREPARATION
                </h5>

                <p :style="{
                    fontFamily: this.element.fontFamily,
                    fontSize: '2em',
                    fontWeight: 700,
                    marginBottom: 0,
                }">
                    {{ element.contentPreparation }}
                </p>

                <p :style="{
                    fontFamily: this.element.fontFamily,
                    fontWeight: 400,
                    marginBottom: 0,
                }">
                    MIN
                </p>
            </b-col>

            <!-- Cooking Time -->
            <b-col>
                <h5 :style="{
                    borderBottom: '1px solid rgba(' + this.element.textColor.r + ', ' + this.element.textColor.g + ', ' + this.element.textColor.b + ', ' + this.element.textColor.a + ')',
                    fontFamily: this.element.fontFamily,
                    fontWeight: 400,
                }">COOKING</h5>

                <p :style="{
                    fontFamily: this.element.fontFamily,
                    fontSize: '2em',
                    fontWeight: 700,
                    marginBottom: 0,
                }">
                    {{ element.contentCooking }}
                </p>

                <p :style="{
                    fontFamily: this.element.fontFamily,
                    fontWeight: 400,
                    marginBottom: 0,
                }">
                    MIN
                </p>
            </b-col>

            <!-- Skill Level -->
            <b-col>
                <h5 :style="{
                    borderBottom: '1px solid rgba(' + this.element.textColor.r + ', ' + this.element.textColor.g + ', ' + this.element.textColor.b + ', ' + this.element.textColor.a + ')',
                    fontFamily: this.element.fontFamily,
                    fontWeight: 400,
                }">
                    SKILL LEVEL
                </h5>

                <p :style="{
                    fontFamily: this.element.fontFamily,
                    fontSize: '2em',
                    fontWeight: 700,
                    marginBottom: 0,
                }">
                    {{ element.contentDifficulty }}
                </p>
            </b-col>
        </b-row>


        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-clone-move-element></delete-clone-move-element>

            <recipe-summary-values></recipe-summary-values>

            <margin></margin>

            <padding></padding>

            <text-color></text-color>

            <font-family></font-family>

            <width></width>
        </top-bar>
    </div>
</template>

<script>
import GetElement        from './mixins/GetElement'

import TopBar            from './topbar/TopBar'
import DeleteCloneMoveElement   from './topbar/DeleteCloneMoveElement'

import Margin              from './core/Margin'
import Padding             from './core/Padding'
import TextColor           from './core/TextColor'
import FontFamily          from './core/FontFamily'
import RecipeSummaryValues from './core/RecipeSummaryValues'
import Width               from './core/Width'

export default {
    name: "RecipeSummary",

    mixins: [GetElement],

    components: {
        TopBar, DeleteCloneMoveElement,
        RecipeSummaryValues, Margin, Padding, TextColor, FontFamily, Width
    },
}
</script>