<template>
    <div class="topbar-button">
        <topbar-button icon="brush" tooltip="Background Controls" @click.native="setSelectedElementStyle()" :pressed="elementStyleIsSelected()"></topbar-button>

        <portal to="element-styles-panel" v-if="elementStyleIsSelected()">
            <b-form-row class="mb-2">
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
                <b-form-row class="mb-2">
                    <b-col>
                        <background-size></background-size>
                    </b-col>

                    <b-col>
                        <background-position></background-position>
                    </b-col>
                </b-form-row>
            </template>

            <template v-if="element.backgroundImage !== undefined">
                <b-form-row class="mb-2">
                    <b-col cols="6">
                        <clear-image></clear-image>
                    </b-col>
                </b-form-row>
            </template>
        </portal>
    </div>
</template>

<script>
import SelectedElementStyle from '../mixins/SelectedElementStyle';

import TopbarButton      from '../topbar/TopbarButton';
import ClearImage         from '../topbar/ClearImage';

import BackgroundColor    from '../properties/BackgroundColor';
import BackgroundGradient from '../properties/BackgroundGradient';
import ImageSelector      from '../properties/ImageSelector';
import BackgroundSize     from '../properties/BackgroundSize';
import BackgroundPosition from '../properties/BackgroundPosition';

export default {
    name: "ElementBackground",

    components: {
        TopbarButton, BackgroundColor, BackgroundGradient, ImageSelector, BackgroundSize, BackgroundPosition, ClearImage
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

