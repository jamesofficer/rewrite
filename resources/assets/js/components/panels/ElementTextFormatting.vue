<template>
    <div class="sidebar-control">
        <top-bar-control icon="font" tooltip="Text Formatting" @click.native="setSelectedElementStyle()" :pressed="elementStyleIsSelected()"></top-bar-control>

        <portal to="element-styles-panel" v-if="elementStyleIsSelected()">
            <font-family></font-family>

            <text-alignment></text-alignment>

            <text-color></text-color>

            <font-size></font-size>

            <font-weight></font-weight>

            <line-height></line-height>

            <letter-spacing></letter-spacing>
        </portal>
    </div>
</template>

<script>
import SelectedElementStyle from '../mixins/SelectedElementStyle';

import TopBarControl  from '../topbar/TopBarControl';
import TextAlignment  from '../core/TextAlignment';
import FontFamily     from '../core/FontFamily';

import TextColor     from '../core/TextColor';
import TextShadow    from '../core/TextShadow';
import FontSize      from '../core/FontSize';
import FontWeight    from '../core/FontWeight';
import LineHeight    from '../core/LineHeight';
import LetterSpacing from '../core/LetterSpacing';

export default {
    name: "ElementTextFormatting",

    components: {
        TopBarControl, TextAlignment, FontFamily, TextColor, TextShadow,
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

