import { searchContext } from "../data/searchContext.js";

export function displayRecipesByTags(recipes) {
    const ingredientsTags = searchContext.ingredientsContent;
    const appliancesTags = searchContext.appliancesContent;
    const ustensilsTags = searchContext.ustensilesContent;

    const recipesFromIngredientsTags = recipes.filter(oneRecipe => filterPerIngredientsTags(oneRecipe, ingredientsTags));

    const recipesFromAppliancesTags = recipesFromIngredientsTags.filter(oneRecipe => filterPerAppliancesTags(oneRecipe, appliancesTags));

    const recipesFromUstensilsTags = recipesFromAppliancesTags.filter(oneRecipe => filterPerUstensilsTags(oneRecipe, ustensilsTags));

    return recipesFromUstensilsTags;
}

/**
 * Filtre les recettes d'après les tags ingredients
 * @param {Object} recipe 
 * @param {Array} tags
 * @returns {boolean}
 */
function filterPerIngredientsTags(recipe, tags) {
    const ingredientsAsList = recipe.ingredients.map(oneIngredient => oneIngredient.ingredient.toLowerCase());
    const recipeContainsAllTags = tags.every(tag => ingredientsAsList.includes(tag))
    return recipeContainsAllTags;
}

function filterPerAppliancesTags(recipe, tags) {
    const appliancesAsList = recipe.appliance.toLowerCase();
    const recipeContainsAllTags = tags.every(tag => appliancesAsList.includes(tag));
    return recipeContainsAllTags;
}

function filterPerUstensilsTags(recipe, tags) {
    const ustensilsAsList = recipe.ustensils.flatMap(oneUstensil => oneUstensil.toLowerCase());
    const recipeContainsAllTags = tags.every(tag => ustensilsAsList.includes(tag));
    return recipeContainsAllTags;
}