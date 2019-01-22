<template>
    <div class="sidebar-control">
        <top-bar-control icon="brush" tooltip="Background Controls" @click.native="setSelectedElementStyle()" :pressed="elementStyleIsSelected()"></top-bar-control>

        <portal to="element-styles-panel" v-if="elementStyleIsSelected()">
            <background-color></background-color>

            <background-gradient></background-gradient>
        </portal>
    </div>
</template>

<script>
import SelectedElementStyle from '../mixins/SelectedElementStyle';

import TopBarControl      from '../topbar/TopBarControl';
import BackgroundColor    from '../core/BackgroundColor';
import BackgroundGradient from '../core/BackgroundGradient';

export default {
    name: "ElementBackground",

    components: {
        TopBarControl, BackgroundColor, BackgroundGradient
    },

    mixins: [SelectedElementStyle],

    data() {
        return {
            elementStyleName: 'background',
        }
    }
}
</script>

