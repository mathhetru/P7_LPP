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

