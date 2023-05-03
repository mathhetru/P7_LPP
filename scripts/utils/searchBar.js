import { generateRecipes } from "../factories/recipes.js";

export function searchBar(recipes) {
    //DOM
    const searchBarForm = document.getElementById("search-bar");
    const searchBarInput = document.querySelector(".search-bar__input");
    const searchBarBtn = document.querySelector(".search-bar__btn");

    //Genère les recettes par défaut
    generateRecipes(recipes);

    //ARRAYS
    let newSearchOfRecipes = [];


    searchBarInput.addEventListener("input", function () {
        const searchWord = searchBarInput.value.toLowerCase().trim();
        const lengthSearchWord = searchBarInput.value.length;

        if (searchWord.length > 2) {
            // remise à zéro du tableau de recettes cherchées
            newSearchOfRecipes = [];

            recipes.forEach(oneRecipe => {
                const nameOfOneRecipe = oneRecipe.name;
                let eachWordOfOneRecipe = nameOfOneRecipe.split(" ");

                eachWordOfOneRecipe.forEach(oneWord => {
                    let letterOfWordTitle = oneWord.substring(0, lengthSearchWord).toLowerCase();;
                    if (searchWord === letterOfWordTitle) {
                        newSearchOfRecipes.push(oneRecipe);
                    }
                });
            });
            generateRecipes(newSearchOfRecipes);
        } else {
            generateRecipes(recipes);
        };
    });







    // searchBarForm.addEventListener("submit", function() {
    //     console.log("toto");
    // })
}