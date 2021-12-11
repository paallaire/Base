# Tailwindcss

Front-end boilerplate for projects



# Conseils



## Structure SASS



### Abstracts

Regroupe les outils et helpers Sass utilisés à travers le projet.



#### Base

Contient les base du projet qui sont utilisé globlement.

Exemple :
- Web fonts
- Pattern animations
- Pattern transitions
- Reset tag html
- etc..



### Objects

Élément qui peut être introduit dans plusieurs contexte. Généralement, cette élément est composé d'un tag html.

Exemple : Bouton, lien, tag, list, titre etc...



### Components

Élément complex qui est composé de plusieurs tag html.

Exemple : Card, tab, modal, widget etc...



### Vendors

Regroupe tous les fichiers CSS provenant de bibliothèques et frameworks externes



## Grid

Utiliser display:flex lorsque c'est une grid simple ou sur une ligne sinon display:grid 
Pour gérer les espacements, utiliser la propriété "gap" au lieu de margin-padding



## Navigateurs supportés

| OS      | Navigateur   | Version du navigateur |       |
| ------- | ------------ | --------------------- | ----- |
| Desktop | Windows 7+   | Chrome                | 88+   |
|         | Windows 10+  | Edge                  | 88+   |
|         | MacOS 10.13+ | Safari                | 13.1+ |
|         | Windows 7+   | Firefox               | 86+   |
| Mobile  | Android 9+   | Chrome for Android    | 88+   |
|         | IOS 13.4+    | Mobile Safari         | 13.1+ |
|         | Android 9+   | Samsung Internet      | 14+   |
