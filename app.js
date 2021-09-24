const firstname = 'Kadi';
const surname = 'Tamm';
const age = 20;
const text = 'Tere, olen Kadi!';
const tags = 'arendus,veeb';

let val;

// concatenation
val = firstname + ' ' + surname;

// append
val = firstname;
val += surname;

val = text + ' Minu töövaldkond on ' + tags;

// escaping \"
val = 'See on \'jutumärkides\'';

// case
val = firstname.toLowerCase();
val = surname.toUpperCase();

val = surname[0];
val = surname.charAt(2);

val = surname.length;
val = surname.charAt(surname.length - 1);

val = surname.indexOf('a');
val = surname.indexOf('m');
val = surname.lastIndexOf('m');

val = surname.substring(0, 2);
val = surname.slice(0, 2);
val = surname.slice(-3);

val = tags.split(',');

console.log(val);