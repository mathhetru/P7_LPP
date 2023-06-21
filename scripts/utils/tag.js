import { blueTagDOM, greenTagDOM, orangeTagDOM } from "../factories/tags.factory.js";

export function generateTags() {
    //DOM
    const listIngredients = document.querySelector(".dp-list-ingredients").querySelectorAll(".dp-list__text");
    const listAppareils = document.querySelector(".dp-list-appareils").querySelectorAll(".dp-list__text");
    const listUstensiles = document.querySelector(".dp-list-ustensiles").querySelectorAll(".dp-list__text");

    //Arrays
    const allIngredientsTags = new Array;
    const allAppareilTags = new Array;
    const allUstensileTags = new Array;

    generateTagOnClick(listIngredients, allIngredientsTags, blueTagDOM, ".tag-block-blue__icon");
    // generateTagOnClick(listAppareils, allAppareilTags, greenTagDOM, ".tag-block-green__icon");
    // generateTagOnClick(listUstensiles, allUstensileTags, orangeTagDOM, ".tag-block-orange__icon");
    // allIngredientsTags = localStorage.getItem("allIngredientsTags");
    // blueTagDOM(allIngredientsTags);
    // closeBtn(className, array);
}

function generateTagOnClick(list, array, tagDOM, className) {
    list.forEach(element => {
        element.addEventListener("click", function clickHandler() {
            array.push(element);
            tagDOM(array);
            closeBtn(tagDOM, className, array);
            // console.log(array);
            // const test = localStorage.setItem("allIngredientsTags", array);
            // console.log(test);
            element.removeEventListener("click", clickHandler);
        });
    });
};

function closeBtn(tagDOM, className, array) {
    const closeBtns = document.querySelectorAll(className);

    closeBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            // const listOfTags = array.map(array => array.innerHTML);
            const elementToDelete = btn.previousElementSibling.innerHTML;
            console.log(elementToDelete);
            const listOfTagsToKeep = array.filter(elementsToKeep => elementToDelete !== elementsToKeep.outerText);
            console.log(listOfTagsToKeep);
            tagDOM(listOfTagsToKeep);
        });
    });
}