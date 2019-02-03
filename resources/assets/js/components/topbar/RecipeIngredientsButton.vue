<template>
    <topbar-button v-b-modal.recipeIngredientsModal variant="outline-success" icon="utensils" label="Recipe Ingredients"></topbar-button>
</template>

<script>
import TopbarButton from './TopbarButton';
import RecipeIngredientsModal from '../dialogs/RecipeIngredientsModal'

export default {
    name: "RecipeIngredientsButton",

    components: {
        RecipeIngredientsModal, TopbarButton,
    },
}
</script>

