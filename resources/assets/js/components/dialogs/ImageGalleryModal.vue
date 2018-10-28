<template>
    <b-modal @shown="getImages" :id="'imageGalleryModal'" title="My Images" size="lg" ref="imageGalleryModal">
        <b-form-checkbox id="show-all-images-checkbox"
                     v-model="showAllImages">
            Show all images
        </b-form-checkbox>

        <br>
        <br>

        <template v-if="images.length > 0">
            <div v-for="(image, index) in images" :key="index" style="display: inline;">
                <img :src="image.url" :key="index" class="gallery-image" @click="selectImage(index)">
            </div>
        </template>
        
        <p v-else>You haven't uploaded any images yet...</p>
    </b-modal>
</template>

<script>
import getImages from '../mixins/GetImages'

export default {
    name: "ImageGalleryModal",

    mixins: [getImages],

    data() {
        return {
            showAllImages: true,
        }
    },

    methods: {
        selectImage(index) {
            if (this.$store.getters.getSelectedElement.type === 'Picture') {
                this.$store.commit('setComponentProperty', { property: 'src', value: this.images[index].url });
            } else {
                this.$store.commit('setComponentProperty', { property: 'backgroundImage', value: 'url(' + this.images[index].url + ')' });
            }

            this.$refs.imageGalleryModal.hide();
        }
    }
}
</script>

<style scoped>
.gallery-image:hover {
    cursor: pointer;
    background: #38c172;
    border: 1px solid green;
}
</style>
