<template>
    <b-input size="sm" v-model="url" class="top-bar-control" placeholder="Paste url here..." v-b-tooltip.hover :title="tooltip"></b-input>
</template>

<script>
export default {
    name: "UrlInput",

    props: {
        tooltip: {
            type: String,
            required: false,
            default: 'URL',
        },

        method: {
            type: String,
            required: false,
            default: 'setUrl',
        }
    },

    computed: {
        url: {
            get () {
                return this.$store.getters.getCurrentElement.url;
            },
            set (value) {
                this.$store.commit(this.method, value);
            }
        },
    },
}
</script>