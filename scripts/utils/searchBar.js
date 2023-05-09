import { generateRecipes } from "../factories/recipes.js";

export function searchBar(recipes) {
    //DOM
    const searchBarInput = document.querySelector(".search-bar__input");

    //Genère les recettes par défaut
    generateRecipes(recipes);

    searchBarInput.addEventListener("input", function () {
        const searchWord = searchBarInput.value.toLowerCase().trim();
        const lengthSearchWord = searchWord.length;

        if (lengthSearchWord > 2) {
            //ARRAYS
            let newSearchOfRecipes = [];
            let newSearchPerName = [];
            let newSearchPerIngredients = [];

            // filtrer chaque recette par le mot recherché et l'ajouter dans le tableau
            newSearchPerName = recipes.filter(oneRecipe => oneRecipe.name.toLowerCase().includes(searchWord));
            
            // const ingredientsMatchingWithSearchWord = recipes.filter(oneRecipe => oneRecipe.ingredients.filter(oneIngredient => oneIngredient.ingredient.toLowerCase().includes(searchWord)));
            
            // pour chaque recette, filtrer les ingredients par le mot recherché et l'ajouter au tableau
            recipes.forEach(oneRecipe => {
                const ingredientsOfOneRecipe = oneRecipe.ingredients;
                const ingredientsMatchingWithSearchWord = ingredientsOfOneRecipe.filter(oneIngredient => oneIngredient.ingredient.toLowerCase().includes(searchWord));

                if (ingredientsMatchingWithSearchWord != ""){
                    newSearchPerIngredients.push(oneRecipe);
                    // console.table(newSearchPerIngredients);
                }             
            });    

            //** OLD CODE
            // recipes.forEach(oneRecipe => {
            //     const nameOfOneRecipe = oneRecipe.name;

            //*V2
            //     if (nameOfOneRecipe.toLowerCase().includes(searchWord)) {
            //         newSearchOfRecipes.push(oneRecipe);
            //     }

                //*V1
                // let eachWordOfOneRecipe = nameOfOneRecipe.split(" ");
                // eachWordOfOneRecipe.forEach(oneWord => {
                //     if (oneWord.toLowerCase().startsWith(searchWord)){
                //         newSearchOfRecipes.push(oneRecipe);
                //     }
                // });
            // });
            generateRecipes(newSearchOfRecipes);
        } else {
            generateRecipes(recipes);
        };
    });
}