import { blueTagDOM, greenTagDOM, orangeTagDOM } from "../factories/tags.factory.js";

// function manageSelectedIngredients() {
//     const ingredients = [];
//     return {
//         addIngredient(ingredientName) {
//             ingredients.push(ingredientName)
//         },
//         removeIngredient(ingredientName) {
//             const index = ingredients.findIndex(el => el === ingredientName)
//             ingredients.splice(index, 1);
//         },
//         getSelectedIngredients() {
//             return ingredients;
//         }
//     }
// }

// const ingredientsManager = manageSelectedIngredients();

class SelectedIngredientsManager {
    constructor() {
        this.ingredients = []
    }
    addIngredient(name) {
        if (!this.ingredients.includes(name)) {
            this.ingredients.push(name)
        }
    }
    removeIngredient(name) {
        const index = this.ingredients.findIndex(el => el === name)
        this.ingredients.splice(index, 1);
    }
    getSelectedIngredients() {
        return this.ingredients;
    }
}

const selectInstance = new SelectedIngredientsManager()


export function generateTags() {
    //DOM
    const listIngredients = document.querySelector(".dp-list-ingredients").querySelectorAll(".dp-list__text");
    const listAppareils = document.querySelector(".dp-list-appareils").querySelectorAll(".dp-list__text");
    const listUstensiles = document.querySelector(".dp-list-ustensiles").querySelectorAll(".dp-list__text");

    generateTagOnClick(listIngredients, blueTagDOM, ".tag-block-blue__icon");
    // generateTagOnClick(listAppareils, greenTagDOM, ".tag-block-green__icon");
    // generateTagOnClick(listUstensiles, orangeTagDOM, ".tag-block-orange__icon");
}

function generateTagOnClick(list, tagDOM, className) {
    list.forEach(element => {
        element.addEventListener("click", function () {
            selectInstance.addIngredient(element.innerText);
            tagDOM(selectInstance.getSelectedIngredients());
            closeBtn(tagDOM, className);
        });
    });
};

function closeBtn(tagDOM, className) {
    const closeBtns = document.querySelectorAll(className);
    closeBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            const elementToDelete = btn.previousElementSibling.innerHTML;
            selectInstance.removeIngredient(elementToDelete);
            tagDOM(selectInstance.getSelectedIngredients());
            closeBtn(tagDOM, className);
        });
    });
}

