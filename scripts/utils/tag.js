import { blueTagDOM, greenTagDOM, orangeTagDOM } from "../factories/tags.factory.js";

export function generateTags() {
    //DOM 
    const tagBlock = document.querySelector(".tag-block");

    //DOM lists
    const listIngredients = document.querySelector(".dp-list-ingredients").querySelectorAll(".dp-list__text");
    const listAppareils = document.querySelector(".dp-list-appareils").querySelectorAll(".dp-list__text");
    const listUstensiles = document.querySelector(".dp-list-ustensiles").querySelectorAll(".dp-list__text");

    generateTagOnClick(listIngredients, blueTagDOM);
    generateTagOnClick(listAppareils, greenTagDOM);
    generateTagOnClick(listUstensiles, orangeTagDOM);
}

function generateTagOnClick(list, tagDOM) {
    list.forEach(element => {
        // console.log(eachIngredient.innerText);
        element.addEventListener("click", function () {
            tagDOM(element.innerText);
        });
    });
};