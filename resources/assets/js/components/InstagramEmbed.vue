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
            <delete-clone-move></delete-clone-move>

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
import DeleteCloneMove   from './topbar/DeleteCloneMove'

import TextInput         from './core/TextInput'
import ImageAlignment    from './core/ImageAlignment'
import Margin            from './core/Margin'

export default {
    name: "InstagramEmbed",

    mixins: [GetElement],

    components: {
        TopBar, DeleteCloneMove,
        TextInput, ImageAlignment, Margin,
    },

    computed: {
        instagramUrl: {
            get() {
                return this.$store.getters.getElement(this.indexes).originalUrl;
            },
            set(url) {
                this.$store.commit('setComponentProperty', { property: 'originalUrl', value: url });
            }
        }
    },

    methods: {
        updateInstagramUrl() {
            // Strip this out if it's there as it will break the string split below.
           

            const targetIndex = this.instagramUrl.indexOf("?"); 
            let newUrl;

            console.log(targetIndex);
           
            
             if (targetIndex > 0)
             {
                 newUrl = this.instagramUrl.substring(0, targetIndex);
            
             }

             console.log(newUrl);

            this.$store.commit('setComponentProperty', { property: 'url', value: newUrl });
        }
    }
}
</script>

