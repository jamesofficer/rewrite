<template>
    <b-form @submit="submitForm" ref="imageUploaderForm">
        <b-alert v-if="message" variant="success" dismissible show>
            {{ message }}
        </b-alert>

        <b-row>
            <b-col :cols="10">
                <b-form-file v-model="selectedFile"
                            :state="Boolean(selectedFile)"
                            placeholder="Choose a file..."
                            accept="image/*"
                            @change="changeImage"
                            name="image"
                            ref="imageUploader"
                ></b-form-file>
            </b-col>

            <b-col :cols="2">
                <b-button type="submit" variant="primary">Upload</b-button>
            </b-col>
        </b-row>
    </b-form>
</template>

<script>
import SidebarControl  from '../sidebar/SidebarControl'

export default {
    name: "ImageUploader",

    components: { SidebarControl },

    data() {
        return {
            images: [],
            selectedFile: null,
            message: null,
        }
    },

    methods: {
        changeImage(event) {
            this.selectedFile = event.target.files[0];
        },

        submitForm (event) {
            event.preventDefault();
            this.uploadImage();
        },

        uploadImage() {
            const fileInput = document.querySelector( '#image-upload' );
            const formData = new FormData()

            formData.append('image', this.selectedFile)
            formData.append('name', 'some_image_name')

            axios.post('/api/images/store', formData, {
                onUploadProgress: progressEvent => {
                    console.log(progressEvent.loaded / progressEvent.total)
                }
            }).then(response => {
                this.message = response.data.message;
                this.$refs.imageUploader.reset();
                this.$emit('imageUploaded', true);
            }).catch(error => {
                alert('Oops. Something went wrong uploading that image.')
                console.log(error);
            });
        }
    }
}
</script>
