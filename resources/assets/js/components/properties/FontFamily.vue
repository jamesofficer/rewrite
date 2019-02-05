<template>
    <div>
        <label class="style-panel-label">Font</label>

        <b-button
            class="w-100"
            variant="outline-primary"
            v-b-modal.fontSelectModal
        >
            {{ selectedFont }}
        </b-button>
    </div>
</template>

<script>
import FontList from '../mixins/FontList'

export default {
    name: "FontFamily",

    computed: {
        selectedFont() {
            return this.$store.getters.getSelectedElement.fontFamily;
        }
    },
}
</script>