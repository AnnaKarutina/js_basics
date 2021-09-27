const person = {
	firstname: 'Kadi',
	lastname: 'Tamm',
	age: 23,
	email: 'kadi.tamm@gmail.com',
	hobbies: ['muusika', 'sport'],
	address: {
		city: 'Tallinn',
		county: 'Harjumaa'
	},
	getBirthdayYear: function(){
		return 2021 - this.age;
	}
};

let val;

val = person.firstname;
val = person['lastname'];
val = person.age;
val = person.hobbies[1];
val = person.address.city;
val = person.address['city'];
val = person.getBirthdayYear();
console.log(val);