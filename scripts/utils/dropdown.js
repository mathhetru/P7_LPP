//DOM 
const dropdownIngredients = document.querySelector(".dp-ingredients-block");
const dropdownAppareils = document.querySelector(".dp-appareils-block");
const dropdownUstensiles = document.querySelector(".dp-ustensiles-block");

const dpListIngredients = document.querySelector(".dp-list-ingredients");
const dpListAppareils = document.querySelector(".dp-list-appareils");
const dpListUstensiles = document.querySelector(".dp-list-ustensiles");

const dpTriggerClassName = '.js-dp-trigger'

/**
 * appelle la function openDropdown() pour ingrédients, appareils, ustensiles
 */
export function dropdownBoxes() {
    openDropdown(dropdownIngredients, dpListIngredients, "Ingrédients");
    openDropdown(dropdownAppareils, dpListAppareils, "Appareils");
    openDropdown(dropdownUstensiles, dpListUstensiles, "Ustensiles");
}

/**
 * ouvre / ferme le dropdown 
 * @param {HTMLElement} dropdown 
 */
function openDropdown(dropdown) {     
    dropdown.querySelector(dpTriggerClassName).addEventListener("click", function () {
        const allBlocks = document.querySelectorAll(".js-block");
        allBlocks.forEach(block => {
            if (block.getAttribute('data-dropdown') !== dropdown.getAttribute('data-dropdown')) {
                block.classList.remove('dp-visible');
                const input = block.querySelector('input[type=text]');
                input.value = input.getAttribute('data-value');
            }
        })
        
        if (isVisible(dropdown)) {
            hideDropdown(dropdown);
            resetDropdownInputValue(dropdown);
        } else {
            showDropdown(dropdown);
        }
    });
}

/**
 * vérifie si le dropdown est visible
 * @param {HTMLElement} dropdown 
 * @returns {boolean}
 */
function isVisible(dropdown) {
    return dropdown.classList.contains('dp-visible');
}

/**
 * cache la liste du dropdown
 * @param {HTMLElement} dropdown 
 */
function hideDropdown(dropdown) {
    dropdown.classList.remove('dp-visible');
}

/**
 * fait apparaite la liste du dropdown
 * @param {HTMLElement} dropdown 
 */
function showDropdown(dropdown) {
    dropdown.classList.add('dp-visible');
    dropdown.querySelector('input[type=text]').value = '';
}

/**
 * remet à zéro la valeur de l'input et affiche la liste du dropdown entière
 * @param {HTMLElement} dropdown 
 */
function resetDropdownInputValue(dropdown) {
    const input = dropdown.querySelector('input[type=text]')
    const placholder = dropdown.getAttribute('data-dropdown');
    input.value = '';
    input.dispatchEvent(new Event('input'));
    input.value = placholder
}