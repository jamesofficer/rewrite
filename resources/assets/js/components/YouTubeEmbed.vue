<template>
    <div :class="{ 'selected-element': elementIsSelected }" :style="{ textAlign: element.textAlign }">
        <icon v-if="! videoUrl" name="brands/youtube" scale="8"></icon>

        <!-- COMPONENT -->
        <iframe v-else :src="element.url" :style="{
                marginTop: element.margin.top + 'px',
                marginRight: element.margin.right + 'px',
                marginBottom: element.margin.bottom + 'px',
                marginLeft: element.margin.left + 'px',
            }"
               :width="560"
               :height="315"
               :frameborder="0"
        ></iframe>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-component-button></delete-component-button>

            <move-component-up></move-component-up>

            <move-component-down></move-component-down>

            <b-input size="sm" v-model="videoUrl" @blur.native="updateYouTubeUrl" placeholder="Paste video url here..."
                    class="top-bar-control" v-b-tooltip.hover title="YouTube Video URL"></b-input>

            <template v-if="videoUrl">
                <margin></margin>

                <image-alignment></image-alignment>
            </template>

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
    name: "YouTubeEmbed",

    mixins: [GetElement, MoveComponent],

    components: {
        TopBar, DeleteComponentButton,
        TextInput, ImageAlignment, Margin,
    },

    computed: {
        videoUrl: {
            get() {
                return this.$store.getters.getElement(this.indexes).originalUrl;
            },
            set(url) {
                this.$store.commit('setComponentProperty', { property: 'originalUrl', value: url });
            }
        }
    },

    methods: {
        updateYouTubeUrl() {
            if (this.videoUrl) {
                const videoId = this.videoUrl.split('/watch?v=', 2)[1];
                const newUrl  = 'https://www.youtube.com/embed/' + videoId;

                this.$store.commit('setComponentProperty', { property: 'url', value: newUrl });
            }
        }
    },
}
</script>