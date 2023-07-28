# Projet Les Petits Plats

Projet 7 de la formation Openclassrooms Développeur Front-end
"Développez un algorithme de recherche en JavaScript"
#

> Version 1 de l'algorithme de recherche (Branche : AlgorithmeV1)

Cette version utilise la programmation fonctionnelle avec les méthodes de l'objet array (foreach, filter, map...).

Dans cette implémentation, nous avons un contexte de recherche qui est un objet contenant :

- le(s) mot(s) recherché(s) par l'utilisateur dans la barre de recherche
- le(s) tag(s) ingrédient(s) ajouté(s) par l'utilisateur
- le(s) tag(s) appareil(s) ajouté(s) par l'utilisateur
- le(s) tag(s) ustensil(s) ajouté(s) par l'utilisateur

`voici le code pour le searchContext`

`export const searchContext = {
  textSearchContent: '',
  ingredientsContent: [],
  appliancesContent: [],
  ustensilesContent: []
}
`

L'algorithme va utiliser le contexte de recherche pour filter les recettes. D'abord avec la barre de recherche puis avec les tags.

#

> Version 2 de l'algorithme de recherche (Branche : AlgorithmeV2)

Cette version utilise la programmation natives JS avec les boucles (while, for...)
