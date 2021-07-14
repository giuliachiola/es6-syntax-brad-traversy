// let test = 'Hello';

// class User{
// 	register(){
// 		console.log('User registered')
// 	}
// }

// function testVar(){
// 	var a = 30;
// 	if(true){
// 		var a = 50;
// 		console.log(a);
// 	}
// 	console.log(a);	
// }

// testVar();
// ----------------------------------------------

// const colors = [];

// colors.push('red');
// colors.push('yellow'); // push è OK perché const è fissa e aggiungo un pezzo all'array, ma non va bene senza

// console.log(colors); // mi stampa l'array di colori

// color = 'Green'; // NON va bene perché non è push, da errore! Sto cercando di sovrascrivere tutto l'array

// ----------------------------------------------

/*
class User {
	constructor(username, email, password){ // COSTRUTTORI: sono metodi che girano quando la classe è inizializzata e l'oggetto è creato
		this.username = username;
		this.email = email;
		this.password = password;
	}

	static countUsers(){
		console.log('Ci sono 40 utenti'); // statico perché non si muove, non devo istanziarlo, basta chiamarlo
	}

	register(){ // METODO: una funzione che appartiene a quella classe
		console.log(this.username+'is now registered');
	}
}

let bob = new User ('bob', 'bob@email', '12345'); // ISTANZA dell'oggetto
bob.register();

User.countUsers();


class Member extends User{
	constructor(username, email, password, memberPackage){
		super(username, email, password); // con super posso andare a prendere i pezzi di sopra
		this.package = memberPackage; // questo parametro mi mancava quindi devo assegnarglielo
	}

	getPackage(){
		console.log(this.username+' '+ 'is subscribed to the '+ this.package);
	}
}

let mike = new Member('mike', 'mike@email', 'pass123', 'Standard');
mike.getPackage();
*/
// ----------------------------------------------

// "use strict"

// let templateCustom ='<h1>I am a template!</h1>';

// let templateCustom = '<h2>Hello' +
// 'hei hei </h1>'

// let templateCustom = `<h3>Ciaooo!</h3>`

// document.getElementById('templateCustom').innerHTML = templateCustom;

// function makeUppercase(word){
// 	return word.makeUppercase();
// }

// makeUppercase(giulia);

// ----------------------------------------------


// "use strict"

// // LETTERS
// let theString = 'Hello Giulia this is nice';
// let word = 'Hello';

// console.log(theString);
// console.log('startsWith: {{ word }}' + theString.startsWith('Hello'));
// console.log('endsWith: ' + theString.endsWith('Hello'));
// console.log('includes: ' + theString.includes('Hello'));

// // NUMBERS
// console.log(0xff); // hex --> 255
// console.log(0b101001); // binary
// console.log(0o543); //octal
// console.log(Number.isFinite(3)); // se è un numero finito oppure infinito
// console.log(Number.isInteger(2));
// ----------------------------------------------

/*
"use strict"

function greet($greeting = 'Hello word'){ // default variable --> anche se non passo variabili, comunque stampa questo
	console.log($greeting);
}
greet();


let args = [1,2,3];
let args2 = [4,5,6];

function test(){
	console.log(args + ',' + args2);
}

test.apply(null, args); // The apply() method calls a function with a given this value, and arguments provided as an array
test(...args);

test(...args,...args2);
*/

// While the syntax of this function is almost identical to that of call(), the fundamental difference is that call() accepts an argument list, 
// while apply() accepts a single array of arguments. 
// func.apply(thisArg, [argsArray])


// arr1.push(...arr2) // Adds arr2 items to end of array
// arr1.unshift(...arr2) //Adds arr2 items to beginning of array

// ----------------------------------------------

/*
"use strict"


// ARRAY
let myArray = [11,22,34,65,34];
let mySet = new Set(myArray);

console.log(mySet);

mySet.add('Ciao'); // string
console.log(mySet.size);
mySet.add( { a: 1, b: 2 } ); // object
mySet.delete(22);
mySet.clear(); // pulisce tutto l'array

mySet.forEach(function(val){
	console.log(val);
});

// MAP --> key / value pair
let myMap = new Map([['a1','Hello'], ['b2','Goodbye'] ]);
console.log(myMap);
myMap.set('c3', 'Foo');
myMap.delete('a1');

let carWeakSet =  new WeakSet();
let car1 = {
	make: 'Honda',
	model: 'Civic'
}
carWeakSet.add(car1);

console.log(carWeakSet);

let carWeakMap =  new WeakMap();
let key1 = {
	id: 1
}

let car2 = {
	make: 'Ford',
	model: 'Escort'
}

carWeakMap.set(key1, car2);
console.log(carWeakMap);
*/

// ----------------------------------------------

/*
"use strict"

function Prefixer(prefix){
	this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function(arr){
	let that = this; // necessario se non uso le arrow functions --> ARROW FUNCTIONS: questa riga non necessaria
	return arr.map(function(x){
		console.log(that.prefix + x); // arrow functions qui ci va "this" al posto di "that"
	});
}
let pre = new Prefixer('Hello ');
pre.prefixArray(['Brad', 'Jeff']);


// old method (no arrow functions)
let add = function(a,b){
	let sum = a+b;
	console.log(sum);
	return false;
}
add(3,5);

// new method (ARROW FUNCTIONS)
let add = (a,b) => {
	let sum = a+b;
	console.log(sum);
	return false;
}
add(100,4);
*/

// ----------------------------------------------

/*
// PROMISES --> deferred and async computation
"use strict"

// Immidiately Resolved
var myPromise = Promise.resolve('Foo');
myPromise.then((res) => console.log(res));

var myPromise2 = new Promise(function(resolve, reject){
	setTimeout(() => resolve(4), 2000);
});

myPromise2.then((res) => {
	res += 3;
	console.log(res);  //dopo 2 secondi appare il numero res (che è 4) +3 quindi 7
});


function getData(method, url){
	return new Promise3(function(resolve, reject){
		var xhr = new XmlHttpRequest();
		xhr.open(method, url);
		xhr.onload = function(){
			if(this.status >= 200 && this.status < 300){
				resolve(xhr.response);
			}else{
				reject({
					status: this.status,
					statusText: xhr.statusText
				});
			}
		}
		xhr.send();
	});
}
*/

// ----------------------------------------------

"use strict"

function *g1(){ // quando c'è l'asterisco è un GENERATOR
	console.log('Hello');
	yield 'Yield 1 Ran...';
	console.log('World');
	yield 'Yield 2 Ran...';
	return 'Returned';
}

var g = g1();
// console.log(g.next());
// console.log(g.next());
// console.log(g.next().value);


for (let val of g){ // prende i valori e li butta fuori
	console.log(val);
}























