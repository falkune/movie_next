### ichier layout.tsx :
    Le fichier layout.tsx (ou tout autre nom que vous lui donnez) est utilisé pour créer un composant de mise en page réutilisable. Ce composant peut envelopper le contenu des différentes pages de votre application pour appliquer une mise en page commune, des styles et des éléments qui doivent être présents sur toutes les pages. Par exemple, vous pouvez utiliser ce fichier pour créer une barre de navigation, un pied de page, un en-tête ou tout autre élément qui doit apparaître sur toutes les pages de votre site.

    Le composant layout.tsx ne fait pas partie du système de rendu de Next.js lui-même. Il est créé par les développeurs pour organiser la structure visuelle de leur application. Vous pouvez choisir d'utiliser ou de ne pas utiliser un tel composant en fonction de vos besoins de conception.

### Fichier _document.tsx :
    Le fichier _document.tsx est un composant spécial dans Next.js utilisé pour personnaliser le rendu du document HTML principal de l'application. Ce fichier est responsable de l'enveloppe HTML de base de l'application, qui contient les balises <html>, <head>, et <body>. Il est utilisé pour ajouter des métadonnées, des styles globaux, des polices, des scripts, des icônes, etc., qui doivent être présents sur toutes les pages de l'application.

    _document.tsx est généralement utilisé pour inclure des dépendances globales, telles que des feuilles de style externes, des polices, des icônes, etc. Ces dépendances ne sont chargées qu'une seule fois, indépendamment de la page que l'utilisateur visite, ce qui améliore les performances du chargement initial de l'application.

    Il est important de noter que le fichier _document.tsx est un fichier spécial de Next.js et doit être nommé exactement ainsi avec le préfixe _ pour que Next.js le reconnaisse et l'utilise comme document principal.

    En résumé, le fichier layout.tsx est utilisé pour créer un composant de mise en page réutilisable qui enveloppe le contenu de vos pages, tandis que le fichier _document.tsx est utilisé pour personnaliser le rendu du document HTML principal de l'application et inclure des dépendances globales. Ils servent tous les deux à organiser la structure visuelle de votre application, mais à des niveaux différents : layout.tsx pour la mise en page de chaque page, et _document.tsx pour la mise en page globale de l'application.

