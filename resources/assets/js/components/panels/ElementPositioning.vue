<template>
    <div class="topbar-button">
        <topbar-button icon="expand" tooltip="Positioning" @click.native="setSelectedElementStyle()" :pressed="elementStyleIsSelected()"></topbar-button>

        <portal to="element-styles-panel" v-if="elementStyleIsSelected()">
            <div class="element-style-panel-container">
                <margin v-if="showMargins"></margin>

                <padding v-if="showPadding"></padding>

                <width v-if="showWidth"></width>

                <image-alignment v-if="showImageAlignment"></image-alignment>
            </div>
        </portal>
    </div>
</template>

<script>
import SelectedElementStyle from '../mixins/SelectedElementStyle';

import TopbarButton  from '../topbar/TopbarButton';
import Margin         from '../properties/Margin';
import Padding        from '../properties/Padding';
import Width          from '../properties/Width';
import ImageAlignment from '../properties/ImageAlignment';

export default {
    name: "ElementPositioning",

    components: {
        TopbarButton, Margin, Padding, Width, ImageAlignment
    },

    mixins: [SelectedElementStyle],

    props: {
        showMargins: {
            type: Boolean,
            required: false,
            default: true,
        },

        showPadding: {
            type: Boolean,
            required: false,
            default: true,
        },

        showWidth: {
            type: Boolean,
            required: false,
            default: true,
        },

        showImageAlignment: {
            type: Boolean,
            required: false,
            default: false,
        }
    },

    data() {
        return {
            elementStyleName: 'positioning',
        }
    }
}
</script>
