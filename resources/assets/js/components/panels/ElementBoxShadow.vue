<template>
    <div class="sidebar-control">
        <sidebar-control icon="sun" tooltip="Box Shadow" @click.native="setSelectedElementStyle()" :pressed="elementStyleIsSelected()"></sidebar-control>

        <portal to="element-styles-panel" v-if="elementStyleIsSelected()">
            <box-shadow></box-shadow>
        </portal>
    </div>
</template>

<script>
import SelectedElementStyle from '../mixins/SelectedElementStyle';

import SidebarControl from '../sidebar/SidebarControl';
import BoxShadow     from '../core/BoxShadow';

export default {
    name: "ElementBoxShadow",

    components: { SidebarControl, BoxShadow },

    mixins: [SelectedElementStyle],

    data() {
        return {
            elementStyleName: 'box-shadow',
        }
    }
}
</script>

