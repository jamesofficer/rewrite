<template>
    <div style="display: inherit">
        <delete-element></delete-element>

        <clone-element></clone-element>

        <move-element></move-element>
    </div>
</template>

<script>
import DeleteElement from "./DeleteElement"
import CloneElement  from "./CloneElement"
import MoveElement   from "./MoveElement"

export default {
    name: "DeleteCloneMove",

    components: {
        DeleteElement, CloneElement, MoveElement
    },
}
</script>

<style scoped>

</style>