<template>
    <div class="topbar-button">
        <topbar-button icon="font" tooltip="Text Formatting" @click.native="setSelectedElementStyle()" :pressed="elementStyleIsSelected()"></topbar-button>

        <portal to="element-styles-panel" v-if="elementStyleIsSelected()">
            <b-form-row class="mb-2">
                <b-col>
                    <font-family></font-family>
                </b-col>

                <b-col>
                    <text-alignment></text-alignment>
                </b-col>
            </b-form-row>

            <b-form-row class="mb-2">
                <b-col>
                    <font-size></font-size>
                </b-col>

                <b-col>
                    <font-weight></font-weight>
                </b-col>

                <b-col>
                    <line-height></line-height>
                </b-col>
            </b-form-row>

            <b-form-row class="mb-2">
                <b-col>
                    <letter-spacing></letter-spacing>
                </b-col>

                <b-col>
                    <text-color></text-color>
                </b-col>
            </b-form-row>
        </portal>
    </div>
</template>

<script>
import SelectedElementStyle from '../mixins/SelectedElementStyle';

import TopbarButton from '../topbar/TopbarButton';
import TextAlignment  from '../properties/TextAlignment';
import FontFamily     from '../properties/FontFamily';

import TextColor      from '../properties/TextColor';
import TextShadow     from '../properties/TextShadow';
import FontSize       from '../properties/FontSize';
import FontWeight     from '../properties/FontWeight';
import LineHeight     from '../properties/LineHeight';
import LetterSpacing  from '../properties/LetterSpacing';

export default {
    name: "ElementTextFormatting",

    components: {
        TopbarButton, TextAlignment, FontFamily, TextColor, TextShadow,
        FontSize, FontWeight, LineHeight, LetterSpacing
    },

    mixins: [SelectedElementStyle],

    data() {
        return {
            elementStyleName: 'text-formatting',
        }
    }
}
</script>

