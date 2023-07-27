import { searchContext } from "../data/searchContext.js";

/**
 * retourne les recettes contenant:
 * - soit toutes les recettes;
 * - soit les recettes contenant le ou les tags ingredients et/ou;
 * - les recettes contenant le ou les tags appareils et/ou;
 * - les recettes contenant le ou les tags ustensiles
 * @param {Object} recipes 
 * @returns {array}
 */
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
 * Retourne un boolean si la recette contient le ou les tags ingrédients
 * @param {Object} recipe 
 * @param {Array} tags
 * @returns {boolean}
 */
function filterPerIngredientsTags(recipe, tags) {
    const ingredientsAsList = recipe.ingredients.map(oneIngredient => oneIngredient.ingredient.toLowerCase());
    const recipeContainsAllTags = tags.every(tag => ingredientsAsList.includes(tag));
    return recipeContainsAllTags;
}

/**
 * Retourne un boolean si la recette contient le ou les tags appareils
 * @param {Object} recipe 
 * @param {Array} tags
 * @returns {boolean}
 */
function filterPerAppliancesTags(recipe, tags) {
    const appliancesAsList = recipe.appliance.toLowerCase();
    const recipeContainsAllTags = tags.every(tag => appliancesAsList.includes(tag));
    return recipeContainsAllTags;
}

/**
 * Retourne un boolean si la recette contient le ou les tags ustensiles
 * @param {Object} recipe 
 * @param {Array} tags
 * @returns {boolean}
 */
function filterPerUstensilsTags(recipe, tags) {
    const ustensilsAsList = recipe.ustensils.flatMap(oneUstensil => oneUstensil.toLowerCase());
    const recipeContainsAllTags = tags.every(tag => ustensilsAsList.includes(tag));
    return recipeContainsAllTags;
}