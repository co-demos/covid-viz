## INFORMATIONS / METHODOLOGIE
Ce repo contiendra l'ensemble des éléments "custom" propres au projet de cartographie, indépendamment du code source d'Apiviz. Ceci permettra une meilleure flexibilité et coordination : 
- le chantier purement technique s'effectuera sur le repo ApiViz, dans le but d'en améliorer la généricité
- les contenus et documents de cadrage (maquette, charte graphique...) produits par chacun.e seront mis à jour sur ce repo
- les issues propres au projet de cartographie SoNum seront associées à [ce repo](https://github.com/co-demos/PING-carto/issues)
- les issues propres au développement d'ApiViz seront associées au [repo ApiViz](https://github.com/co-demos/ApiViz/issues)
- la vision générale de l'avancée du projet (gestion des sprints) sera visible et modifiable sur [le(s) projet(s) au niveau plus général de l'organisation co-demos](https://github.com/orgs/co-demos/projects)

## ORGANISATION DES DOSSIERS
Les dossiers sont organisés de la manière suivante : 

### contenus du site
- `/data`: fichiers CSV, XLS, liens vers points d'API (dans un fichier .MD ou .TXT)
- `/textes`: fichiers textes (édito, mot ministre, ...) au format .TXT ou .MD
- `/logos` : fichiers (images) des logos au format .PNG, .JPG, .SVG
- `/illustrations` : fichiers des illustrations/images (background ou foreground) au format .PNG, .JPG, .SVG
- `/photos` : fichiers des photos/images au format .PNG, .JPG, .SVG
- `/pages-html`: fichiers HTML qui seront pointés par l'instance d'Apiviz 

### éléments de cadrage et de synthèse
- `/graphisme` : fichiers des différents éléments constituant la charte graphique (maquette, charte graphique, ...)
- `/documentation` : fichiers de synthèse et de documentation (liste livrables, recommandations UI-UX, recommandations tech, médiation...) au format .PDF, .DOC, .TXT, .MD ...


## NOTE METHODOLOGIQUE
Merci de donner des noms explicites aux fichiers que vous modifierez/ajouterez, ainsi que bien les ajouter dans le dossier qui leur correspond le mieux



## MINI SERVER
Un mini serveur Flask est écrit dans le fichier 'server.py' afin de servir les fichiers .html et les fichiers statiques, ceci à des fins de tests et de développement local avec votre application locale d'[Apiviz-backend](https://github.com/co-demos/apiviz-backend).

Pour installer le serveur :


```sh
pip install --upgrade pip
python3 -m pip install --user virtualenv
python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
```

ou 
```sh
sh setup.sh
source venv/bin/activate
```

Pour lancer le serveur sur `http://localhost:8800`:
```sh
python server.py
```

Les fichiers seront alors localement servis sur ces adresses : 
- `http://localhost:8800/html/<path:folder_path>/<string:html_filename>`
- `http://localhost:8800/statics/<path:folder_path>/<string:static_filename>`

