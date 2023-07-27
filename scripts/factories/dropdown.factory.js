/**
 * Retourne le DOM d'une liste dans un dropdown 
 * @param {Array} list 
 * @param {string} className 
 */
export function generateDropdownListDOM(list, className) {
    const listUnique = [...new Set(list)];
    const dpItemListDOM = listUnique.map((oneItem) => {
    return `
        <p class="dp-list__text">${oneItem}</p>
        `;
    });
    document.querySelector(className).innerHTML = dpItemListDOM.join("");
}