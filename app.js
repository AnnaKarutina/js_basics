let color = 'blue';

switch(color){
	case 'red':
		console.log('Stop!');
		break;
	case 'yellow':
		console.log('Attention!');
		break;
	case 'green':
		console.log('Go!');
		break;
	default:
		console.log('This color is not allowed!');
		break;
}

// loo kuupäeva objekt
// nädalapäeva numbri järgi väljasta mis nädala
// päevaga on tegu - eesti keeles
// testi kõik päevad

let day = new Date('10/03/2021');
let daynr = day.getDay();
// console.log(daynr);

switch(daynr){
	case 0:
		console.log('Pühapäev');
		break;
	case 1:
		console.log('Esmaspäev');
		break;
	case 2:
		console.log('Teisipäev');
		break;
	case 3:
		console.log('Kolmapäev');
		break;
	case 4:
		console.log('Neljapäev');
		break;
	case 5:
		console.log('Reede');
		break;
	case 6:
		console.log('Laupäev');
		break;
}