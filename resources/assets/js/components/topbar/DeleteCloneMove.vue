<template>
    <div style="display: inherit">
        <delete-element></delete-element>

        <clone-element :elementType="elementType"></clone-element>

        <move-component></move-component>
    </div>
</template>

<script>
import DeleteElement  from "./DeleteElement"
import CloneElement from "./CloneElement"
import MoveComponent  from "./MoveComponent"

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
        DeleteElement, CloneElement, MoveComponent
    },
}
</script>

<style scoped>

</style>