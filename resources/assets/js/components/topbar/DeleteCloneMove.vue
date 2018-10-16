<template>
    <div style="display: inherit">
        <delete-component></delete-component>

        <clone-component></clone-component>

        <move-component></move-component>
    </div>
</template>

<script>
import DeleteComponent from "./DeleteComponent"
import CloneComponent  from "./CloneComponent"
import MoveComponent   from "./MoveComponent"

export default {
    name: "DeleteCloneMove",

    components: {
        DeleteComponent, CloneComponent, MoveComponent
    }
}
</script>

<style scoped>

</style>