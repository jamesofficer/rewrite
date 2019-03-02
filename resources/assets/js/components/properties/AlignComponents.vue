<template>
    <div class="mb-2">
        <label class="style-panel-label">Component Alignment</label>

        <b-form-select
            class="sidebar-text-input"
            size="sm"
            v-model="componentAlignment"
            :options="alignmentOptions"
        ></b-form-select>
    </div>
</template>

<script>
export default {
    name: "AlignComponents",

    computed: {
        componentAlignment: {
            get() {
                return this.$store.getters.getSelectedElement
                    .componentAlignment;
            },
            set(alignment) {
                this.$store.commit("setComponentProperty", {
                    property: "componentAlignment",
                    value: alignment,
                });
            },
        },
    },

    data() {
        return {
            alignmentOptions: [
                {
                    text: "Top",
                    value: "start",
                },
                {
                    text: "Center",
                    value: "center",
                },
                {
                    text: "Bottom",
                    value: "end",
                },
            ],
        };
    },
};
</script>

