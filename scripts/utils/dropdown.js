//DOM DP
const dropdownIngredients = document.querySelector(".dp-ingredients-block");
const dropdownAppareils = document.querySelector(".dp-appareils-block");
const dropdownUstensiles = document.querySelector(".dp-ustensiles-block");

//DOM lists
const dpListIngredients = document.querySelector(".dp-list-ingredients");
const dpListAppareils = document.querySelector(".dp-list-appareils");
const dpListUstensiles = document.querySelector(".dp-list-ustensiles");
const dpTriggerClassName = '.js-dp-trigger'

export function dropdownBoxes() {
    openDropdown(dropdownIngredients, dpListIngredients, "Ingrédients");
    openDropdown(dropdownAppareils, dpListAppareils, "Appareils");
    openDropdown(dropdownUstensiles, dpListUstensiles, "Ustensiles");
}

function openDropdown(dropdown) {     
    dropdown.querySelector(dpTriggerClassName).addEventListener("click", function () {

        const allBlocks = document.querySelectorAll(".js-block");
        allBlocks.forEach(block => {
            if (block.getAttribute('data-dropdown') !== dropdown.getAttribute('data-dropdown')) {
                block.classList.remove('dp-visible');
                const input = block.querySelector('input[type=text]');
                console.log(input.value)
                input.value = input.getAttribute('data-value');
            }
        })
        
        if (dropdown.classList.contains('dp-visible')) {
            dropdown.classList.remove('dp-visible');
            // dropdown.querySelector('input[type=text]').value = ''; data-value
            console.log(dropdown.getAttribute('data-dropdown'));
            console.log(this.nextElementSibling);
            dropdown.querySelector('input[type=text]').value = dropdown.getAttribute('data-dropdown');
            // this.nextElementSibling.setAttribute("value", dropdown.getAttribute('data-dropdown'));
            console.log(dropdown.querySelector('input[type=text]').value);
        } else {
            dropdown.classList.add('dp-visible');
        }
        
        // Reset de la value du dropdown pour afficher le placeholder
        dropdown.querySelector('input[type=text]').value = '';
    });
}

