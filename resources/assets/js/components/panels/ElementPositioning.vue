<template>
    <div class="sidebar-control">
        <sidebar-control icon="expand" tooltip="Positioning" @click.native="setSelectedElementStyle()" :pressed="elementStyleIsSelected()"></sidebar-control>

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
