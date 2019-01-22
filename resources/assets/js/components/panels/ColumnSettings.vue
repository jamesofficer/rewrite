<template>
    <div class="sidebar-control">
        <top-bar-control icon="cogs" tooltip="Column Settings" @click.native="setSelectedElementStyle()" :pressed="elementStyleIsSelected()"></top-bar-control>

        <portal to="element-styles-panel" v-if="elementStyleIsSelected()">
            <column-width></column-width>

            <hr>

            <align-components></align-components>
        </portal>
    </div>
</template>

<script>
import SelectedElementStyle from '../mixins/SelectedElementStyle';

import TopBarControl        from '../topbar/TopBarControl';

import AlignComponents      from '../core/AlignComponents'
import ColumnWidth          from '../core/ColumnWidth'

export default {
    name: "ElementTextShadow",

    components: { TopBarControl, ColumnWidth, AlignComponents },

    mixins: [SelectedElementStyle],

    data() {
        return {
            elementStyleName: 'column',
        }
    }
}
</script>

