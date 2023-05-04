import { getData } from "../factories/data.js";
import { searchBar } from "../utils/searchBar.js";
import { dropdownBoxes } from "../utils/dropdown.js";

/**
 * Génère et affiche les recettes en asynchrone
 * @param {Object} data 
 */
async function displayRecipes(data) {
    searchBar(data.recipes);
    dropdownBoxes();
}

/**
 * Initialize en asynchrone 
 */
async function init() {
    const recipes = await getData();
    displayRecipes(recipes);
}

init();