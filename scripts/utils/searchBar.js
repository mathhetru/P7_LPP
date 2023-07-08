import { generateRecipes } from "../factories/recipes.factory.js";
import { generateDPListDOM } from "../factories/dropdown.factory.js";
import { generateTags } from "./tag.js";
import { searchContext } from "../data/searchContext.js";
import { displayRecipesByTags } from "../utils/tag.js";

/**
 * Genère les recettes affichées, de base ou selon le mot de recherche
 * @param {Object} recipes 
 */
export function searchBar(recipes) {
    const searchBarInput = document.querySelector(".search-bar__input");
    
    // Génère toutes les recettes et tout le contenu des arrays des dropdowns
    getRecipesAndLists(recipes);
    displayRecipesByTags(recipes, searchContext);

    searchBarInput.addEventListener("input", function () {
        const searchWord = searchBarInput.value.toLowerCase().trim();

        searchContext.textSearchContent = searchWord;
        const lengthSearchWord = searchWord.length;

        if (lengthSearchWord > 2) {
            // Filtre chaque recette d'après le mot de recherche et l'ajoute dans l'array
            const newSearchOfRecipes = searchByTagsAndSearchWord(recipes, searchWord);
            console.log(searchContext.ingredientsContent);
            console.log(newSearchOfRecipes);

            // Genère les recettes recherchées et le contenu des arrays à afficher dans les dropdowns
            getRecipesAndLists(newSearchOfRecipes);

            // Affiche la phrase "oups"
            nothingToDisplay(newSearchOfRecipes)
        } else {

            //
            
            // Génère toutes les recettes et tout le contenu des arrays des dropdowns
            getRecipesAndLists(recipes);

            // Affiche la phrase "oups"
            nothingToDisplay(recipes)
        };
    });
}

export function searchByTagsAndSearchWord(recipes, searchWord) {
    const result1 = recipes.filter(oneRecipe => filterPerSearchWord(oneRecipe, searchWord));
    return result1
    // const result2 = filterByTags(result1)
}


/**
 * Affiche une phrase si aucune recette n'est trouvée
 * @param {Array} recipes 
 */
function nothingToDisplay(recipes) {
    const oupsSentence = document.querySelector(".main-oups");
    if (recipes.length === 0) {
        oupsSentence.classList.remove("hide");
    } else {
        oupsSentence.classList.add("hide");
    }
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
    generateTags(recipes);

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


