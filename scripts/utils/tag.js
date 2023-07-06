import { blueTagDOM, greenTagDOM, orangeTagDOM } from "../factories/tags.factory.js";

// class SelectedIngredientsManager {
//     constructor() {
//         this.ingredients = []
//     }
//     addStuff(name) {
//         if (!this.ingredients.includes(name)) {
//             this.ingredients.push(name)
//         }
//     }
//     removeStuff(name) {
//         const index = this.ingredients.findIndex(el => el === name)
//         this.ingredients.splice(index, 1);
//     }
//     getSelectedStuffs() {
//         return this.ingredients;
//     }
// }

// class SelectedAppliancesManager {
//     constructor() {
//         this.appliances = []
//     }
//     addStuff(name) {
//         if (!this.appliances.includes(name)) {
//             this.appliances.push(name)
//         }
//     }
//     removeStuff(name) {
//         const index = this.appliances.findIndex(el => el === name)
//         this.appliances.splice(index, 1);
//     }
//     getSelectedStuffs() {
//         return this.appliances;
//     }
// }

// class SelectedUstensilsManager {
//     constructor() {
//         this.ustensils = []
//     }
//     addStuff(name) {
//         if (!this.ustensils.includes(name)) {
//             this.ustensils.push(name)
//         }
//     }
//     removeStuff(name) {
//         const index = this.ustensils.findIndex(el => el === name)
//         this.ustensils.splice(index, 1);
//     }
//     getSelectedStuffs() {
//         return this.ustensils;
//     }
// }

// const selectInstanceIngredients = new SelectedIngredientsManager()
// const selectInstanceAppliances = new SelectedAppliancesManager()
// const selectInstanceUstensils = new SelectedUstensilsManager()

/**
 * Initialization des tableaux 
 */
export const ingredientsSelected = [];
export const appliancesSelected = [];
export const ustensilsSelected = [];

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
const ingredientsManager = manageSelectedElements(ingredientsSelected);
const appliancesManager = manageSelectedElements(appliancesSelected);
const ustensilsManager = manageSelectedElements(ustensilsSelected);

/**
 * génère les tags
 */
export function generateTags() {
    //DOM
    const listIngredients = document.querySelector(".dp-list-ingredients").querySelectorAll(".dp-list__text");
    const listAppareils = document.querySelector(".dp-list-appareils").querySelectorAll(".dp-list__text");
    const listUstensiles = document.querySelector(".dp-list-ustensiles").querySelectorAll(".dp-list__text");

    generateTagOnClick(listIngredients, blueTagDOM, ".tag-block-blue__icon", ingredientsManager, ingredientsSelected);
    generateTagOnClick(listAppareils, greenTagDOM, ".tag-block-green__icon", appliancesManager, appliancesSelected);
    generateTagOnClick(listUstensiles, orangeTagDOM, ".tag-block-orange__icon", ustensilsManager, ustensilsSelected);
}

/**
 * Génère un tag au click sur un élement dans une des listes, retourne également le tableau d'élements selectionnés
 * @param {string} list 
 * @param {function} tagDOM 
 * @param {string} className 
 * @param {function} ElementManager 
 * @param {array} ElementSelected 
 */
function generateTagOnClick(list, tagDOM, className, ElementManager, ElementSelected) {
    list.forEach(element => {
        element.addEventListener("click", function () {
            ElementManager.addElement(element.innerText);
            tagDOM(ElementManager.getSelectedElements());
            closeBtn(tagDOM, className, ElementManager, ElementSelected);
            ElementSelected = ElementManager.getSelectedElements();
        });
    });
};

/**
 * retire un tag au click sur la croix de celui-ci, retourne égalemeent le tableau d'élements selectionnés
 * @param {function} tagDOM 
 * @param {string} className 
 * @param {function} ElementManager 
 * @param {array} ElementSelected 
 */
function closeBtn(tagDOM, className, ElementManager, ElementSelected) {
    const closeBtns = document.querySelectorAll(className);
    closeBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            const elementToDelete = btn.previousElementSibling.innerHTML;
            ElementManager.removeElement(elementToDelete);
            tagDOM(ElementManager.getSelectedElements());
            closeBtn(tagDOM, className, ElementManager, ElementSelected);
            ElementSelected = ElementManager.getSelectedElements();
        });
    });
}

export function displayRecipesByTags(recipes) {
    console.log(recipes);
    console.log(ingredientsSelected);
}



