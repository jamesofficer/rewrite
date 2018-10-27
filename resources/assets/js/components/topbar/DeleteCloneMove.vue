<template>
    <div style="display: inherit">
        <delete-element></delete-element>

        <clone-component></clone-component>

        <move-component></move-component>
    </div>
</template>

<script>
import DeleteElement  from "./DeleteElement"
import CloneComponent from "./CloneComponent"
import MoveComponent  from "./MoveComponent"

export default {
    name: "DeleteCloneMove",

    components: {
        DeleteElement, CloneComponent, MoveComponent
    }
}
</script>

<style scoped>

</style>