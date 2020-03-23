# arborescence du site "Regard sur les tiers-lieux en Pays de la Loire"

## équipe 

- Charlotte (typologies, data, contenus)
- Mona (design, contenus)
- Meven (jeux de données, contenus)

## arborescence

```
.
+-- home : vue carte par défaut - niveau de zoom Pays de la Loire
+-- recherche: vue carte par défaut - niveau de zoom Pays de la Loire
+-- présentation (méthodologie, démarche)
|   +-- données ouvertes, license de la base de données (assemblage) - à mentionner dans la démarche
```

## footer / réseaux sociaux
```

+-- footer (trois colonnes possibles)
|   +-- Partenaires (renvoyer vers leurs sites)
|   |   +-- Logo Région Pays de la Loire [https://www.paysdelaloire.fr/index.php?id=122]
|   |   +-- Logo CGET/ANCT [https://www.cget.gouv.fr/]
|   |   +-- Logo CRESS http://www.cress-pdl.org/
|   +-- Pour aller plus loin
|   |   +-- Movilab [https://movilab.org/index.php?title=Accueil]
|   |   +-- Association France Tiers-lieux [https://francetierslieux.fr/]
|   |   +-- Mission coworking CGET [https://www.cget.gouv.fr/actualites/l-etat-s-engage-pour-soutenir-et-accelerer-la-dynamique-des-tiers-lieux-dans-les-territoires]
|   +-- PiNG
|   |   +-- Description de PiNG: Comment le numérique transforme-t-il notre société ? Quel est son impact sur notre environnement social, technologique, artistique, naturel ? PiNG invite les citoyen·nes et les professionnel·les à des temps de découverte, de pratique et d’échange pour se ré-approprier ensemble les technologies qui nous entourent. En savoir plus (hyperlien vers pingbase.net)
|   |   +-- Mentions légales 

+-- Liens réseaux sociaux
|   +-- Twitter PiNG
|   +-- Facebook PiNG
|   +-- Github PiNG ?

+-- Par défaut, "propulsé par ApiViz etc" 

```

## design

- Logo principal (dans la barre de navigation): PiNG 
- Sélection des modes de vision des données: à minima carte, liste, tableur
- Quels logos ? PiNG, Région, CGET, CRESS (footer)
- Quelles couleurs ? Les deux couleurs utilisées sur le site de PiNG sont : #00c0aa (vertPiNG) et #0E0F35 (bleu foncé).
- Quelles typos? La typo utilisée sur le site de PiNG est Poppins https://fonts.google.com/specimen/Poppins
- Quelle URL ? cartes.pingbase.net/tierslieux
- Quel nom pour cette carte ? Regards sur les tiers-lieux en Pays de la Loire
- site uniquement en français, pas de version multilingue

## filtres 
```
Note: on doit pouvoir cocher plusieurs catégories dans chaque filtre et plusieurs filtres ensemble.

+-- Sources
|   +-- PiNG
|   +-- CGET
|   +-- CRESS

+-- Typologies de lieux
|   +-- Renouveler le travail
|   +-- Oeuvrer ensemble
|   +-- Explorer collectivement
|   +-- Repenser sa consommation

+-- Département
|   +-- Loire-Atlantique
|   +-- Maine et Loire
|   +-- Mayenne
|   +-- Sarthe
|   +-- Vendée

+-- Publics
|   +-- Professionnels
|   +-- Citoyens

```

## fiche (dans liste)

```
Chaque fiche que l'on retrouvera dans liste doit mettre en forme les informations suivantes du tableur
+-- encadré 1
|   +-- image  
|   +-- ville
|   +-- nom du lieu
|   +-- description

+-- encadré 2
|   +-- adresse complète
|   +-- telephone
|   +-- url 

+-- encadré 3
|   +-- typologie
|   +-- publics
|   +-- modèle juridique

```
## tableur

```
Le tableur aura pour entrées:
|   +-- détails renvoyant vers la page de présentation dédiée (cf fiche)
|   +-- Nom du lieu
|   +-- Ville
|   +-- Typologie
|   +-- Sources
