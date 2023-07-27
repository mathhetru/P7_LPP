/**
 * Affiche une phrase si aucune recette n'est trouvée
 * @param {Array} recipes 
 */
export function nothingToDisplay(recipes) {
  const oupsSentence = document.querySelector(".main-oups");
  if (recipes.length === 0) {
      oupsSentence.classList.remove("hide");
  } else {
      oupsSentence.classList.add("hide");
  }
}