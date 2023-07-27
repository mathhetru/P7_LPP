import { getData } from "../factories/data.js";
import { searchBar } from "../utils/searchBar.js";
import { dropdownBoxes } from "../utils/dropdownTrigger.js";
import { getRecipesAndLists } from "../utils/searchBar.js";
import { manageClickForTags } from "../utils/eventsOnTags.js";
import { recipes } from "../data/recipes.js";

/**
 * Génère et affiche les recettes en asynchrone
 * @param {Object} data 
 */
async function displayRecipes() {
    getRecipesAndLists();
    dropdownBoxes();
    manageClickForTags();
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