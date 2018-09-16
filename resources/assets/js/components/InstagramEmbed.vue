<template>
    <div :class="{ 'selected-element': elementIsSelected }" :style="{ textAlign: element.textAlign }">
        <icon v-if="! instagramUrl" name="brands/instagram" scale="8"></icon>

        <!-- COMPONENT -->
        <iframe v-else :src="element.url" :style="{
            marginTop: element.margin.top + 'px',
            marginRight: element.margin.right + 'px',
            marginBottom: element.margin.bottom + 'px',
            marginLeft: element.margin.left + 'px',
        }"></iframe>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-component-button></delete-component-button>

            <b-input size="sm" v-model="instagramUrl" @blur.native="updateInstagramUrl" placeholder="Paste Instagram url here..."
                    class="top-bar-control" v-b-tooltip.hover title="Instagram URL"></b-input>

            <image-alignment></image-alignment>

            <margin></margin>
        </top-bar>
    </div>
</template>

<script>
import GetElement        from './mixins/GetElement'

import TopBar            from './topbar/TopBar'
import DeleteComponentButton from './topbar/DeleteComponentButton'

import TextInput         from './core/TextInput'
import ImageAlignment    from './core/ImageAlignment'
import Margin            from './core/Margin'

export default {
    name: "InstagramEmbed",

    mixins: [GetElement],

    components: {
        TopBar, DeleteComponentButton,
        TextInput, ImageAlignment, Margin,
    },

    data() {
        return {
            instagramUrl: null,
        }
    },

    methods: {
        updateInstagramUrl() {
            // Strip this out if it's there as it will break the string split below.
            if (this.instagramUrl.includes('?utm_source=ig_web_copy_link')) {
                this.instagramUrl = this.instagramUrl.replace('?utm_source=ig_web_copy_link', '');
            }

            const imageId = this.instagramUrl.split('instagram.com/p/', 2)[1];
            const newUrl  = 'https://www.instagram.com/p/' + imageId + 'embed';

            this.$store.commit('setUrl', newUrl);
        }
    }
}
</script>

