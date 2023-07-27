import { getData } from "../factories/data.js";
import { searchBar } from "../utils/searchBar.js";
import { dropdownBoxes } from "../utils/dropdownTrigger.js";
import { getRecipesAndLists } from "../utils/searchBar.js";
import { manageClicksForTags } from "../utils/eventsOnTags.js";
import { recipes } from "../data/recipes.js";

/**
 * Génère et affiche les recettes et listes dans les dropdowns 
 * Gère les triggers sur les dropdowns 
 * Manage les events clicks pour les tags
 * Gère la barre de recherche principale
 * en asynchrone
 * @param {Object} data 
 */
async function displayRecipes() {
    getRecipesAndLists();
    dropdownBoxes();
    manageClicksForTags();
    searchBar();
}

/**
 * Initialize en asynchrone 
 */
async function init() {
    const data = await getData();
    recipes.allRecipes = data.recipes;
    displayRecipes();
}

init();