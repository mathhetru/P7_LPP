export function generateDPListDOM(list, className) {
    let listUnique = [...new Set(list)];
    // console.log(ingredients);
    // console.log(ingredientsUnique);
    const dpItemListDOM = listUnique.map((oneItem) => {
    return `
        <p class="dp-list__text">${oneItem}</p>
        `;
    });
    document.querySelector(className).innerHTML = dpItemListDOM.join("");
}