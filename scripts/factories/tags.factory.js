/**
 * Retourne le DOM d'un tag bleu pour les ingrédients 
 * @param {Array} tags 
 */
export function blueTagDOM(tags) {
    const tagDOM = tags.map((oneTag) => {
    return `
    <div class="tag-block-blue">
        <p class="tag-block-blue__text">${oneTag}</p>
        <img src="assets/icons/LPP_close.svg" class="tag-block-blue__icon" alt="close icon">
    </div>`;
    });
    document.querySelector(".tag-block-ingredients").innerHTML = tagDOM.join("");
}

/**
 * Retourne le DOM d'un tag vert pour les appareils
 * @param {Array} tags 
 */
export function greenTagDOM(tags) {
    const tagDOM = tags.map((oneTag) => {
    return `
    <div class="tag-block-green">
        <p class="tag-block-green__text">${oneTag}</p>
        <img src="assets/icons/LPP_close.svg" class="tag-block-green__icon" alt="close icon">
    </div>`;
    });
    document.querySelector(".tag-block-appareils").innerHTML = tagDOM.join("");
}

/**
 * Retourne le DOM d'un tag orange pour les ustensiles
 * @param {Array} tags 
 */
export function orangeTagDOM(tags) {
    const tagDOM = tags.map((oneTag) => {
    return `
    <div class="tag-block-orange">
        <p class="tag-block-orange__text">${oneTag}</p>
        <img src="assets/icons/LPP_close.svg" class="tag-block-orange__icon" alt="close icon">
    </div>`;
    });
    document.querySelector(".tag-block-ustensiles").innerHTML = tagDOM.join("");
}