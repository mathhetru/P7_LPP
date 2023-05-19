import { generateRecipes } from "../factories/recipes.factory.js";
import { generateDPListDOM } from "../factories/dropdown.factory.js";

export function searchBar(recipes) {
    //DOM
    const searchBarInput = document.querySelector(".search-bar__input");

    // ARRAYS of all items
    let allArrayOfIngredients = recipes.flatMap(recipes => recipes.ingredients);
    let allIngredients = allArrayOfIngredients.map(allArrayOfIngredients => allArrayOfIngredients.ingredient.toLowerCase());

    let allAppliance = recipes.map(recipes => recipes.appliance.toLowerCase());

    let allUstensilsUpperCase = recipes.flatMap(recipes => recipes.ustensils);
    let allUstensils = allUstensilsUpperCase.map(allUstensilsUpperCase => allUstensilsUpperCase.toLowerCase());

    // Generate recipes by default
    generateRecipes(recipes);
    generateDPListDOM(allIngredients, ".dp-list-ingredients");
    generateDPListDOM(allAppliance, ".dp-list-appareils");
    generateDPListDOM(allUstensils, ".dp-list-ustensiles");

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

            let appliancesOfRecipesSearched = newSearchOfRecipes.map(newSearchOfRecipes => newSearchOfRecipes.appliance.toLowerCase());

            let ustensilsOfRecipesSearchedUpperCase = newSearchOfRecipes.flatMap(newSearchOfRecipes => newSearchOfRecipes.ustensils);
            let ustensilsOfRecipesSearched = ustensilsOfRecipesSearchedUpperCase.map(ustensilsOfRecipesSearchedUpperCase => ustensilsOfRecipesSearchedUpperCase.toLowerCase());

            if (newSearchOfRecipes.length === 0) {
                oupsSentence.classList.remove("hide");
            } else {
                oupsSentence.classList.add("hide");
            }
            
            generateRecipes(newSearchOfRecipes);
            generateDPListDOM(allIngredientsOfRecipesSearched, ".dp-list-ingredients");
            generateDPListDOM(appliancesOfRecipesSearched, ".dp-list-appareils");
            generateDPListDOM(ustensilsOfRecipesSearched, ".dp-list-ustensiles");
        } else {
            generateRecipes(recipes);
            generateDPListDOM(allIngredients, ".dp-list-ingredients");
            generateDPListDOM(allAppliance, ".dp-list-appareils");
            generateDPListDOM(allUstensils, ".dp-list-ustensiles");
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

