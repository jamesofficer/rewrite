<template>
    <div class="topbar-button">
        <topbar-button icon="regular/square" tooltip="Border Controls" @click.native="setSelectedElementStyle()" :pressed="elementStyleIsSelected()"></topbar-button>

        <portal to="element-styles-panel" v-if="elementStyleIsSelected()">
            <div class="element-style-panel-container">
                <border></border>
            </div>
        </portal>
    </div>
</template>

<script>
import SelectedElementStyle from '../mixins/SelectedElementStyle';

import TopbarButton  from '../topbar/TopbarButton';
import Border         from '../core/Border';

export default {
    name: "ElementBorders",

    components: { TopbarButton, Border },

    mixins: [SelectedElementStyle],

    data() {
        return {
            elementStyleName: 'borders',
        }
    }
}
</script>
