'use strict';

var _test = require('./test');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _test2.default)('Babel is working');

/*
APPUNTI

per farlo partire a funzionare (crea il package..json) `npm init`
`npm install babel-cli` --> babel lo transforma
`npm babel-register` --> development (not in production enviroment)
`babel-preset-es2015`
`babel-preset-stage-2` --> 5 diversi stage (stage 0 è quello meno stabile)
save--dev --> salva nel package.json per fare poi npm install

`npm install -g babel-cli` --> devo installare babel globalemente per poter fare
`babel server/index.js -o server/index.babel.js` --> per avere il compilato (-o sta per output file)

*/

