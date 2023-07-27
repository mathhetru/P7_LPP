import { generateDropdownListDOM } from "../factories/dropdown.factory.js";
import { manageClicksForTags } from "./eventsOnTags.js";

/**
 * Génère la liste des ingredients, appareils, ustensiles
 * @param {Object} recipes 
 */
export function getListsInDropdowns(recipes){
  const allIngredientsOfRecipes = recipes.flatMap(recipe => recipe.ingredients);
  const allIngredients = allIngredientsOfRecipes.map(ingredient => ingredient.ingredient.toLowerCase());

  const allAppliances = recipes.map(recipes => recipes.appliance.toLowerCase());

  const allUstensilsUpperCase = recipes.flatMap(recipes => recipes.ustensils);
  const allUstensils = allUstensilsUpperCase.map(allUstensilsUpperCase => allUstensilsUpperCase.toLowerCase());

  generateDropdownListDOM(allIngredients, ".dp-list-ingredients");
  generateDropdownListDOM(allAppliances, ".dp-list-appareils");
  generateDropdownListDOM(allUstensils, ".dp-list-ustensiles");

  updateListDropdownWithHisInput(".dp-ingredients__input", allIngredients, ".dp-list-ingredients");
  updateListDropdownWithHisInput(".dp-appareils__input", allAppliances, ".dp-list-appareils");
  updateListDropdownWithHisInput(".dp-ustensiles__input", allUstensils, ".dp-list-ustensiles");
}


/**
* Génère la liste des ingredients, appareils, ustensiles d'après le contenu de recherche dans l'input du dropdown
* @param {string} inputName 
* @param {array} allDevices 
* @param {string} DPName 
*/
function updateListDropdownWithHisInput(inputName, allDevices, DPName) {
  const DPinput = document.querySelector(inputName);
  DPinput.addEventListener("input", function () { 
      const searchWord = DPinput.value.toLowerCase().trim();
      const lengthSearchWord = searchWord.length;
      if (lengthSearchWord > 2) {
          const newSearchOfTheList = allDevices.filter(oneDevice => oneDevice.toLowerCase().includes(searchWord));
          generateDropdownListDOM(newSearchOfTheList, DPName);
          manageClicksForTags();
      } else {
          generateDropdownListDOM(allDevices, DPName);
          manageClicksForTags();
      };
  });
}
