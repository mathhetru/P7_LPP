import { generateRecipes } from "../factories/recipes.factory.js";
import { getListsInDropdowns } from "./dropdown.js";
import { manageClickForTags } from "./eventsOnTags.js";
import { searchContext } from "../data/searchContext.js";
import { searchBySearchWord } from "./searchBar.js";
import { displayRecipesByTags } from "./tags.js";
import { nothingToDisplay } from "./nothingToDisplay.js";
import { recipes } from "../data/recipes.js";

export function search() {
  const newSearchOfRecipes = searchBySearchWord(recipes.allRecipes, searchContext.textSearchContent);
  const recipesFromTags = displayRecipesByTags(newSearchOfRecipes);
  generateRecipes(recipesFromTags);
  getListsInDropdowns(recipesFromTags);
  manageClickForTags();
  nothingToDisplay(recipesFromTags) 
}