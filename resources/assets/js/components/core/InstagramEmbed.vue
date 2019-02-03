<template>
    <div
        :id="getElementIdentifier"
        :class="{ 'selected-element': elementIsSelected }"
        :style="getElementStyles"
    >
        <icon v-if="! instagramUrl" name="brands/instagram" scale="8"></icon>

        <!-- COMPONENT -->
        <div v-else>
            <iframe :src="element.url"></iframe>
        </div>

        <!-- TOP BAR -->
        <sidebar v-if="elementIsSelected">
            <delete-clone-move-element></delete-clone-move-element>

            <b-input
                size="sm"
                v-model="instagramUrl"
                @blur.native="updateInstagramUrl"
                placeholder="Paste Instagram url here..."
                v-b-tooltip.hover title="Instagram URL"
            ></b-input>

            <margin></margin>

            <image-alignment></image-alignment>
        </sidebar>
    </div>
</template>

<script>
import GetElement        from '../mixins/GetElement'

import Sidebar            from '../topbar/Topbar'
import DeleteCloneMoveElement from '../topbar/DeleteCloneMoveElement'

import TextInput         from '../properties/TextInput'
import ImageAlignment    from '../properties/ImageAlignment'
import Margin            from '../properties/Margin'

export default {
    name: "InstagramEmbed",

    mixins: [GetElement],

    components: {
        Sidebar, DeleteCloneMoveElement,
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

