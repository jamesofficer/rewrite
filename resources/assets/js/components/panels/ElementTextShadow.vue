<template>
    <div class="sidebar-control">
        <sidebar-control icon="sun" tooltip="Text Shadow" @click.native="setSelectedElementStyle()" :pressed="elementStyleIsSelected()"></sidebar-control>

        <portal to="element-styles-panel" v-if="elementStyleIsSelected()">
            <text-shadow></text-shadow>
        </portal>
    </div>
</template>

<script>
import SelectedElementStyle from '../mixins/SelectedElementStyle';

import SidebarControl from '../sidebar/SidebarControl';
import TextShadow    from '../core/TextShadow';

export default {
    name: "ElementTextShadow",

    components: { SidebarControl, TextShadow },

    mixins: [SelectedElementStyle],

    data() {
        return {
            elementStyleName: 'text-shadow',
        }
    }
}
</script>

