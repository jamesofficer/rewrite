<template>
    <portal to="top-bar">
        <b-container>
            <slot></slot>
        </b-container>
    </portal>
</template>

<script>
export default {
    name: "Sidebar",
}
</script>
