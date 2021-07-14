import test from './test';

test('Babel is working');

/*
APPUNTI
- per farlo partire a funzionare (crea il package..json) `npm init`
- `npm install babel-cli` --> babel lo transforma
- `npm babel-register` --> development (not in production enviroment)
- `babel-preset-es2015`
- `babel-preset-stage-2` --> 5 diversi stage (stage 0 è quello meno stabile)
save--dev --> salva nel package.json per fare poi npm install

`npm install -g babel-cli` --> devo installare babel globalemente per poter fare
`babel server/index.js -o server/index.babel.js` --> per avere il compilato (-o sta per output file)

Nel file package.json metto "start" per quello che voglio venga compilato e "build" con la cartella dist = distrubution

Poi aggiungo nel json
    "start": "node bin/dev",
    "clean": "rm -rf dist", 	--> pulisco ogni volta che faccio una build
    "build": "npm run clean && mkdir dist && babel server -s -d dist", 		--> eseguo il clean e creo una directory dist
    "production": "npm run build && node bin/production"  	--> 

*/