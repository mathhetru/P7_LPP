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

            // pour chaque recette, reprendre le nom, séparer les mots par les espaces.
            // pour chaque mot, rechercher les premieres lettres selon le nombre de lettre inscrit dans la bar de recherche
            // si les lettres inscrits dans la bar de recherche sont les mêmes que les lettres du nom de la recette
            // alors ajouter cette recette dans le tableau 
            recipes.forEach(oneRecipe => {
                const nameOfOneRecipe = oneRecipe.name;

                if (nameOfOneRecipe.toLowerCase().includes(searchWord)) {
                    newSearchOfRecipes.push(oneRecipe);
                }

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