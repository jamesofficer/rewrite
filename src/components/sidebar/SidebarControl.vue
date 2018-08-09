<template>
    <el-row class="sidebar-control">

        <!-- Two Columns -->
        <template v-if="double">
            <el-row v-if="label">
                <label>{{ label }}</label>
            </el-row>

            <el-col :span="12">
                <slot name="first"></slot>
            </el-col>

            <el-col :span="12">
                <slot name="second"></slot>
            </el-col>
        </template>

        <!-- Single Column -->
        <template v-else>
            <label v-if="label">{{ label }}</label>

            <el-col :span="24">
                <slot></slot>
            </el-col>
        </template>

    </el-row>
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
