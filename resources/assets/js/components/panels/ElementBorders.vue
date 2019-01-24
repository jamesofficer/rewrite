<template>
    <div class="sidebar-control">
        <sidebar-control icon="regular/square" tooltip="Border Controls" @click.native="setSelectedElementStyle()" :pressed="elementStyleIsSelected()"></sidebar-control>

        <portal to="element-styles-panel" v-if="elementStyleIsSelected()">
            <div class="element-style-panel-container">
                <border></border>
            </div>
        </portal>
    </div>
</template>

<script>
import SelectedElementStyle from '../mixins/SelectedElementStyle';

import SidebarControl  from '../sidebar/SidebarControl';
import Border         from '../core/Border';

export default {
    name: "ElementBorders",

    components: { SidebarControl, Border },

    mixins: [SelectedElementStyle],

    data() {
        return {
            elementStyleName: 'borders',
        }
    }
}
</script>
