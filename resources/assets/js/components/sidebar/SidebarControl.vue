<template>
    <div>
        <b-row class="sidebar-control">
            <!-- Two Columns -->
            <template v-if="double">
                <b-col cols="6">
                    <b-form-group :label="label">
                        <slot name="first"></slot>
                    </b-form-group>
                </b-col>

                <b-col cols="6">
                    <b-form-group label="&nbsp;">
                        <slot name="second"></slot>
                    </b-form-group>
                </b-col>
            </template>

            <!-- Single Column -->
            <template v-else>
                <b-col>
                    <b-form-group :label="label">
                        <slot></slot>
                    </b-form-group>
                </b-col>
            </template>
        </b-row>
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