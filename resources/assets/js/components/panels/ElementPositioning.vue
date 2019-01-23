<template>
    <div class="sidebar-control">
        <sidebar-control icon="expand" tooltip="Positioning" @click.native="setSelectedElementStyle()" :pressed="elementStyleIsSelected()"></sidebar-control>

        <portal to="element-styles-panel" v-if="elementStyleIsSelected()">
            <margin v-if="showMargins"></margin>

            <hr v-if="showMargins">

            <padding v-if="showPadding"></padding>

            <hr v-if="showPadding">

            <width v-if="showWidth"></width>

            <hr v-if="showImageAlignment">

            <image-alignment v-if="showImageAlignment"></image-alignment>
        </portal>
    </div>
</template>

<script>
import SelectedElementStyle from '../mixins/SelectedElementStyle';

import SidebarControl  from '../sidebar/SidebarControl';
import Margin         from '../core/Margin';
import Padding        from '../core/Padding';
import Width          from '../core/Width';
import ImageAlignment from '../core/ImageAlignment';

export default {
    name: "ElementPositioning",

    components: {
        SidebarControl, Margin, Padding, Width, ImageAlignment
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

