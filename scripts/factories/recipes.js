/**
 * Genère chaque recette, la retourne avec la fonction DOM et join le DOM de chacune dans la balise <section>
 * @param {Object} recipes 
 */
export function generateRecipes(recipes) {
    const recipesListDOM = recipes.map((oneRecipe) => {
        return indexArticleDOM(
            oneRecipe.id,
            oneRecipe.name,
            oneRecipe.ingredients,
            oneRecipe.time,
            oneRecipe.description
        );
    });
    document.querySelector(".card-galery").innerHTML = recipesListDOM.join("");
}

/**
 * Retourne le DOM de chaque recette dans une balise <article> 
 * @param {number} id 
 * @param {string} name 
 * @param {Array} ingredients 
 * @param {number} time 
 * @param {string} description 
 * @returns {string}
 */
function indexArticleDOM(id, name, ingredients, time, description) {
    const articleDOM = `
    <article class="recipe-card" data-recipe-id="${id}">
        <a href="#" class="recipe-card__link">
            <div class="recipe-card-picture">
                <img src="" class="recipe-card-picture__img" alt=""/> 
            </div>
            <div class="recipe-card-panel">
                <div class="recipe-card-line">
                    <h2 class="recipe-card-line__title">${name}</h2>
                    <div class="recipe-card-time">
                        <img src="assets/icons/LPP_clock.svg" class="recipe-card-time__img" alt="clock icon">
                        <p class="recipe-card-time__text">${time} min</p>
                    </div>
                </div>
                <div class="recipe-card-description">
                    <ul class="recipe-card-description-list">
                        ${generateIngredients(ingredients)}
                    </ul>
                    <p class="recipe-card-description-block">${description}
                    </p>
                </div>
            </div>
        </a>
    </article>`;
    return articleDOM;
}

/**
 * Retourne le DOM de chaque ingrédient individuellement dans une balise <li> 
 * Ajoute une quantité si elle existe, ainsi qu'une unité si elle existe également
 * @param {Array} ingredients 
 * @returns {string}
 */
function generateIngredients(ingredients){
    const ingredientListDOM = ingredients.map((oneIngredient) => {
        const ingredientContent = oneIngredient.quantity ? oneIngredient.ingredient + ' :' : oneIngredient.ingredient;
        const quantity = oneIngredient.unit ? oneIngredient.quantity + ' ' + oneIngredient.unit : oneIngredient.quantity;
        const quantityContent = oneIngredient.quantity ? quantity : '';

        return `
        <li class="recipe-card-description-list__text">
            <span class="recipe-card-description-list__text-bold">${ingredientContent}</span> ${quantityContent}
        </li>
        `;
    });
    return ingredientListDOM.join("");
}