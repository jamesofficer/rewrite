<template>
    <b-modal @shown="getImages" :id="'myImagesModal'" title="My Images" size="lg" ref="myImagesModal">
        <image-uploader @imageUploaded="getImages"></image-uploader>

        <hr>

        <h5>Your Images:</h5>

        <template v-if="images.length > 0">
            <div v-for="(image, index) in images" :key="index" style="display: inline;">
                <img :src="image.url" :key="index" class="gallery-image selectable" :class="{ 'selected-image' : selectedImages.includes(index) }" @click="selectImage(index)">
            </div>
        </template>

        <p v-else>You haven't uploaded any images yet...</p>

        <div slot="modal-footer" style="width: 100%">
            <b-btn variant="outline-danger" @click="deleteImages" :disabled="selectedImages.length === 0">Delete Images</b-btn>
        </div>
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

    data() {
        return {
            selectedImages: [],
        }
    },

    methods: {
        selectImage(index) {
            if (this.selectedImages.includes(index)) {
                this.selectedImages.splice(this.selectedImages.indexOf(index), 1);
            } else {
                this.selectedImages.push(index);
            }
        },

        deleteImages() {
            axios.post('images/destroy', this.selectedImages).then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error);
            })
        }
    }
}
</script>

<style scoped>
.selectable {
    cursor: pointer;
}

.selected-image {
    background: darkred;
    border: 1px solid red;
}
</style>
