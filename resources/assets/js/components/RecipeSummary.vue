<template>
    <div>
        <b-row :class="{ 'selected-element': elementIsSelected }" :style="getElementStyles">

            <!-- Serves -->
            <b-col>
                <h5 :style="headingStyles">SERVES</h5>

                <p :style="adjustableValueStyles">{{ element.contentServes }}</p>
            </b-col>

            <!-- Preparation Time -->
            <b-col>
                <h5 :style="headingStyles">PREPARATION</h5>

                <p :style="adjustableValueStyles">{{ element.contentPreparation }}</p>

                <p :style="{ fontFamily: element.fontFamily }">MIN</p>
            </b-col>

            <!-- Cooking Time -->
            <b-col>
                <h5 :style="headingStyles">COOKING</h5>

                <p :style="adjustableValueStyles">{{ element.contentCooking }}</p>

                <p :style="{ fontFamily: element.fontFamily }">MIN</p>
            </b-col>

            <!-- Skill Level -->
            <b-col>
                <h5 :style="headingStyles">SKILL LEVEL</h5>

                <p :style="adjustableValueStyles">{{ element.contentDifficulty }}</p>
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

            <width></width>
        </top-bar>
    </div>
</template>

<script>
import GetElement        from './mixins/GetElement'

import TopBar            from './topbar/TopBar'
import DeleteCloneMove   from './topbar/DeleteCloneMove'

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
        TopBar, DeleteCloneMove,
        RecipeSummaryValues, Margin, Padding, TextColor, FontFamily, Width
    },

    computed: {
        headingStyles() {
            return {
                borderBottom: '1px solid rgba(' + this.element.textColor.r + ', ' + this.element.textColor.g + ', ' + this.element.textColor.b + ', ' + this.element.textColor.a + ')',
                fontFamily: this.element.fontFamily,
            }
        },

        adjustableValueStyles() {
            return {
                fontFamily: this.element.fontFamily,
                fontSize: '2em',
                fontWeight: 700,
                marginBottom: 0,
            }
        }
    }
}
</script>

<style scoped>
.adjustable-value-text {
    margin-bottom: 0;
}
</style>
