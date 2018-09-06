<template>
    <div>
        <!-- Double Column -->
        <template v-if="double">
            <b-row>
                <b-col cols="12">
                    <label>{{ label }}</label>
                </b-col>
            </b-row>

            <b-row class="sidebar-control">
                <b-col cols="6">
                    <b-form-group>
                        <slot name="first"></slot>
                    </b-form-group>
                </b-col>

                <b-col cols="6">
                    <b-form-group>
                        <slot name="second"></slot>
                    </b-form-group>
                </b-col>
            </b-row>
        </template>

        <!-- Single Column -->
        <template v-else>
            <b-row class="sidebar-control">
                <b-col>
                    <b-form-group :label="label">
                        <slot></slot>
                    </b-form-group>
                </b-col>
            </b-row>
        </template>
    </div>
</template>

<script>
export default {
    name: "SidebarControl",

    props: {
        // The label we want to display above the control.
        label: {
            type: String,
            required: false,
        },

        // If true, splits the row into two columns.
        double: {
            type: Boolean,
            required: false,
            default: false,
        }
    },
}
</script>

<style scoped>
label {
    display: block;
    text-transform: capitalize;
    font-weight: 400;
    font-size: 1rem;
}
</style>
