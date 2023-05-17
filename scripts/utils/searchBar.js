import { generateRecipes } from "../factories/recipes.factory.js";
import { generateDPListDOM } from "../factories/dropdown.factory.js";

export function searchBar(recipes) {
    //DOM
    const searchBarInput = document.querySelector(".search-bar__input");

    // ARRAYS of all items
    let allArrayOfIngredients = recipes.map(recipes => recipes.ingredients).flat();
    let allIngredients = allArrayOfIngredients.map(allArrayOfIngredients => allArrayOfIngredients.ingredient.toLowerCase());
    let allAppliance = [];
    let allUstensils = [];

    // Generate recipes by default
    generateRecipes(recipes);
    generateDPListDOM(allIngredients, ".dp-list-ingredients");

    searchBarInput.addEventListener("input", function () {
        const searchWord = searchBarInput.value.toLowerCase().trim();
        const lengthSearchWord = searchWord.length;
        const oupsSentence = document.querySelector(".main-oups");

        if (lengthSearchWord > 2) {

            // filter each recipe with the search word and add in the array
            const newSearchOfRecipes = recipes.filter(oneRecipe => filterPerSearchWord(oneRecipe, searchWord));

            // ARRAYS of items searched
            let allArrayOfIngredientsOfRecipesSearched = newSearchOfRecipes.flatMap(newSearchOfRecipes => newSearchOfRecipes.ingredients);
            let allIngredientsOfRecipesSearched = allArrayOfIngredientsOfRecipesSearched.map(allArrayOfIngredientsOfRecipesSearched => allArrayOfIngredientsOfRecipesSearched.ingredient.toLowerCase());

            let applianceOfRecipesSearched = [];
            let ustensilsOfRecipesSearched = [];

            if (newSearchOfRecipes.length === 0) {
                oupsSentence.classList.remove("hide");
            } else {
                oupsSentence.classList.add("hide");
            }
            
            generateRecipes(newSearchOfRecipes);
            generateDPListDOM(allIngredientsOfRecipesSearched, ".dp-list-ingredients");
        } else {
            generateRecipes(recipes);
            generateDPListDOM(allIngredients, ".dp-list-ingredients");
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

