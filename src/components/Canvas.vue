<template>
    <div>
        <div class="shift-canvas" @mouseover="hovering = true" @mouseout="hovering = false">
            <add-component-modal :canvasIndex="index" v-show="hovering" style="float: right"></add-component-modal>

            <component v-for="(component, componentIndex) in canvasComponents"
                v-bind:is="component.type"
                v-bind:key="componentIndex"
                v-bind:index="componentIndex"
                v-bind:canvasIndex="index"
                @click.native="selectComponent(componentIndex)"
            ></component>
        </div>


    </div>
</template>

<script>
import Heading from './core/Heading';
import AddComponentModal from './dialogs/AddComponentModal';

export default {
    name: "Canvas",

    components: {
        Heading, AddComponentModal,
    },

    props: {
        index: {
            type: Number,
        },
    },

    data() {
        return {
            hovering: false,    // used to show and hide the edit button
            canvasComponents: this.$store.state.canvases[this.index].components,
        }
    },

    methods: {
        selectComponent(index) {
            this.$store.commit('setSelectedComponent', {
                canvasIndex: this.index,
                componentIndex: index,
            });
        },
    },
}

</script>
