<template>
    <div class="sidebar-control">
        <top-bar-control icon="sun" tooltip="Box Shadow" @click.native="setSelectedElementStyle()" :pressed="elementStyleIsSelected()"></top-bar-control>

        <portal to="element-styles-panel" v-if="elementStyleIsSelected()">
            <box-shadow></box-shadow>
        </portal>
    </div>
</template>

<script>
import SelectedElementStyle from '../mixins/SelectedElementStyle';

import TopBarControl from '../topbar/TopBarControl';
import BoxShadow     from '../core/BoxShadow';

export default {
    name: "ElementBoxShadow",

    components: { TopBarControl, BoxShadow },

    mixins: [SelectedElementStyle],

    data() {
        return {
            elementStyleName: 'box-shadow',
        }
    }
}
</script>

