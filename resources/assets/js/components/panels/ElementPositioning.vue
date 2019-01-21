<template>
    <div class="sidebar-control">
        <top-bar-control icon="expand" tooltip="Positioning" @click.native="setSelectedElementStyle()" :pressed="elementStyleIsSelected()"></top-bar-control>

        <portal to="element-styles-panel" v-if="elementStyleIsSelected()">
            <margin></margin>

            <hr>

            <padding></padding>

            <hr>

            <width></width>
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

    data() {
        return {
            elementStyleName: 'positioning',
        }
    }
}
</script>

