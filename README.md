# Node.js MongoDB Project

Ce projet est une application Node.js utilisant MongoDB comme base de données. Il inclut des fonctionnalités pour gérer les utilisateurs, les commentaires et les publications.

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/Florian-cop/nodejs-mongo.git
   cd nodejs-mongo
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Configurez les variables d'environnement :

   Créez un fichier `.env` à la racine du projet et ajoutez-y une clé nommée JWT_KEY

4. Assurez-vous que MongoDB est en cours d'exécution sur `mongodb://127.0.0.1:27017/db-projet-mongo`.

## Exécution

1. Lancez le serveur :

   ```bash
   node server.js
   ```

2. Le serveur sera accessible sur `http://localhost:3000`.

## Points de terminaison API

### Authentification

- `POST /auth/signin` : Inscription d'un utilisateur.
- `POST /auth/login` : Connexion d'un utilisateur.

### Commentaires

- `POST /comments/add` : Ajouter un commentaire.
- `PUT /comments/:id` : Mettre à jour un commentaire.
- `DELETE /comments/:id` : Supprimer un commentaire.
- `GET /comments/:id` : Récupérer un commentaire par ID.

### Publications

- `POST /publications` : Créer une publication.
- `GET /publications` : Récupérer toutes les publications.
- `GET /publications/:id` : Récupérer une publication par ID.
- `PUT /publications/:id` : Mettre à jour une publication.
- `DELETE /publications/:id` : Supprimer une publication.


### Travail en DUO avec Lisa Yous sur les commits de Florian-Cop
## Travail sur tout le comments, middleware, documentation
