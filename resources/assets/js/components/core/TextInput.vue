<template>
    <b-textarea v-model="content" v-autosize="content"></b-textarea>
</template>

<script>
export default {
    name: "TextInput",

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

<style scoped>
.hide-input-styles {
    background: none;
    border: none;
}

.add-bottom-margin {
    margin-bottom: 15px;
}
</style>
