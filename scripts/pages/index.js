import { getData } from "../factories/data.js";
import { searchBar } from "../utils/searchBar.js";
import { dropdownBoxes } from "../utils/dropdown.js";
import { generateRecipes } from "../factories/recipes.factory.js";
import { getRecipesAndLists } from "../utils/searchBar.js";
import { generateTags } from "../utils/tag.js";
import { recipes } from "../data/recipes.js";

/**
 * Génère et affiche les recettes en asynchrone
 * @param {Object} data 
 */
async function displayRecipes() {
    getRecipesAndLists();
    dropdownBoxes();
    generateTags();
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