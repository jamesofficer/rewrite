<template>
    <div class="sidebar-control">
        <top-bar-control icon="regular/square" tooltip="Border Controls" @click.native="setSelectedElementStyle()" :pressed="elementStyleIsSelected()"></top-bar-control>

        <portal to="element-styles-panel" v-if="elementStyleIsSelected()">
            <border></border>
        </portal>
    </div>
</template>

<script>
import SelectedElementStyle from '../mixins/SelectedElementStyle';

import TopBarControl  from '../topbar/TopBarControl';
import Border         from '../core/Border';

export default {
    name: "ElementBorders",

    components: { TopBarControl, Border },

    mixins: [SelectedElementStyle],

    data() {
        return {
            elementStyleName: 'borders',
        }
    }
}
</script>

