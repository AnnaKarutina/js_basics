// event elements
const list = document.querySelector('ul');

console.log(list);

// click by symbol
list.addEventListener('click', runEvent);


function runEvent(e) {
	console.log(`Event is ${e.type}`);
	// something to do
	
}