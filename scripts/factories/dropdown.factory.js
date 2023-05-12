export function generateDPIngredientsDOM(ingredients) {
    console.log(ingredients);
    const dpIngredientsListDOM = ingredients.map((oneIngredient) => {
    return `
        <p class="dp-list__text">${oneIngredient.ingredient}</p>
        `;
    });
    document.querySelector(".dp-list-ingredients").innerHTML = dpIngredientsListDOM.join("");
}