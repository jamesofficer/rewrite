<template>
    <div :class="{ 'selected-element': elementIsSelected }" :style="{ textAlign: element.textAlign }">
        <icon v-if="! facebookUrl" name="brands/facebook" scale="8"></icon>

        <!-- COMPONENT -->
        <div v-else v-html="element.url" :style="getElementStyles"></div>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-clone-move></delete-clone-move>

            <b-input size="sm"
                    v-model="facebookUrl"
                    @blur.native="updateFacebookUrl"
                    placeholder="Paste Facebook Embed Code here..."
                    v-b-tooltip.hover title="Facebook Embed Code"
                    class="top-bar-control">
            </b-input>

            <margin></margin>

            <image-alignment></image-alignment>
        </top-bar>
    </div>
</template>

<script>
import GetElement        from './mixins/GetElement'

import TopBar            from './topbar/TopBar'
import DeleteCloneMove   from './topbar/DeleteCloneMove'

import TextInput         from './core/TextInput'
import ImageAlignment    from './core/ImageAlignment'
import Margin            from './core/Margin'

export default {
    name: "FacebookEmbed",

    mixins: [GetElement],

    components: {
        TopBar, DeleteCloneMove,
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

