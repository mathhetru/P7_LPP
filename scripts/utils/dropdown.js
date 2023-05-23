export function dropdownBoxes() {
    //DOM DP
    const dropdownIngredients = document.querySelector(".dp-ingredients-block");
    const dropdownAppareils = document.querySelector(".dp-appareils-block");
    const dropdownUstensiles = document.querySelector(".dp-ustensiles-block");

    //DOM lists
    const dpListIngredients = document.querySelector(".dp-list-ingredients");
    const dpListAppareils = document.querySelector(".dp-list-appareils");
    const dpListUstensiles = document.querySelector(".dp-list-ustensiles");

    openDropdown(dropdownIngredients, dpListIngredients, "Ingrédients");
    openDropdown(dropdownAppareils, dpListAppareils, "Appareils");
    openDropdown(dropdownUstensiles, dpListUstensiles, "Ustensiles");
}

function openDropdown(dropdown, list, name) { 
    dropdown.addEventListener("click", function () {
        const allLists = document.querySelectorAll(".js-list");
        const allBlocks = document.querySelectorAll(".js-block");
        
        allLists.forEach(eachList => {
            eachList.classList.add("hide");
            list.classList.remove("hide");
        });
        
        allBlocks.forEach(eachBlock => {
            eachBlock.classList.remove("active");
            eachBlock.firstElementChild.setAttribute("type", "button");
            eachBlock.firstElementChild.setAttribute("value", name);
            eachBlock.lastElementChild.classList.remove("rotate");
        });

        if (list.classList.contains("hide")) {
            console.log("toto")
            list.classList.add("hide");
            this.classList.remove("active");
            this.firstElementChild.setAttribute("type", "button");
            this.firstElementChild.setAttribute("value", name);
            this.lastElementChild.classList.remove("rotate");
        } else {
            console.log("tutu")
            this.classList.add("active");
            this.firstElementChild.setAttribute("type", "text");
            this.firstElementChild.setAttribute("value", "");
            this.lastElementChild.classList.add("rotate");
        }
    });
}

