import { generateRecipes } from "../factories/recipes.factory.js";
import { generateDPIngredientsDOM } from "../factories/dropdown.factory.js";

export function searchBar(recipes) {
    //DOM
    const searchBarInput = document.querySelector(".search-bar__input");

    // ARRAYS of all items
    let allIngredients = recipes.map(newSearchOfRecipes => newSearchOfRecipes.ingredients).flat();
    let allAppliance = [];
    let allUstensils = [];

    // Genère les recettes par défaut
    generateRecipes(recipes);
    generateDPIngredientsDOM(allIngredients);

    searchBarInput.addEventListener("input", function () {
        const searchWord = searchBarInput.value.toLowerCase().trim();
        const lengthSearchWord = searchWord.length;
        const oupsSentence = document.querySelector(".main-oups");

        if (lengthSearchWord > 2) {

            // filter each recipe with the search word and add in the array
            const newSearchOfRecipes = recipes.filter(oneRecipe => filterPerSearchWord(oneRecipe, searchWord));
            // console.log(newSearchOfRecipes);

            // ARRAYS of items searched
            let allIngredientsOfRecipesSearched = newSearchOfRecipes.flatMap(newSearchOfRecipes => newSearchOfRecipes.ingredients);
            let ingredientsOfRecipesSearched = new Set(allIngredientsOfRecipesSearched);

            console.log(allIngredientsOfRecipesSearched);
            console.log(ingredientsOfRecipesSearched);

            let applianceOfRecipesSearched = [];
            let ustensilsOfRecipesSearched = [];

            if (newSearchOfRecipes.length === 0) {
                oupsSentence.classList.remove("hide");
            } else {
                oupsSentence.classList.add("hide");
            }
            
            generateRecipes(newSearchOfRecipes);
            generateDPIngredientsDOM(ingredientsOfRecipesSearched);
        } else {
            generateRecipes(recipes);
            generateDPIngredientsDOM(allIngredients);
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

