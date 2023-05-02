import { getData } from "../factories/data.js";
import { generateRecipes } from "../factories/recipes.js";
import { searchBar } from "../utils/searchBar.js";

/**
 * Génère et affiche les recettes en asynchrone
 * @param {Object} data 
 */
async function displayRecipes(data) {
    generateRecipes(data.recipes);
}

/**
 * Initialize en asynchrone 
 */
async function init() {
    const recipes = await getData();
    displayRecipes(recipes);
    searchBar();
}

init();