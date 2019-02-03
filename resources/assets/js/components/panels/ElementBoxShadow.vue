<template>
    <div class="topbar-button">
        <topbar-button icon="sun" tooltip="Box Shadow" @click.native="setSelectedElementStyle()" :pressed="elementStyleIsSelected()"></topbar-button>

        <portal to="element-styles-panel" v-if="elementStyleIsSelected()">
            <div class="element-style-panel-container">
                <box-shadow></box-shadow>
            </div>
        </portal>
    </div>
</template>

<script>
import SelectedElementStyle from '../mixins/SelectedElementStyle';

import TopbarButton from '../topbar/TopbarButton';
import BoxShadow     from '../core/BoxShadow';

export default {
    name: "ElementBoxShadow",

    components: { TopbarButton, BoxShadow },

    mixins: [SelectedElementStyle],

    data() {
        return {
            elementStyleName: 'box-shadow',
        }
    }
}
</script>

