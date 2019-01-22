<template>
    <div class="sidebar-control">
        <top-bar-control icon="expand" tooltip="Positioning" @click.native="setSelectedElementStyle()" :pressed="elementStyleIsSelected()"></top-bar-control>

        <portal to="element-styles-panel" v-if="elementStyleIsSelected()">
            <margin v-if="showMargins"></margin>

            <hr v-if="showMargins">

            <padding v-if="showPadding"></padding>

            <hr v-if="showPadding">

            <width v-if="showWidth"></width>
        </portal>
    </div>
</template>

<script>
import SelectedElementStyle from '../mixins/SelectedElementStyle';

import TopBarControl  from '../topbar/TopBarControl';
import Margin         from '../core/Margin';
import Padding        from '../core/Padding';
import Width          from '../core/Width';

export default {
    name: "ElementPositioning",

    components: { TopBarControl, Margin, Padding, Width },

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
        }
    },

    data() {
        return {
            elementStyleName: 'positioning',
        }
    }
}
</script>

