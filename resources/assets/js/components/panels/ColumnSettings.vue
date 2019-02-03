<template>
    <div class="topbar-button">
        <topbar-button icon="cogs" tooltip="Column Settings" @click.native="setSelectedElementStyle()" :pressed="elementStyleIsSelected()"></topbar-button>

        <portal to="element-styles-panel" v-if="elementStyleIsSelected()">
            <column-width></column-width>

            <align-components></align-components>
        </portal>
    </div>
</template>

<script>
import SelectedElementStyle from '../mixins/SelectedElementStyle';

import TopbarButton        from '../topbar/TopbarButton';

import AlignComponents      from '../core/AlignComponents'
import ColumnWidth          from '../core/ColumnWidth'

export default {
    name: "ElementTextShadow",

    components: { TopbarButton, ColumnWidth, AlignComponents },

    mixins: [SelectedElementStyle],

    data() {
        return {
            elementStyleName: 'column',
        }
    }
}
</script>

