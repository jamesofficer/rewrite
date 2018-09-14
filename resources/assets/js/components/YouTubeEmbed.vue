<template>
    <div :class="{ 'selected-element': elementIsSelected }" :style="{ textAlign: element.textAlign }">
        <icon v-if="! videoUrl" name="brands/youtube" scale="8"></icon>

        <!-- COMPONENT -->
        <iframe v-else :src="element.videoUrl" :style="{
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
        </top-bar>

        <!-- SIDEBAR -->
        <sidebar v-if="elementIsSelected" title="YouTube">
            <sidebar-control>
                <b-input size="lg" v-model="videoUrl" @blur.native="updateYouTubeUrl" placeholder="Paste YouTube video URL here..."></b-input>
            </sidebar-control>

            <image-alignment></image-alignment>

            <margin></margin>
        </sidebar>
    </div>
</template>

<script>
import GetElement        from './mixins/GetElement'

import TopBar            from './topbar/TopBar'
import Sidebar           from './sidebar/Sidebar'
import SidebarControl    from './sidebar/SidebarControl'
import DeleteComponentButton from './topbar/DeleteComponentButton'

import TextInput         from './core/TextInput'
import ImageAlignment    from './core/ImageAlignment'
import Margin            from './core/Margin'


export default {
    name: "YouTubeEmbed",

    mixins: [GetElement],

    components: {
        TopBar, Sidebar, SidebarControl, DeleteComponentButton,
        TextInput, ImageAlignment, Margin,
    },

    data() {
        return {
            videoUrl: null,
        }
    },

    methods: {
        updateYouTubeUrl() {
            const videoId = this.videoUrl.split('/watch?v=', 2)[1];
            const newUrl  = 'https://www.youtube.com/embed/' + videoId;

            this.$store.commit('setVideoUrl', newUrl);
        }
    }
}
</script>