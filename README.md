# cho6
Application test pour le PTUT cho7

Côté client -> application React, utilise styled-components + storybook + cypress pour les tests d'intégration

Côté serveur -> node.js + express + mysql pour traiter les envois de formulaires / requêtes etc.

Tout est testé par cypress (client + serveur)
La base de données est reset/seed avant chaque série de tests sur le serveur

Le serveur d'intégration continue est en place ici: https://travis-ci.org/KevinDelcourt/cho6
Fait tourner les tests cypress à chaque push/pull request/merge
