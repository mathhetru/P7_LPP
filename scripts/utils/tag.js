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

// TODO : créer qu'une seule class generique, ou passer sur une fonction 
class SelectedIngredientsManager {
    constructor() {
        this.ingredients = []
    }
    addStuff(name) {
        if (!this.ingredients.includes(name)) {
            this.ingredients.push(name)
        }
    }
    removeStuff(name) {
        const index = this.ingredients.findIndex(el => el === name)
        this.ingredients.splice(index, 1);
    }
    getSelectedStuffs() {
        return this.ingredients;
    }
}

class SelectedAppliancesManager {
    constructor() {
        this.appliances = []
    }
    addStuff(name) {
        if (!this.appliances.includes(name)) {
            this.appliances.push(name)
        }
    }
    removeStuff(name) {
        const index = this.appliances.findIndex(el => el === name)
        this.appliances.splice(index, 1);
    }
    getSelectedStuffs() {
        return this.appliances;
    }
}

class SelectedUstensilsManager {
    constructor() {
        this.ustensils = []
    }
    addStuff(name) {
        if (!this.ustensils.includes(name)) {
            this.ustensils.push(name)
        }
    }
    removeStuff(name) {
        const index = this.ustensils.findIndex(el => el === name)
        this.ustensils.splice(index, 1);
    }
    getSelectedStuffs() {
        return this.ustensils;
    }
}

const selectInstanceIngredients = new SelectedIngredientsManager()
const selectInstanceAppliances = new SelectedAppliancesManager()
const selectInstanceUstensils = new SelectedUstensilsManager()


export function generateTags() {
    //DOM
    const listIngredients = document.querySelector(".dp-list-ingredients").querySelectorAll(".dp-list__text");
    const listAppareils = document.querySelector(".dp-list-appareils").querySelectorAll(".dp-list__text");
    const listUstensiles = document.querySelector(".dp-list-ustensiles").querySelectorAll(".dp-list__text");

    generateTagOnClick(listIngredients, blueTagDOM, ".tag-block-blue__icon", selectInstanceIngredients);
    generateTagOnClick(listAppareils, greenTagDOM, ".tag-block-green__icon", selectInstanceAppliances);
    generateTagOnClick(listUstensiles, orangeTagDOM, ".tag-block-orange__icon", selectInstanceUstensils);
}

function generateTagOnClick(list, tagDOM, className, selectInstance) {
    list.forEach(element => {
        element.addEventListener("click", function () {
            selectInstance.addStuff(element.innerText);
            tagDOM(selectInstance.getSelectedStuffs());
            closeBtn(tagDOM, className, selectInstance);
        });
    });
};

function closeBtn(tagDOM, className, selectInstance) {
    const closeBtns = document.querySelectorAll(className);
    closeBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            const elementToDelete = btn.previousElementSibling.innerHTML;
            selectInstance.removeStuff(elementToDelete);
            tagDOM(selectInstance.getSelectedStuffs());
            closeBtn(tagDOM, className, selectInstance);
            test = selectInstance.getSelectedStuffs();
        });
    });
}




