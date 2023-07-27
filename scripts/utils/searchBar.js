import { generateRecipes } from "../factories/recipes.factory.js";
import { getListsInDropdowns } from "./dropdown.js";
import { searchContext } from "../data/searchContext.js";
import { recipes } from "../data/recipes.js";
import { search } from "./globalSearch.js";

/**
 * Gère la barre de recherche principale
 */
export function searchBar() {
    const searchBarInput = document.querySelector(".search-bar__input");
    searchBarInput.addEventListener("input", function () {
        const searchWord = searchBarInput.value.toLowerCase().trim();
        const lengthSearchWord = searchWord.length;
        if (lengthSearchWord > 2) {
            searchContext.textSearchContent = searchWord;
            search();
        } else {
            searchContext.textSearchContent = '';
            search();
        }
    });
}

/**
 * Filtre les recettes d'après le mot de recherche
 * @param {Object} recipes 
 * @param {string} searchWord 
 * @returns 
 */
export function searchBySearchWord(recipes, searchWord) {
    for (let i = 0; i < recipes.length; i++) {
        filterPerSearchWord(recipes[i], searchWord);
    }
    // const result = recipes.filter(oneRecipe => filterPerSearchWord(oneRecipe, searchWord));
    // return result;
}

/**
 * Retourne un boolean si le mot de recherche est dans les ingrédients ou la description ou le nom de chaque recette
 * @param {Object} recipe 
 * @param {string} word 
 * @returns {boolean}
 */
function filterPerSearchWord(recipe, word) {
    if (recipe.name.toLowerCase().includes(word)) {
        return true;
    } else if (recipe.description.toLowerCase().includes(word)) {
        return true;
    } else {
        const ingredientsMatchingWithSearchWord = recipe.ingredients.filter(oneIngredient => oneIngredient.ingredient.toLowerCase().includes(word));
        if (ingredientsMatchingWithSearchWord.length === 0) {
            return false;
        } else {
            return true;
        }
    }
}

/**
 * Genère les recettes et le contenu des listes dans les dropdowns
 * @param {Object} recipes 
 */
export function getRecipesAndLists(){
    generateRecipes(recipes.allRecipes);
    getListsInDropdowns(recipes.allRecipes);
}


