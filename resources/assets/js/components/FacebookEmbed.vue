<template>
    <div :class="{ 'selected-element': elementIsSelected }" :style="{ textAlign: element.textAlign }">
        <icon v-if="! facebookUrl" name="brands/facebook" scale="8"></icon>

        <!-- COMPONENT -->
        <div v-else v-html="element.url" :style="{
            marginTop: element.margin.top + 'px',
            marginRight: element.margin.right + 'px',
            marginBottom: element.margin.bottom + 'px',
            marginLeft: element.margin.left + 'px',
        }"></div>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-component-button></delete-component-button>

            <move-component></move-component>

            <b-input size="sm" v-model="facebookUrl" @blur.native="updateFacebookUrl" placeholder="Paste Facebook url here..."
                    class="top-bar-control" v-b-tooltip.hover title="Facebook URL"></b-input>

            <image-alignment></image-alignment>

            <margin></margin>
        </top-bar>
    </div>
</template>

<script>
import GetElement        from './mixins/GetElement'
import MoveComponent     from './mixins/MoveComponent'

import TopBar            from './topbar/TopBar'
import DeleteComponentButton from './topbar/DeleteComponentButton'

import TextInput         from './core/TextInput'
import ImageAlignment    from './core/ImageAlignment'
import Margin            from './core/Margin'

export default {
    name: "FacebookEmbed",

    mixins: [GetElement, MoveComponent],

    components: {
        TopBar, DeleteComponentButton,
        TextInput, ImageAlignment, Margin,
    },

    computed: {
        facebookUrl: {
            get() {
                return this.$store.getters.getElement(this.indexes).originalUrl;
            },
            set(url) {
                this.$store.commit('setComponentProperty', { property: 'originalUrl', value: url });
            }
        }
    },

    methods: {
        updateFacebookUrl() {
            this.$store.commit('setComponentProperty', { property: 'url', value: this.facebookUrl });
        }
    }
}
</script>

