const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruits = ['õun', 'banaan', 'apelsiin', 'virsik'];
const mixed = [22, 'Tere', true, undefined, null, {a:1, b:2}, new Date()];


let val;

val = numbers.length; // massiivi pikkus
val = Array.isArray(numbers); // kas on massiiv
val = numbers[3]; // kindel väärtus

numbers[2] = 100; // asendamine

// lisamine
numbers.push(250);
numbers.unshift(120);

// maha võtmine
numbers.pop();
numbers.shift();

// index
val = numbers.indexOf(100);

// lõikamine
numbers.splice(2, 1);

// ühendamine
val = numbers.concat(numbers2);

// sorteerimine
val = fruits.sort();
// numbrid kasvujärjekorras
val = numbers.sort(function(x, y){
	return x - y;
});
// numbrid kahanemisjärjekorras
val = numbers.sort(function(x, y){
	return y - x;
});

console.log(numbers);
console.log(val);