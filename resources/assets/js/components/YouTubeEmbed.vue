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
            <delete-clone-move></delete-clone-move>

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

import TopBar            from './topbar/TopBar'
import DeleteCloneMove   from './topbar/DeleteCloneMove'

import TextInput         from './core/TextInput'
import ImageAlignment    from './core/ImageAlignment'
import Margin            from './core/Margin'


export default {
    name: "YouTubeEmbed",

    mixins: [GetElement],

    components: {
        TopBar, DeleteCloneMove,
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

                       let searchIndex;

            searchIndex = this.videoUrl.search("youtu.be");

            if (searchIndex != -1)
            {// It Does (yout.be)

                searchIndex = this.videoUrl.search("t=");

                   if (searchIndex == -1)
                    {// It doesn't exist (non Timed)

                        const urlStart = this.videoUrl.split('.')[0];
                        const urlEnd = this.videoUrl.split('.')[1];

                        const newEnd = urlEnd.split("be/")[1];

                        const newUrl  = urlStart + 'be.com/embed/' + newEnd;

                        this.$store.commit('setComponentProperty', { property: 'url', value: newUrl });

                    }
                    else
                    {// Timed

                    let dotUrl = this.videoUrl.split('?t=')[0];
                    const timeVal = this.videoUrl.split('?t=')[1];

                        const urlStart = dotUrl.split('.')[0];
                        const urlEnd = dotUrl.split('.')[1];

                        const newEnd = urlEnd.split("be/")[1];

                        const newUrl  = urlStart + 'be.com/embed/' + newEnd + '?start=' + timeVal;

                        this.$store.commit('setComponentProperty', { property: 'url', value: newUrl });
                        

                    }

            }
            else
            {

                if (this.videoUrl) {
                    const videoId = this.videoUrl.split('/watch?v=', 2)[1];
                    const newUrl  = 'https://www.youtube.com/embed/' + videoId;

                    this.$store.commit('setComponentProperty', { property: 'url', value: newUrl });
                }
            
            }
        }
    },
}
</script>