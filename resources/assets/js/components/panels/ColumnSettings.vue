<template>
    <div class="sidebar-control">
        <sidebar-control icon="cogs" tooltip="Column Settings" @click.native="setSelectedElementStyle()" :pressed="elementStyleIsSelected()"></sidebar-control>

        <portal to="element-styles-panel" v-if="elementStyleIsSelected()">
            <column-width></column-width>

            <align-components></align-components>
        </portal>
    </div>
</template>

<script>
import SelectedElementStyle from '../mixins/SelectedElementStyle';

import SidebarControl        from '../sidebar/SidebarControl';

import AlignComponents      from '../core/AlignComponents'
import ColumnWidth          from '../core/ColumnWidth'

export default {
    name: "ElementTextShadow",

    components: { SidebarControl, ColumnWidth, AlignComponents },

    mixins: [SelectedElementStyle],

    data() {
        return {
            elementStyleName: 'column',
        }
    }
}
</script>

