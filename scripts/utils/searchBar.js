import { generateRecipes } from "../factories/recipes.factory.js";
import { getListsInDropdowns } from "./dropdown.js";
import { searchContext } from "../data/searchContext.js";
import { recipes } from "../data/recipes.js";
import { search } from "./globalSearch.js";

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

export function searchBySearchWord(recipes, searchWord) {
    const result = recipes.filter(oneRecipe => filterPerSearchWord(oneRecipe, searchWord));
    return result;
}

/**
 * Filtre les recettes d'après le mot de recherche
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
 * Genère les recettes et le contenu des array
 * @param {Object} recipes 
 */
function getRecipesAndLists(recipes){
    const allIngredientsOfRecipes = recipes.flatMap(recipe => recipe.ingredients);
    const allIngredients = allIngredientsOfRecipes.map(ingredient => ingredient.ingredient.toLowerCase());

    const allAppliance = recipes.map(recipes => recipes.appliance.toLowerCase());

    const allUstensilsUpperCase = recipes.flatMap(recipes => recipes.ustensils);
    const allUstensils = allUstensilsUpperCase.map(allUstensilsUpperCase => allUstensilsUpperCase.toLowerCase());

    generateRecipes(recipes);
    generateDPListDOM(allIngredients, ".dp-list-ingredients");
    generateDPListDOM(allAppliance, ".dp-list-appareils");
    generateDPListDOM(allUstensils, ".dp-list-ustensiles");
    generateTags();

    updateListDPWithHisInput(".dp-ingredients__input", allIngredients, ".dp-list-ingredients");
    updateListDPWithHisInput(".dp-appareils__input", allAppliance, ".dp-list-appareils");
    updateListDPWithHisInput(".dp-ustensiles__input", allUstensils, ".dp-list-ustensiles");
}

/**
 * Génère la liste des ingredients, appareils, ustensiles d'après le contenu de recherche dans l'input
 * @param {string} inputName 
 * @param {string} allDevices 
 * @param {string} DPName 
 */
function updateListDPWithHisInput(inputName, allDevices, DPName) {
    const DPinput = document.querySelector(inputName);
    DPinput.addEventListener("input", function (e) { 
        const searchWord = DPinput.value.toLowerCase().trim();
        const lengthSearchWord = searchWord.length;
        if (lengthSearchWord > 2) {
            const newSearchOfTheList = allDevices.filter(oneDevice => oneDevice.toLowerCase().includes(searchWord));
            generateDPListDOM(newSearchOfTheList, DPName);
        } else {
            generateDPListDOM(allDevices, DPName);
        };
    });
}


