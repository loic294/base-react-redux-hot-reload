# Installation

Pour installer le projet, faites un clone ou téléchargez le zip (recommandé si vous utilisez une branche). Une fois le projet téléchargé, il faut installer les "packages" en retrant cette commande dans la console : 
```
npm install
```

# Démarer le serveur 
Pour déamrer le serveur il faut simplement faire :

```
npm run dev
```
Le serveur devrait démarrer et la page devrait être accesible à l'addresse `localhost:3002`. 

# Arrêter et redémarrer le serveur

Pour arrêter le serveur il faut faire `Ctrl+C` deux fois. Arpès on peut rentrer
```
npm run dev
```
pour redémarrer le serveur.  

# Erreurs fréquentes 

## `Can't find module xyz`

Dans ce cas vous n'avez pas installé correctement les packages. Essayez de réinstaller les packages : 
```
npm install
```
ou installez le package manquant en entrant : 
```
npm install xyz
```

## Erreur de timeout

Ça veut simplement dire qu'il y a eu une erreur de connexion. Redémarrez le serveur.
