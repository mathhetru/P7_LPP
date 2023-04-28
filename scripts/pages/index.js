import { getData } from "../factories/data.js";


async function displayIndexrecipes(data) {
    generateRecipes(data.recipes);
}

export function recipeFactory(recipe) {
    const { id, name, servings, ingredients, time, description, appliance, ustensils } = recipe;
    return { id, name, servings, ingredients, time, description, appliance, ustensils, indexArticleDOM};
}


export function generateRecipes(recipes) {
    const recipesListDOM = recipes.map((oneRecipe) => {
        const recipeCard = recipeFactory(oneRecipe);

        return recipeCard.indexArticleDOM(
            recipeCard.id,
            recipeCard.name,
            recipeCard.servings,
            recipeCard.ingredients,
            recipeCard.time,
            recipeCard.description,
            recipeCard.appliance,
            recipeCard.ustensils
        );
    });
    document.querySelector(".card-galery").innerHTML = recipesListDOM.join("");
}


function indexArticleDOM(id, name, servings, ingredients, time, description, appliance, ustensils) {
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
                        <p class="recipe-card-time__text">${time}</p>
                    </div>
                </div>
                <div class="recipe-card-description">
                    <ul class="recipe-card-description-list">
                        <li class="recipe-card-description-list__text"><span class="recipe-card-description-list__text-bold">Poulet :</span> 1</li>
                        <li class="recipe-card-description-list__text"><span class="recipe-card-description-list__text-bold">Lait de coco :</span> 400ml</li>
                        <li class="recipe-card-description-list__text"><span class="recipe-card-description-list__text-bold">Coulis de tomate :</span> 25cl</li>
                        <li class="recipe-card-description-list__text"><span class="recipe-card-description-list__text-bold">Oignon :</span> 1</li>
                        <li class="recipe-card-description-list__text"><span class="recipe-card-description-list__text-bold">Poivron rouge :</span> 1</li>
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
 * Initialize en asynchrone 
 */
async function init() {
    const recipes = await getData();
    displayIndexrecipes(recipes)
}

init();