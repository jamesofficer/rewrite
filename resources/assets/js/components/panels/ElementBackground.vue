<template>
    <div class="sidebar-control">
        <top-bar-control icon="brush" tooltip="Background Controls" @click.native="setSelectedElementStyle()" :pressed="elementStyleIsSelected()"></top-bar-control>

        <portal to="element-styles-panel" v-if="elementStyleIsSelected()">
            <background-color></background-color>

            <background-gradient></background-gradient>

            <image-selector></image-selector>

            <!-- Only need these for background images -->
            <template v-if="element.backgroundImage !== undefined && element.backgroundImage.includes('url')">
                <background-size></background-size>

                <background-position></background-position>
            </template>

            <!-- Clearing a background image also clears a background gradient -->
            <template v-if="element.backgroundImage">
                <clear-image></clear-image>
            </template>
        </portal>
    </div>
</template>

<script>
import SelectedElementStyle from '../mixins/SelectedElementStyle';

import TopBarControl      from '../topbar/TopBarControl';
import ClearImage         from '../topbar/ClearImage';

import BackgroundColor    from '../core/BackgroundColor';
import BackgroundGradient from '../core/BackgroundGradient';
import ImageSelector      from '../core/ImageSelector';
import BackgroundSize     from '../core/BackgroundSize';
import BackgroundPosition from '../core/BackgroundPosition';

export default {
    name: "ElementBackground",

    components: {
        TopBarControl, BackgroundColor, BackgroundGradient, ImageSelector, BackgroundSize, BackgroundPosition, ClearImage
    },

    mixins: [SelectedElementStyle],

    props: {
        element: {
            type: Object,
            required: true,
        },
    },

    data() {
        return {
            elementStyleName: 'background',
        }
    }
}
</script>

