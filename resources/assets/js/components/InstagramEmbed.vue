<template>
    <div :class="{ 'selected-element': elementIsSelected }" :style="getElementStyles">
        <icon v-if="! instagramUrl" name="brands/instagram" scale="8"></icon>

        <!-- COMPONENT -->
        <div v-else>
            <iframe :src="element.url"></iframe>
        </div>

        <!-- TOP BAR -->
        <top-bar v-if="elementIsSelected">
            <delete-clone-move-element></delete-clone-move-element>

            <b-input size="sm"
                    v-model="instagramUrl"
                    @blur.native="updateInstagramUrl"
                    placeholder="Paste Instagram url here..."
                    class="top-bar-control"
                    v-b-tooltip.hover title="Instagram URL">
            </b-input>

            <margin></margin>

            <image-alignment></image-alignment>
        </top-bar>
    </div>
</template>

<script>
import GetElement        from './mixins/GetElement'

import TopBar            from './topbar/TopBar'
import DeleteCloneMoveElement from './topbar/DeleteCloneMoveElement'

import TextInput         from './core/TextInput'
import ImageAlignment    from './core/ImageAlignment'
import Margin            from './core/Margin'

export default {
    name: "InstagramEmbed",

    mixins: [GetElement],

    components: {
        TopBar, DeleteCloneMoveElement,
        TextInput, ImageAlignment, Margin,
    },

    computed: {
        instagramUrl: {
            get() {
                if (this.elementIsSelected) {
                    return this.$store.getters.getSelectedElement.originalUrl;                    
                }
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

