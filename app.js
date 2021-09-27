// for tsükkel
for(let i = 0; i < 10; i++){
	// if(i % 2 === 0)
		// console.log(i);
}

for(let i = 0; i < 10; i++){
	// if(i === 5) break;
	//if(i === 5) continue;
	// console.log(i);
}

// while
let i = 0;
while(i < 10){
	console.log(i);
	i++;
}

// do while
console.log('do-while');

let j = 0;
do{
	console.log(j);
	j++;
} while(j < 10);

// tsükklid ja massivid
const cars = ['Ford', 'Honda', 'Toyota'];
// for-iga 
for(let i = 0; i < cars.length; i++){
	console.log(cars[i]);
}
// foreach-iga
cars.forEach(function(car, index){
	console.log(`${index} - ${car}`);
});


const person = {
	firstname: 'Kadi',
	lastname: 'Tamm',
	age: 25
};
for(let element in person){
	console.log(`${element} - ${person[element]}`);
}