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
            <h5 :style="{
                borderBottom: '1px solid rgba(' + element.textColor.r + ', ' + element.textColor.g + ', ' + element.textColor.b + ', ' + element.textColor.a + ')',
                fontFamily: element.fontFamily,
            }">
                SERVES
            </h5>

            <p class="big" :style="{
                fontFamily: element.fontFamily,
            }">
                {{ element.contentServes }}
            </p>
        </b-col>

        <b-col :style="{
            color: 'rgba(' + element.textColor.r + ', ' + element.textColor.g + ', ' + element.textColor.b + ', ' + element.textColor.a + ')',
        }">
            <h5 :style="{
                borderBottom: '1px solid rgba(' + element.textColor.r + ', ' + element.textColor.g + ', ' + element.textColor.b + ', ' + element.textColor.a + ')',
                fontFamily: element.fontFamily,
            }">
                PREPARATION
            </h5>

            <p class="big" :style="{
                fontFamily: element.fontFamily,
            }">
                {{ element.contentPreparation }}
            </p>

            <p class="med" :style="{
                fontFamily: element.fontFamily,
            }">
                MIN
            </p>
        </b-col>

        <b-col :style="{
            color: 'rgba(' + element.textColor.r + ', ' + element.textColor.g + ', ' + element.textColor.b + ', ' + element.textColor.a + ')',
        }">
            <h5 :style="{
                borderBottom: '1px solid rgba(' + element.textColor.r + ', ' + element.textColor.g + ', ' + element.textColor.b + ', ' + element.textColor.a + ')',
                fontFamily: element.fontFamily,
            }">
                COOKING
            </h5>

            <p class="big" :style="{
                fontFamily: element.fontFamily,
            }">
                {{ element.contentCooking }}
            </p>

            <p class="med" :style="{
                fontFamily: element.fontFamily,
            }">
                MIN
            </p>
        </b-col>

        <b-col :style="{
            color: 'rgba(' + element.textColor.r + ', ' + element.textColor.g + ', ' + element.textColor.b + ', ' + element.textColor.a + ')',
        }">
            <h5 :style="{
                borderBottom: '1px solid rgba(' + element.textColor.r + ', ' + element.textColor.g + ', ' + element.textColor.b + ', ' + element.textColor.a + ')',
                fontFamily: element.fontFamily,
            }">
                SKILL LEVEL
            </h5>

            <p class="big" :style="{
                fontFamily: element.fontFamily,
            }">
                {{ element.contentDifficulty }}
            </p>
        </b-col>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-component-button></delete-component-button>

            <recipe-summary-values></recipe-summary-values>

            <margin></margin>

            <padding></padding>

            <text-color></text-color>

            <font-family></font-family>
        </top-bar>
    </b-row>
</template>

<script>
import GetElement        from './mixins/GetElement'

import TopBar            from './topbar/TopBar'
import DeleteComponentButton from './topbar/DeleteComponentButton'

import TextInput            from './core/TextInput'
import Margin               from './core/Margin'
import Padding              from './core/Padding'
import TextColor            from './core/TextColor'
import TextAlignment        from './core/TextAlignment'
import FontFamily           from './core/FontFamily'
import FontWeight           from './core/FontWeight'
import FontSize             from './core/FontSize'
import LineHeight           from './core/LineHeight'
import RecipeSummaryValues  from './core/RecipeSummaryValues'

export default {
    name: "RecipeSummary",

    mixins: [GetElement],

    components: {
        TopBar, DeleteComponentButton,
        RecipeSummaryValues, Margin, Padding, TextColor, FontFamily,
    },
}
</script>

<style scoped>
.main {
    font-family: "Arial Black", Gadget, sans-serif;
    color: #3CBE01;
}

.big {
    line-height: 0px;
    font-size: 220%;
    font-weight: bold;
    padding-top: 25px;
}

.med {
    line-height: 0px;
    font-size: 100%;
    padding-top: 10px;
}
</style>
