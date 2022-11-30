---
layout: '@/layouts/Post.astro'
title: 'R4CE'
ref: 'r4ce'
img: '/images/r4ce.png'
status: 'En pause'
chipBgClass: 'bg-blue'
order: 2
---

## Le contexte

J'ai toujours aimé et fait du sport. D'abord beaucoup de tennis, avant de me tourner vers la course à pied puis le triathlon.

A l'époque, quand j'entendais parler d'une course c'était soit par mon club soit par le bouche à oreil des collègues.

Il faut dire que sur internet il fallait s'armer de patience pour trouver LA course qui te correspond. La bonne distance, à la bonne date et si possible pas à 300 kms de chez toi.

Il n'existe pas de moteur de recherche de course.

## Le projet

### Pitch

R4CE est un site qui aide les athlètes à trouver leurs prochaines courses.

### Informations

-   Statut : En pause
-   Lien : r4ce.co
-   Dates : Septembre 2018 -> Décembre 2020
-   Techno utilisées :
    -   VueJs
    -   ExpressJS
    -   MongoDB
    -   Redis
    -   Nginx
    -   Docker
    -   AWS
    -   GitHub actions

### Solution

C'est donc comme ça, l'été 2018 que m'est venu l'idée de créer un site regroupant toutes les épreuves de courses françaises (du 5km aux trails en passant par les bikes & run et les semi marathons). J'ai commencé par répertorier les marathons.

Je voulais une solution simple : un site de recherche sur lequel le coureur puisse renseigner ses critères et s'inscrire à la course qui lui correspond.

C'est ce que j'ai crée, en un peu plus de 2 ans, toujours seul et grâce aux technologies suivantes.

### Techno utilisées

Tous le front est developpé en VueJs. Pourquoi utiliser Vue par rapport à un autre framework js : juste une péférence personnel, j'ai testé AngularJS et ReactJS aussi, mais j'ai été plus attiré par VueJs.

Le backend est développé en NodeJS, avec ExpressJS pour l'API. Ca me permet de fair les recherches de courses, gérer les utilisateurs, etc.

Côté stockage des données j'ai utilisé deux bases de donnée NoSQL : MongoDB et Redis. MongoDB pour stocker les informations et Redis pour accélérer les recherches de courses.

L'infrastructure : j'ai hosté le tout sur une instance AWS EC2, je l'ui ai installé un Docker pour gérer mes différents container avec un Nginx en reverse proxy pour y accéder.

J'ai aussi mis en place une intégration continu et deploiement continu avec GitHub Actions.

J'ai aussi mis en place un serveur de tuiles vectoriel pour afficher la carte ainsi que paramétrer un outil pour exporter ces tuiles depuis OpenStreetMap.

### Bilan

L'année 2020 aura été compliqué dans beaucoup de secteurs et malheureusement le domaine sportif n'a pas été épargné. A partir de Mars 2020, les annulations d'épreuves sportives se sont enchainées. J'ai pourtant continué d'avancer sur R4CE.co, peaufiner l'aspect visuel et technique.

Comme tout le monde je pensais que les courses reprendraient d'ici quelques mois mais en décembre 2020 me rendant à l'évidence, j'ai décidé qu'il serait plus sage de mettre ce projet en pause.

Je crois en ce projet, un jour j'y reviendrai c'est pour ça qu'il est en "stand by" et non "abandonné", il connaitra son heure de gloire mais en 2020 ce n'était pas le bon moment. Pour plusieurs raisons, j'ai décidé de signer un client en tant que freelance, avec qui je travaille encore aujourd'hui.

Je suis devenu pas mal bon en VueJS !
