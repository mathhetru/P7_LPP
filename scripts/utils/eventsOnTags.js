import { blueTagDOM, greenTagDOM, orangeTagDOM } from "../factories/tags.factory.js";
import { searchContext } from "../data/searchContext.js";
import { search } from "./globalSearch.js";

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
const appliancesManager = manageSelectedElements(searchContext.appliancesContent);
const ustensilsManager = manageSelectedElements(searchContext.ustensilesContent);

/**
 * génère les tags
 */
export function manageClickForTags() {
    const listIngredients = document.querySelector(".dp-list-ingredients").querySelectorAll(".dp-list__text");
    const listAppareils = document.querySelector(".dp-list-appareils").querySelectorAll(".dp-list__text");
    const listUstensiles = document.querySelector(".dp-list-ustensiles").querySelectorAll(".dp-list__text");

    generateTagOnClick(listIngredients, blueTagDOM, ".tag-block-blue__icon", ingredientsManager, searchContext.ingredientsContent);
    generateTagOnClick(listAppareils, greenTagDOM, ".tag-block-green__icon", appliancesManager, searchContext.appliancesContent);
    generateTagOnClick(listUstensiles, orangeTagDOM, ".tag-block-orange__icon", ustensilsManager, searchContext.ustensilesContent);
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
            closeBtnOnTags(tagDOM, className, ElementManager, ElementsSelected);
            ElementsSelected = ElementManager.getSelectedElements();
            search();
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
function closeBtnOnTags(tagDOM, className, ElementManager, ElementsSelected) {
    const closeBtns = document.querySelectorAll(className);
    closeBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            const elementToDelete = btn.previousElementSibling.innerHTML;
            ElementManager.removeElement(elementToDelete);
            tagDOM(ElementManager.getSelectedElements());
            closeBtnOnTags(tagDOM, className, ElementManager, ElementsSelected);
            ElementsSelected = ElementManager.getSelectedElements();
            search();
        });
    });
}