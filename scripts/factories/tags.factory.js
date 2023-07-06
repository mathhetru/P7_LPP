/**
 * Retourne le DOM d'un tag bleu pour les ingrédients 
 * @param {array} arrayOfTags 
 */
export function blueTagDOM(arrayOfTags) {
    const tagDOM = arrayOfTags.map((oneTag) => {
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
 * @param {array} arrayOfTags 
 */
export function greenTagDOM(arrayOfTags) {
    const tagDOM = arrayOfTags.map((oneTag) => {
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
 * @param {array} arrayOfTags 
 */
export function orangeTagDOM(arrayOfTags) {
    const tagDOM = arrayOfTags.map((oneTag) => {
    return `
    <div class="tag-block-orange">
        <p class="tag-block-orange__text">${oneTag}</p>
        <img src="assets/icons/LPP_close.svg" class="tag-block-orange__icon" alt="close icon">
    </div>`;
    });
    document.querySelector(".tag-block-ustensiles").innerHTML = tagDOM.join("");
}