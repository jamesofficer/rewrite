<template>
    <div class="sidebar-control">
        <sidebar-control icon="brush" tooltip="Background Controls" @click.native="setSelectedElementStyle()" :pressed="elementStyleIsSelected()"></sidebar-control>

        <portal to="element-styles-panel" v-if="elementStyleIsSelected()">
            <b-form-row>
                <b-col>
                    <background-color></background-color>
                </b-col>

                <b-col>
                    <background-gradient></background-gradient>
                </b-col>

                <b-col>
                    <image-selector v-if="allowImage"></image-selector>
                </b-col>
            </b-form-row>

            <!-- Only need these for background images -->
            <template v-if="element.backgroundImage !== undefined && element.backgroundImage.includes('url')">
                <background-size></background-size>

                <background-position></background-position>
            </template>

            <template v-if="element.backgroundImage !== undefined">
                <clear-image></clear-image>
            </template>
        </portal>
    </div>
</template>

<script>
import SelectedElementStyle from '../mixins/SelectedElementStyle';

import SidebarControl      from '../sidebar/SidebarControl';
import ClearImage         from '../sidebar/ClearImage';

import BackgroundColor    from '../core/BackgroundColor';
import BackgroundGradient from '../core/BackgroundGradient';
import ImageSelector      from '../core/ImageSelector';
import BackgroundSize     from '../core/BackgroundSize';
import BackgroundPosition from '../core/BackgroundPosition';

export default {
    name: "ElementBackground",

    components: {
        SidebarControl, BackgroundColor, BackgroundGradient, ImageSelector, BackgroundSize, BackgroundPosition, ClearImage
    },

    mixins: [SelectedElementStyle],

    props: {
        element: {
            type: Object,
            required: true,
        },

        allowImage: {
            type: Boolean,
            required: false,
            default: true,
        }
    },

    data() {
        return {
            elementStyleName: 'background',
        }
    }
}
</script>

