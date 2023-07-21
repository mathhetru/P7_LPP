import { blueTagDOM, greenTagDOM, orangeTagDOM } from "../factories/tags.factory.js";
import { searchContext } from "../data/searchContext.js";

/**
 * function qui ajoute dans un tableau, retire du tableau et retourne le tableau d'elements selectionnés
 * @param {array} arrayName 
 * @returns 
 */
function manageSelectedElements(arrayName) {
    return {
        addElement(name) {
            if (!arrayName.includes(name)) {
                arrayName.push(name);
            }
        },
        removeElement(name) {
            const index = arrayName.findIndex(el => el === name)
            arrayName.splice(index, 1);
        },
        getSelectedElements() {
            return arrayName;
        }
    }
}
const ingredientsManager = manageSelectedElements(searchContext.ingredientsContent);
const appliancesManager = manageSelectedElements(searchContext.ustensilesContent);
const ustensilsManager = manageSelectedElements(searchContext.appareilsContent);

/**
 * génère les tags
 */
export function generateTags() {
    const listIngredients = document.querySelector(".dp-list-ingredients").querySelectorAll(".dp-list__text");
    const listAppareils = document.querySelector(".dp-list-appareils").querySelectorAll(".dp-list__text");
    const listUstensiles = document.querySelector(".dp-list-ustensiles").querySelectorAll(".dp-list__text");

    generateTagOnClick(listIngredients, blueTagDOM, ".tag-block-blue__icon", ingredientsManager, searchContext.ingredientsContent);
    generateTagOnClick(listAppareils, greenTagDOM, ".tag-block-green__icon", appliancesManager, searchContext.ustensilesContent);
    generateTagOnClick(listUstensiles, orangeTagDOM, ".tag-block-orange__icon", ustensilsManager, searchContext.appareilsContent);
}

/**
 * Génère un tag au click sur un élement dans une des listes, retourne également le tableau d'élements selectionnés
 * @param {NodeList} list 
 * @param {Function} tagDOM 
 * @param {string} className 
 * @param {Function} ElementManager 
 * @param {Array} ElementsSelected 
 */
function generateTagOnClick(list, tagDOM, className, ElementManager, ElementsSelected) {
    list.forEach(element => {
        element.addEventListener("click", function () {
            ElementManager.addElement(element.innerText);
            tagDOM(ElementManager.getSelectedElements());
            closeBtn(tagDOM, className, ElementManager, ElementsSelected);
            ElementsSelected = ElementManager.getSelectedElements();
        });
    });
};

/**
 * retire un tag au click sur la croix de celui-ci, retourne égalemeent le tableau d'élements selectionnés
 * @param {Function} tagDOM 
 * @param {string} className 
 * @param {Function} ElementManager 
 * @param {Array} ElementsSelected 
 */
function closeBtn(tagDOM, className, ElementManager, ElementsSelected) {
    const closeBtns = document.querySelectorAll(className);
    closeBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            const elementToDelete = btn.previousElementSibling.innerHTML;
            ElementManager.removeElement(elementToDelete);
            tagDOM(ElementManager.getSelectedElements());
            closeBtn(tagDOM, className, ElementManager, ElementsSelected);
            ElementsSelected = ElementManager.getSelectedElements();
        });
    });
}

export function displayRecipesByTags(recipes, tags) {
    console.log(tags)
    const recipesFromTags = recipes.filter(oneRecipe => filterPerTags(oneRecipe, tags))
    return recipesFromTags
    /*const newSearchOfRecipesByTagsIngredients = tags.forEach(tag => recipes.filter(oneRecipe => filterPerTags(oneRecipe, tag)));
    console.log(newSearchOfRecipesByTagsIngredients);*/
    // if (tags.ingredientsContent.length > 0) {
    //     console.log("toto");
    // }
}

/**
 * Filtre les recettes d'après les tags
 * @param {Object} recipe 
 * @param {Array} tags
 * @returns {boolean}
 */
function filterPerTags(recipe, tags) {
    const ingredientsAsList = recipe.ingredients.map(oneIngredient => oneIngredient.ingredient.toLowerCase());
    const recipeContainsAllTags = tags.every(tag => ingredientsAsList.includes(tag))
    return recipeContainsAllTags;
}