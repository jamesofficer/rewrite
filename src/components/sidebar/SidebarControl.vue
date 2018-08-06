<template>
    <el-row class="sidebar-control">
        <label v-if="label">{{ label }}</label>

        <el-col :span="24">
            <slot></slot>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "SidebarControl",

    props: {
        label: {
            type: String,
            required: false,
        }
    },
}
</script>
