<template>
    <b-modal @shown="getImages" :id="'myImagesModal'" title="My Images" size="lg" ref="myImagesModal">
        <h6>Upload Image:</h6>
        <form enctype="multipart/form-data" novalidate>
            <input type="file" @change="uploadImage($event)" name="imageUpload" accept="image/*">
        </form>

        <hr>

        <h6>Your Images:</h6>

        <template v-for="(image, index) in images">
            <pre :key="index">{{ index }}. {{ image }}</pre>
        </template>
    </b-modal>
</template>

<script>
export default {
    name: "MyImagesModal",

    data() {
        return {
            images: [],
        }
    },

    methods: {
        uploadImage(e) {
            console.log(e);

            return axios.post('/images/store', {
                image: e.target.value,
            }).then(response => {
                console.log(response.data);
            });
        },

        getImages() {
            axios.get('/images').then(response => {
                if (response.data.length === 0) {
                    this.images.push('Sorry no images found...');
                } else {
                    this.images = response.data;
                }
            }).catch(error => {
                console.log('something fucked up');
                console.log(error);
            });
        }
    }
}
</script>
