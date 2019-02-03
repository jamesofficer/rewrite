<template>
    <b-textarea v-model="content" @focus="setKeyBindings(false)" @blur="setKeyBindings(true)"></b-textarea>
</template>

<script>
export default {
    name: "TextInput",

    computed: {
        content: {
            get () {
                return this.$store.getters.getSelectedElement.content;
            },
            set (value) {
                this.$store.commit('setComponentProperty', { property: 'content', value: value });
            }
        },
    },

    methods: {
        setKeyBindings(boolean) {
            this.$store.commit('enableKeyBindings', boolean);
        }
    }
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
