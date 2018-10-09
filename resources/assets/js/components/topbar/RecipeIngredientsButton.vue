<template>
    <top-bar-control v-b-modal.recipeIngredientsModal variant="outline-success" icon="utensils" label="Recipe Ingredients"></top-bar-control>
</template>

<script>
import TopBarControl from './TopBarControl';
import RecipeIngredientsModal from '../dialogs/RecipeIngredientsModal'

export default {
    name: "RecipeIngredientsButton",

    components: {
        RecipeIngredientsModal, TopBarControl,
    },
}
</script>

