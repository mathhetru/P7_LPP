export function generateDPListDOM(list, className) {
    const listUnique = [...new Set(list)];
    const dpItemListDOM = listUnique.map((oneItem) => {
    return `
        <p class="dp-list__text">${oneItem}</p>
        `;
    });
    document.querySelector(className).innerHTML = dpItemListDOM.join("");
}