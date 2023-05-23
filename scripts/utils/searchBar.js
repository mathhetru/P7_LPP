import { generateRecipes } from "../factories/recipes.factory.js";
import { generateDPListDOM } from "../factories/dropdown.factory.js";

export function searchBar(recipes) {
    //DOM
    const searchBarInput = document.querySelector(".search-bar__input");

    // generate recipes and ARRAYS of all items
    getRecipesAndLists(recipes);

    searchBarInput.addEventListener("input", function () {
        const searchWord = searchBarInput.value.toLowerCase().trim();
        const lengthSearchWord = searchWord.length;
        const oupsSentence = document.querySelector(".main-oups");

        if (lengthSearchWord > 2) {

            // filter each recipe with the search word and add in the array
            const newSearchOfRecipes = recipes.filter(oneRecipe => filterPerSearchWord(oneRecipe, searchWord));

            // generate recipes searched and ARRAYS of items searched
            getRecipesAndLists(newSearchOfRecipes);

            if (newSearchOfRecipes.length === 0) {
                oupsSentence.classList.remove("hide");
            } else {
                oupsSentence.classList.add("hide");
            }

        } else {
            // generate recipes and ARRAYS of all items
            getRecipesAndLists(recipes);
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

function getRecipesAndLists(recipes){
    const allArrayOfIngredients = recipes.flatMap(recipes => recipes.ingredients);
    const allIngredients = allArrayOfIngredients.map(allArrayOfIngredients => allArrayOfIngredients.ingredient.toLowerCase());

    const allAppliance = recipes.map(recipes => recipes.appliance.toLowerCase());

    const allUstensilsUpperCase = recipes.flatMap(recipes => recipes.ustensils);
    const allUstensils = allUstensilsUpperCase.map(allUstensilsUpperCase => allUstensilsUpperCase.toLowerCase());

    generateRecipes(recipes);
    generateDPListDOM(allIngredients, ".dp-list-ingredients");
    generateDPListDOM(allAppliance, ".dp-list-appareils");
    generateDPListDOM(allUstensils, ".dp-list-ustensiles");
}