'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var User = function () {
	function User(username, email, password) {
		_classCallCheck(this, User);

		// COSTRUTTORI: sono metodi che girano quando la classe è inizializzata e l'oggetto è creato
		this.username = username;
		this.email = email;
		this.password = password;
	}

	_createClass(User, [{
		key: 'register',
		value: function register() {
			// METODO: una funzione che appartiene a quella classe
			console.log(this.username + 'is now registered');
		}
	}], [{
		key: 'countUsers',
		value: function countUsers() {
			console.log('Ci sono 40 utenti'); // statico perché non si muove, non devo istanziarlo, basta chiamarlo
		}
	}]);

	return User;
}();

var bob = new User('bob', 'bob@email', '12345'); // ISTANZA dell'oggetto
bob.register();

User.countUsers();

var Member = function (_User) {
	_inherits(Member, _User);

	function Member(username, email, password, memberPackage) {
		_classCallCheck(this, Member);

		// con super posso andare a prendere i pezzi di sopra
		var _this = _possibleConstructorReturn(this, (Member.__proto__ || Object.getPrototypeOf(Member)).call(this, username, email, password));

		_this.package = memberPackage; // questo parametro mi mancava quindi devo assegnarglielo
		return _this;
	}

	_createClass(Member, [{
		key: 'getPackage',
		value: function getPackage() {
			console.log(this.username + ' ' + 'is subscribed to the ' + this.package);
		}
	}]);

	return Member;
}(User);

var mike = new Member('mike', 'mike@email', 'pass123', 'Standard');
mike.getPackage();
// ----------------------------------------------