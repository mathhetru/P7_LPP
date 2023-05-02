/**
 * Retourne le .json avec le tableau des recettes
 * @returns {Promise<Array<Object>>}
 */
export async function getData() {
    const requestURL = "/data/recipes.json";
    return fetch(requestURL)
        .then(response => response.json())
        .catch(error => alert("Erreur : " + error));
}