import { generateRecipes } from "../factories/recipes.factory.js";
import { generateDPListDOM } from "../factories/dropdown.factory.js";
import { generateTags } from "./tag.js";
/**
 * Genère les recettes affichées, de base ou selon le mot de recherche
 * @param {Object} recipes 
 */
export function searchBar(recipes) {
    //DOM
    const searchBarInput = document.querySelector(".search-bar__input");

    // Génère toutes les recettes et tout le contenu des arrays des dropdowns
    getRecipesAndLists(recipes);
    searchBarInput.addEventListener("input", function () {
        const searchWord = searchBarInput.value.toLowerCase().trim();
        const lengthSearchWord = searchWord.length;
        const oupsSentence = document.querySelector(".main-oups");

        if (lengthSearchWord > 2) {
            // Filtre chaque recette d'après le mot de recherche et l'ajoute dans l'array
            const newSearchOfRecipes = recipes.filter(oneRecipe => filterPerSearchWord(oneRecipe, searchWord));

            // Genère les recettes recherchées et le contenu des arrays à afficher dans les dropdowns
            getRecipesAndLists(newSearchOfRecipes);

            if (newSearchOfRecipes.length === 0) {
                oupsSentence.classList.remove("hide");
            } else {
                oupsSentence.classList.add("hide");
            }

        } else {
            // Génère toutes les recettes et tout le contenu des arrays des dropdowns
            getRecipesAndLists(recipes);
        };
    });
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
 * Genère les recettes et le contenu des arrays à afficher dans les dropdowns
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

    displayListDPWithSearchWord(".dp-ingredients__input", allIngredients, ".dp-list-ingredients");
    displayListDPWithSearchWord(".dp-appareils__input", allAppliance, ".dp-list-appareils");
    displayListDPWithSearchWord(".dp-ustensiles__input", allUstensils, ".dp-list-ustensiles");
}

/**
 * Génère la liste des ingredients, appareils, ustensiles d'après l'input de recherche
 * @param {string} inputName 
 * @param {string} allDevices 
 * @param {string} DPName 
 */
function displayListDPWithSearchWord(inputName, allDevices, DPName) {
    //DOM
    const DPinput = document.querySelector(inputName);

    DPinput.addEventListener("input", function () { 
        const searchWord = DPinput.value.toLowerCase().trim();
        const lengthSearchWord = searchWord.length;
        if (lengthSearchWord > 2) {
            const newSearchOfTheList = allDevices.filter(oneDevice => oneDevice.toLowerCase().includes(searchWord));
            generateDPListDOM(newSearchOfTheList, DPName);
            generateTags();
        } else {
            generateDPListDOM(allDevices, DPName);
            generateTags();
        };
    });
}