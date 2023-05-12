export function dropdownBoxes() {
    //DOM DP
    const dropdownIngredients = document.querySelector(".dp-ingredients-block");
    const dropdownAppareils = document.querySelector(".dp-appareils-block");
    const dropdownUstensiles = document.querySelector(".dp-ustensiles-block");

    //DOM inputs
    const dpInputIngredients = document.querySelector(".dp-ingredients__input");
    const dpInputAppareils = document.querySelector(".dp-appareils__input");
    const dpInputUstensiles = document.querySelector(".dp-ustensiles__input");

    //DOM lists
    const dpListIngredients = document.querySelector(".dp-list-ingredients");
    const dpListAppareils = document.querySelector(".dp-list-appareils");
    const dpListUstensiles = document.querySelector(".dp-list-ustensiles");

    openDropdown(dropdownIngredients, dpInputIngredients, dpListIngredients, ".dp-ingredients__btn", "Ingrédients");
    openDropdown(dropdownAppareils, dpInputAppareils, dpListAppareils, ".dp-appareils__btn", "Appareils");
    openDropdown(dropdownUstensiles, dpInputUstensiles, dpListUstensiles, ".dp-ustensiles__btn", "Ustensiles");
}

function openDropdown(dropdown, input, list, className, name) { 
    dropdown.addEventListener("click", function () {
        let result = list.classList.toggle("hide");
        const btnArrow = document.querySelector(className);

        if (result) {
            dropdown.classList.remove("active");
            btnArrow.classList.remove("rotate");
            input.setAttribute("type", "button");
            input.setAttribute("value", name);
        } else {
            dropdown.classList.add("active");
            btnArrow.classList.add("rotate");
            input.setAttribute("type", "text");
            input.setAttribute("value", "");
        }
    });
}

