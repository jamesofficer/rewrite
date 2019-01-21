<template>
    <div class="sidebar-control">
        <top-bar-control icon="sun" tooltip="Text Shadow" @click.native="setSelectedElementStyle()" :pressed="elementStyleIsSelected()"></top-bar-control>

        <portal to="element-styles-panel" v-if="elementStyleIsSelected()">
            <text-shadow></text-shadow>
        </portal>
    </div>
</template>

<script>
import SelectedElementStyle from '../mixins/SelectedElementStyle';

import TopBarControl from '../topbar/TopBarControl';
import TextShadow    from '../core/TextShadow';

export default {
    name: "ElementTextShadow",

    components: { TopBarControl, TextShadow },

    mixins: [SelectedElementStyle],

    data() {
        return {
            elementStyleName: 'text-shadow',
        }
    }
}
</script>

