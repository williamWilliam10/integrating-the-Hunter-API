# Hunter.io Google Sheets Add-on

Ce module complémentaire pour Google Sheets vous permet d'intégrer l'API Hunter.io afin de trouver des adresses e-mail à partir des noms, des noms de famille et des noms de domaine des entreprises.

## Fonctionnalités

- **Entrer les identifiants API :** Permet aux utilisateurs d'entrer leur clé API Hunter.io à partir d'un menu personnalisé dans Google Sheets.
- **Trouver des emails :** Fonction permettant de rechercher des adresses e-mail en utilisant l'API Hunter.io et d'afficher les résultats dans la feuille de calcul.

## Instructions d'utilisation

1. **Installation :**
   - Ouvrez votre feuille de calcul Google Sheets.
   - Accédez à `Extensions` > `Apps Script`.
   - Collez le code fourni dans l'éditeur de script.
   - Sauvegardez le projet.

2. **Ajout de la clé API :**
   - Une fois le projet sauvegardé, actualisez la feuille de calcul.
   - Un nouveau menu `Hunter.io` apparaîtra. Cliquez dessus, puis sélectionnez `Entrer les identifiants API`.
   - Une boîte de dialogue s'ouvrira pour vous permettre d'entrer votre clé API Hunter.io.

3. **Recherche des adresses e-mail :**
   - Dans la feuille de calcul, saisissez les prénoms, noms de famille et noms de domaine dans trois colonnes respectives.
   - Utilisez la formule `=FindEmail(A2, B2, C2)` dans une cellule pour obtenir l'adresse e-mail correspondante.

## Gestion des erreurs

- Le module complémentaire gère les erreurs telles que les clés API manquantes, les erreurs de requête API et les erreurs de quota dépassé.

## Auteur

Ce module complémentaire a été développé par lowe wiliam  https://github.com/williamWilliam10.



