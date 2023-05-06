import { generateRecipes } from "../factories/recipes.js";

export function searchBar(recipes) {
    //DOM
    const searchBarInput = document.querySelector(".search-bar__input");

    //Genère les recettes par défaut
    generateRecipes(recipes);

    //ARRAYS
    let newSearchOfRecipes = [];

    searchBarInput.addEventListener("input", function () {
        const searchWord = searchBarInput.value.toLowerCase().trim();
        const lengthSearchWord = searchWord.length;

        if (lengthSearchWord > 2) {
            // remise à zéro du tableau de recettes cherchées
            newSearchOfRecipes = [];

            // ! changer par un filter() et faire la recherche sur les ingrédients et la description
            // pour chaque recette, reprendre le nom, si le mot recherché est inclus dans un des mots du nom alors ajouter cette recette dans le tableau 
            recipes.forEach(oneRecipe => {
                const nameOfOneRecipe = oneRecipe.name;

                if (nameOfOneRecipe.toLowerCase().includes(searchWord)) {
                    newSearchOfRecipes.push(oneRecipe);
                }

                //* OLD CODE
                // let eachWordOfOneRecipe = nameOfOneRecipe.split(" ");
                // eachWordOfOneRecipe.forEach(oneWord => {
                //     if (oneWord.toLowerCase().startsWith(searchWord)){
                //         newSearchOfRecipes.push(oneRecipe);
                //     }
                // });
            });
            generateRecipes(newSearchOfRecipes);
        } else {
            generateRecipes(recipes);
        };
    });
}