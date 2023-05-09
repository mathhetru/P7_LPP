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
            // ARRAYS
            let newSearchOfRecipes = [];
            // let newSearchPerName = [];
            // let newSearchPerIngredients = [];
            // let newSearchPerDescription = [];

            // // filtrer chaque recette par le mot recherché et l'ajouter au tableau
            // newSearchPerName = recipes.filter(oneRecipe => oneRecipe.name.toLowerCase().includes(searchWord));

            // // filtrer chaque description de recette par le mot recherché et l'ajouter au tableau
            // newSearchPerDescription = recipes.filter(oneRecipe => oneRecipe.description.toLowerCase().includes(searchWord));
            
            // //* OTHER METHOD FOR INGREDIENTS w filter(): 
            // // newSearchPerIngredients = recipes.filter(oneRecipe => oneRecipe.ingredients.filter(oneIngredient => oneIngredient.ingredient.toLowerCase().includes(searchWord)));
            // // if (ingredientsMatchingWithSearchWord != ""){
            // //     newSearchPerIngredients.push(oneRecipe);
            // // };
            
            // // pour chaque recette, filtrer les ingrédients par le mot recherché et l'ajouter au tableau
            // recipes.forEach(oneRecipe => {
            //     const ingredientsOfOneRecipe = oneRecipe.ingredients;
            //     const ingredientsMatchingWithSearchWord = ingredientsOfOneRecipe.filter(oneIngredient => oneIngredient.ingredient.toLowerCase().includes(searchWord));

            //     if (ingredientsMatchingWithSearchWord != ""){
            //         newSearchPerIngredients.push(oneRecipe);
            //     }             
            // });

            // console.log(newSearchPerName);
            // console.log(newSearchPerIngredients);
            // console.log(newSearchPerDescription);

            recipes.forEach(oneRecipe => {
                if (oneRecipe.name.toLowerCase().includes(searchWord)) {
                    newSearchOfRecipes.push(oneRecipe);
                } else if (oneRecipe.description.toLowerCase().includes(searchWord)) {
                    newSearchOfRecipes.push(oneRecipe);
                } else {
                    // const ingredientsMatchingWithSearchWord = oneRecipe.ingredients.filter(oneIngredient => oneIngredient.ingredient.toLowerCase().includes(searchWord));
                    const ingredientsOfOneRecipe = oneRecipe.ingredients;
                    const ingredientsMatchingWithSearchWord = ingredientsOfOneRecipe.filter(oneIngredient => oneIngredient.ingredient.toLowerCase().includes(searchWord));
                    
                    if (ingredientsMatchingWithSearchWord.length != 0) {
                        newSearchOfRecipes.push(oneRecipe);
                    } 
                }
            });

            generateRecipes(newSearchOfRecipes);
        } else {
            generateRecipes(recipes);
        };
    });
}

// function filterPerSearchWord(recipe, mot) {
//     if (recipe.name.toLowerCase().includes(mot)) {
//         return true;
//     } else if (recipe.description.toLowerCase().includes(mot)) {
//         return true;
//     } else {
//         const ingredientsMatchingWithSearchWord = recipe.ingredients.filter(oneIngredient => oneIngredient.ingredient.toLowerCase().includes(mot));
//         if (ingredientsMatchingWithSearchWord.length === 0) {
//             return false;
//         } else {
//             return true;
//         }
//     }
// }

