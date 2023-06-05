export function blueTagDOM(tag) {
    const tagDOM = `
    <div class="tag-block-blue">
        <p class="tag-block-blue__text">${tag}</p>
        <img src="assets/icons/LPP_close.svg" class="tag-block-blue__icon" alt="search icon">
    </div>`;
    return document.querySelector(".tag-block").innerHTML = tagDOM;
}

export function greenTagDOM(tag) {
    const tagDOM = `
    <div class="tag-block-green">
        <p class="tag-block-green__text">${tag}</p>
        <img src="assets/icons/LPP_close.svg" class="tag-block-green__icon" alt="search icon">
    </div>`;
    return document.querySelector(".tag-block").innerHTML = tagDOM;
}

export function orangeTagDOM(tag) {
    const tagDOM = `
    <div class="tag-block-orange">
        <p class="tag-block-orange__text">${tag}</p>
        <img src="assets/icons/LPP_close.svg" class="tag-block-orange__icon" alt="search icon">
    </div>`;
    return document.querySelector(".tag-block").innerHTML = tagDOM;
}