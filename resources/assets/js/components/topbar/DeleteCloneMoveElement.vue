<template>
    <div style="display: inherit">
        <delete-element></delete-element>

        <clone-element :elementType="elementType"></clone-element>

        <move-element :elementType="elementType"></move-element>
    </div>
</template>

<script>
import DeleteElement from "./DeleteElement"
import CloneElement  from "./CloneElement"
import MoveElement   from "./MoveElement"

export default {
    name: "DeleteCloneMove",

    props: {
        // We default this to a Component so we don't have to declare it manually for each Component.
    	elementType: {
    		type: String,
            default: "Component"
    	}
    },

    components: {
        DeleteElement, CloneElement, MoveElement
    },
}
</script>

<style scoped>

</style>