<template>
    <div class="sidebar-control">
        <sidebar-control icon="font" tooltip="Text Formatting" @click.native="setSelectedElementStyle()" :pressed="elementStyleIsSelected()"></sidebar-control>

        <portal to="element-styles-panel" v-if="elementStyleIsSelected()">
            <div style="width: 350px;">
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
            </div>
        </portal>
    </div>
</template>

<script>
import SelectedElementStyle from '../mixins/SelectedElementStyle';

import SidebarControl from '../sidebar/SidebarControl';
import TextAlignment  from '../core/TextAlignment';
import FontFamily     from '../core/FontFamily';

import TextColor      from '../core/TextColor';
import TextShadow     from '../core/TextShadow';
import FontSize       from '../core/FontSize';
import FontWeight     from '../core/FontWeight';
import LineHeight     from '../core/LineHeight';
import LetterSpacing  from '../core/LetterSpacing';

export default {
    name: "ElementTextFormatting",

    components: {
        SidebarControl, TextAlignment, FontFamily, TextColor, TextShadow,
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

