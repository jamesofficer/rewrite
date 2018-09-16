<template>
    <b-form-textarea v-model="content" :rows="5"></b-form-textarea>
</template>

<script>
export default {
    name: "TextArea",

    computed: {
        content: {
            get () {
                return this.$store.getters.getCurrentElement.content;
            },
            set (value) {
                this.$store.commit('updateTextContent', value);
            }
        },
    },
}
</script>

