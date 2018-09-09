export default {
    data() {
        return {
            images: [],
        }
    },

    methods: {
        getImages() {
            axios.get('/api/images').then(response => {
                if (response.data.length === 0) {
                    this.images.push('Sorry no images found...');
                } else {
                    this.images = response.data;
                }
            }).catch(error => {
                alert('Oops. We were unable to retrieve your images...');
                console.log(error);
            });
        }
    },
};
