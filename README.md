
# Game Yams TP
⚠️ This project needs a mongoDB database
              
### Features:

 - Registration on the signup page.
 - Login on the login page.
 - Session system.
 - Protections on the Profile & Game page.
 - Validation on the signup & login fields. (*Display without external
   package*)
 - Logout button.
            
### Pages:

- Home

- Login

- Signup

- Game (🛡️ need login for participate)

- Profile (🛡️ protect)

        

### Start

```bash
npm i
```

```bash
npm run start
```

Packages
[express](https://www.npmjs.com/package/express)
[express-session](https://www.npmjs.com/package/express-session)
[connect-mongo](https://www.npmjs.com/package/connect-mongo)
[mongoose](https://www.npmjs.com/package/mongoose)
[bcrypt](https://www.npmjs.com/package/bcrypt)
[pug](https://www.npmjs.com/package/pug)
[dotenv](https://www.npmjs.com/package/dotenv)
[nodemon](https://www.npmjs.com/package/nodemon)

## Objectifs

## Introduction

## Contraintes techniques

✅ - Votre code sera versionné à l'aide de Git sur Github ou Gitlab.

✅ - Utilisez Node.js, Express et un moteur de rendu comme pug ou twing. React peut-être également utiliser pour la partie "front".

- Vous devez également créer une persistance pour les données avec MySQL ou MongoDB avec Mongoose pour Node.js et l'intégrer à l'API ou à l'application.

- Il faudra également mettre en place une page de login pour lancer le YAMS.

- Vous devez faire la partie interface utilisateur à partir du chapitre qui suit ci-dessous.

## Présentation générale

Le client est un chocolatier il veut organiser un jeu en ligne, une sorte de Yams où le client lancerait 5 dés à l'aide d'un bouton unique. Selon des combinaisons il gagnerait ou pas des/une pâtisserie(s). Il organise ce jeu pour fidéliser sa clientèle et dans une certaine mesure faire parler de lui et de sa chocolaterie au près d'autres clients potentiels. Il a dans ce but accolé sur sa vitrine des affiches publicitaires annonçant le jeu. L'évènement est également largement diffusé auprès de sa propre clientèle à l'aide de flyers qu'il distribue.

Il imagine une page Web unique présentant le jeu avec au préalable une inscription nécessaire pour commencer (inscription facultative). Cet évènement durera tant que 50 pâtisseries ne seront pas gagnées. Le jeu n'a pas de limite dans le temps. Et une fois le jeu terminé on affichera la page des résultats. Elle affichera l'ordre dans lequel les pâtisseries auront été gagnée(s) avec leur date et l'heure.

### Organisation

Le chocolatier possède une liste de pâtisseries de la plus à la moins sophistiquée. Les données sont enregistrées dans une base de données MongoDB.

Chaque pâtisserie gagnée dans le jeu est enregistré en base; à chaque fois que l'on cliquera sur "jouer" on regardera si la combinaison est gagnante. 

Si elle est gagnante on respectera les combinaisons suivantes :

- Yams correspond à 3 pâtisseries gagnées au hasard. Un Yams : 5 dés identiques.

- Un carré correspond à 2 pâtisseries gagnées au hasard. Un carré : 4 dés identiques parmi les 5.

- Un double (double paire) correspond à 1 pâtisserie gagnée au hasard. Un double : c'est deux fois 2 dés identiques parmi les 5.

Vous devez prendre en compte ce fichier pour concevoir le jeu.

### Pages à créer

L'application aura une page principale constituée d'une page du jeu et d'une page présentant le nombre de pâtisseries gagnées ainsi que le jour/heure/minutes/secondes.

### Page principale 

- Page du jeu on lance les 5 dés et on affiche les combinaisons.

```text

[Jouer]

1 2 2 5 1 

Affichez les pâtisserie(s) gagnée(s) 

- Biroche sucrée

```

Dans le lancer ci-dessus on a 2 combinaisons gagnantes, on retirera donc une pâtisserie au hasard dans la liste des pâtisserie.


- Page des pâtisseries gagnées :

Vous afficherez les pâtisseries gagnées ainsi que le jour, l'heure, le(s) minute(s) et le(s) seconde(s).

```text

Fondant supreme

Cake tout Chocolat 10 

```

## Options possible

Créez une page d'inscription avant le jeu. 

## Annexes données 

Vous partirez de la structure des données suivantes libre à vous de la modifier pour l'adapter à l'exercice.

```js
"patries" : [
        { "name" : "Fondant supreme" , "number" : 10, "order" : 1 },
        { "name" : "Cake tout Chocolat", "number" : 10,  "order" : 2},
        { "name" : "Cake Framboise chocolat", "number" : 10, "order" : 3},
        { "name" : "Brioche sucrée avec chocolat", "number" : 10, "order" : 4},
        { "name" : "Cake glacé fondant au chocolat", "number" : 10, "order" : 5},
        { "name" : "Eclairs au chocolat", "number" : 10, "order" : 6},
        { "name" : "Tarte poire chocolat", "number" : 10, "order" : 7},
        { "name" : "Banana  au chocolat", "number" : 10, "order" : 8}
    ]
}

```

## Options 

Si vous pensez à des améliorations du jeu écrivez les avant de les implémenter et demander à votre formateur de les valider avec vous.