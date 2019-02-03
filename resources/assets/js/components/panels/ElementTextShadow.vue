<template>
    <div class="topbar-button">
        <topbar-button
            icon="sun"
            tooltip="Text Shadow"
            @click.native="setSelectedElementStyle()"
            :pressed="elementStyleIsSelected()"
        ></topbar-button>

        <portal to="element-styles-panel" v-if="elementStyleIsSelected()">
            <div class="element-style-panel-container">
                <text-shadow></text-shadow>
            </div>
        </portal>
    </div>
</template>

<script>
import SelectedElementStyle from '../mixins/SelectedElementStyle';

import TopbarButton from '../topbar/TopbarButton';
import TextShadow    from '../core/TextShadow';

export default {
    name: "ElementTextShadow",

    components: { TopbarButton, TextShadow },

    mixins: [SelectedElementStyle],

    data() {
        return {
            elementStyleName: 'text-shadow',
        }
    }
}
</script>

