<template>
    <b-row :class="{ 'selected-element': elementIsSelected }" >
        <b-col>
        <!-- COMPONENT -->
        <div class="main">
            <div class="c1">
            <h5>SERVES</h5>
            <p class="big">{{ element.contentServes }}</p>
            </div>

            <div class="c2">
            <h5>PREPARATION</h5>
            <p class="big"> {{ element.contentPreparation }} </p>
            <p class="med">MIN</p>
            </div>

            <div class="c3">
            <h5>COOKING</h5>
            <p class="big"> {{ element.contentCooking }} </p>
            <p class="med">MIN</p>
            </div>

            <div class="c4">
            <h5>SKILL LEVEL</h5>
            <p class="big">{{ element.contentDifficulty }} </p>
            </div>

        </div>
        

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-component-button></delete-component-button>

            <recipe-summary-values></recipe-summary-values>
        </top-bar>
        </b-col>
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
        RecipeSummaryValues,
    },

}
</script>

<style scoped>
    h5 {
    border-bottom: 1px solid #3CBE01;
    
    
}

div.main
{
font-family: "Arial Black", Gadget, sans-serif;
color: #3CBE01;
}

div.c1
{
    
width: 100px;
float: left;

}

div.c2
{
width: 150px;
float: left;
margin-left: 20px;
}

div.c3
{
width: 120px;
float: left;
margin-left: 20px;
}

div.c4
{
width: 150px;
float: left;
margin-left: 20px;
}

p.big {
line-height: 0px;
font-size: 220%;
font-weight: bold;
padding-top: 25px;
}

p.med {
line-height: 0px;
font-size: 100%;
padding-top: 10px;
}
</style>
