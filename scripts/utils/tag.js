import { blueTagDOM, greenTagDOM, orangeTagDOM } from "../factories/tags.factory.js";

export function generateTags() {
    //DOM
    const listIngredients = document.querySelector(".dp-list-ingredients").querySelectorAll(".dp-list__text");
    const listAppareils = document.querySelector(".dp-list-appareils").querySelectorAll(".dp-list__text");
    const listUstensiles = document.querySelector(".dp-list-ustensiles").querySelectorAll(".dp-list__text");


    //Arrays
    const allTags = new Array;
    const allIngredientsTags = new Array;
    const allAppareilTags = new Array;
    const allUstensileTags = new Array;

    generateTagOnClick(listIngredients, allIngredientsTags, blueTagDOM);
    generateTagOnClick(listAppareils, allAppareilTags, greenTagDOM);
    generateTagOnClick(listUstensiles, allUstensileTags, orangeTagDOM);

    closeBtn(allIngredientsTags)
    console.log(allIngredientsTags.length)
}

function generateTagOnClick(list, array, tagDOM) {
    list.forEach(element => {
        element.addEventListener("click", function clickHandler() {
            array.push(element);
            tagDOM(array);
            element.removeEventListener("click", clickHandler);
        });
    });
};



function closeBtn(array) {
    if (array.length > 0) { 
        const closeBtnTag = document.querySelectorAll(".tag-block-blue");
        console.log(closeBtnTag)

        closeBtnTag.addEventListener("click", function () {
            console.log("toto");
        });
    }
}