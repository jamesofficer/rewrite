<template>
    <b-modal @shown="getImages" :id="'myImagesModal'" title="My Images" size="lg" ref="myImagesModal">
        <image-uploader @imageUploaded="getImages"></image-uploader>

        <hr>

        <h5>Your Images:</h5>

        <template v-if="images.length > 0">
            <div v-for="(image, index) in images" :key="index" style="display: inline;">
                <img :src="image.url" :key="index" class="gallery-image selectable" :class="{ 'selected-image' : selectedImages.includes(images[index]) }" @click="selectImage(index)">
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
import ImageUploader from '../properties/ImageUploader'

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
            if (this.selectedImages.includes(this.images[index])) {
                this.selectedImages.splice(this.selectedImages.indexOf(index), 1);
            } else {
                this.selectedImages.push(this.images[index]);
            }
        },

        deleteImages() {
            axios.post('/api/images/destroy', { images: this.selectedImages }).then(response => {
                this.$store.commit('setNotification', {
                    message: this.selectedImages.length + ' images deleted succesfully.',
                    type: 'warning',
                });

                this.selectedImages = [];

                this.getImages();
            }).catch(error => {
                this.$store.commit('setNotification', {
                    message: 'Oops, something went wrong. Could not delete your images.',
                    type: 'danger',
                });
            });
            
            this.$refs.myImagesModal.hide();
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
