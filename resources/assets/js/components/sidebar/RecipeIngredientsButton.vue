<template>
    <sidebar-control v-b-modal.recipeIngredientsModal variant="outline-success" icon="utensils" label="Recipe Ingredients"></sidebar-control>
</template>

<script>
import SidebarControl from './SidebarControl';
import RecipeIngredientsModal from '../dialogs/RecipeIngredientsModal'

export default {
    name: "RecipeIngredientsButton",

    components: {
        RecipeIngredientsModal, SidebarControl,
    },
}
</script>

