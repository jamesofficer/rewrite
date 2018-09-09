<template>
    <b-modal @shown="getImages" :id="'myImagesModal'" title="My Images" size="lg" ref="myImagesModal">
        <image-uploader @imageUploaded="getImages"></image-uploader>

        <hr>

        <h5>Your Images:</h5>

        <template v-if="images.length > 0">
            <div v-for="(image, index) in images" :key="index" style="display: inline;">
                <img :src="image.url" :key="index" class="gallery-image">
            </div>
        </template>
    </b-modal>
</template>

<script>
import getImages     from '../mixins/GetImages'
import ImageUploader from '../core/ImageUploader'

export default {
    name: "MyImagesModal",

    mixins: [getImages],

    components: {
        ImageUploader,
    },
}
</script>