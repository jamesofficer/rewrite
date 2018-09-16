<template>
    <b-textarea v-if="textarea"
            size="lg"
            :rows="5"
            v-model="content"
    ></b-textarea>

    <b-input v-else
            size="sm"
            v-model="content"
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
        },
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
.hide-input-styles {
    background: none;
    border: none;
}

.add-bottom-margin {
    margin-bottom: 15px;
}
</style>
