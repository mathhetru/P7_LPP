import { generateRecipes } from "../factories/recipes.factory.js";
import { generateDPIngredientsDOM } from "../factories/dropdown.factory.js";

export function searchBar(recipes) {
    //DOM
    const searchBarInput = document.querySelector(".search-bar__input");

    //Genère les recettes par défaut
    generateRecipes(recipes);

    searchBarInput.addEventListener("input", function () {
        const searchWord = searchBarInput.value.toLowerCase().trim();
        const lengthSearchWord = searchWord.length;
        const oupsSentence = document.querySelector(".main-oups");

        if (lengthSearchWord > 2) {
            // ARRAYS
            let arrayOfIngredients = [];
            let arrayOfAppliance = [];
            let arrayOfUstensils = [];

            // filtrer chaque recette par le mot recherché et l'ajouter au tableau
            const newSearchOfRecipes = recipes.filter(oneRecipe => filterPerSearchWord(oneRecipe, searchWord));

            if (newSearchOfRecipes.length === 0) {
                oupsSentence.classList.remove("hide");
            } else {
                oupsSentence.classList.add("hide");
            }

            // recipes.forEach(oneRecipe => {
            //     if (oneRecipe.name.toLowerCase().includes(searchWord)) {
            //         oupsSentence.classList.add("hide");
            //         newSearchOfRecipes.push(oneRecipe); 
            //         arrayOfIngredients.push(oneRecipe.ingredients);
            //     } else if (oneRecipe.description.toLowerCase().includes(searchWord)) {
            //         oupsSentence.classList.add("hide");
            //         newSearchOfRecipes.push(oneRecipe);
            //         arrayOfIngredients.push(oneRecipe.ingredients);
            //     } else {
            //         // const ingredientsMatchingWithSearchWord = oneRecipe.ingredients.filter(oneIngredient => oneIngredient.ingredient.toLowerCase().includes(searchWord));
            //         const ingredientsOfOneRecipe = oneRecipe.ingredients;
            //         const ingredientsMatchingWithSearchWord = ingredientsOfOneRecipe.filter(oneIngredient => oneIngredient.ingredient.toLowerCase().includes(searchWord));
                    
            //         if (ingredientsMatchingWithSearchWord.length != 0) {
            //             oupsSentence.classList.add("hide");
            //             newSearchOfRecipes.push(oneRecipe);
            //             arrayOfIngredients.push(oneRecipe.ingredients);
            //         } 
            //     } 
            // });

            generateRecipes(newSearchOfRecipes);
        } else {
            generateRecipes(recipes);
        };
    });
}

function filterPerSearchWord(recipe, word) {
    if (recipe.name.toLowerCase().includes(word)) {
        return true;
    } else if (recipe.description.toLowerCase().includes(word)) {
        return true;
    } else {
        const ingredientsMatchingWithSearchWord = recipe.ingredients.filter(oneIngredient => oneIngredient.ingredient.toLowerCase().includes(word));
        if (ingredientsMatchingWithSearchWord.length === 0) {
            return false;
        } else {
            return true;
        }
    }
}

