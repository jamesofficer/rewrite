export default {
    data() {
        return {
            images: [],
        }
    },

    methods: {
        getImages() {
            this.images = [];

            axios.get('/api/images').then(response => {
                if (response.data.length !== 0) {
                    this.images = response.data;
                }
            }).catch(error => {
                alert('Oops. We were unable to retrieve your images...');
                console.log(error);
            });
        }
    },
};
