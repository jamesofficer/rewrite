<template>
    <div>
        <portal to="top-bar">
            <slot></slot>
        </portal>
    </div>
</template>

<script>
export default {
    name: "Sidebar",
}
</script>
