<template>
    <b-textarea v-if="textarea"
                size="lg"
                :rows="5"
                v-model="content"
                class="text-input"
    ></b-textarea>

    <b-input v-else
            size="lg"
            v-model="content"
            class="text-input"
    ></b-input>
</template>

<script>
export default {
    name: "TextInput",

    props: {
        textarea: {
            type: Boolean,
            required: false,
            default: false
        }
    },

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
.text-input {
    background: none;
    border: none;
}
</style>
