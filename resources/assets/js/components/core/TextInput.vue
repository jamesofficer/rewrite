<template>
    <b-textarea v-model="content"></b-textarea>
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
                this.$store.commit('setComponentProperty', { property: 'content', value: value });
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
