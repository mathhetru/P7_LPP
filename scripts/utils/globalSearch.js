import { generateRecipes } from "../factories/recipes.factory.js";
import { getListsInDropdowns } from "./dropdown.js";
import { manageClicksForTags } from "./eventsOnTags.js";
import { searchContext } from "../data/searchContext.js";
import { searchBySearchWord } from "./searchBar.js";
import { displayRecipesByTags } from "./tags.js";
import { nothingToDisplay } from "./nothingToDisplay.js";
import { recipes } from "../data/recipes.js";

/**
 * Genère un array1 avec les recettes d'après le mot recherchés
 * Génère un array2 qui contient les tags ajoutés avec l'array1 
 * Créé le DOM à partir de l'array2
 * Genère les listes dans les dropdowns à partir de l'array2
 * Manage les clicks sur les tags
 * Affiche une phrase si array2 est vide
 */
export function search() {
  const newSearchOfRecipes = searchBySearchWord(recipes.allRecipes, searchContext.textSearchContent);
  const recipesFromTags = displayRecipesByTags(newSearchOfRecipes);
  generateRecipes(recipesFromTags);
  getListsInDropdowns(recipesFromTags);
  manageClicksForTags();
  nothingToDisplay(recipesFromTags) 
}