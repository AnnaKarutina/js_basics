// event elements
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');

// keyboad
// taskInput.addEventListener('keydown', runEvent);
// taskInput.addEventListener('keyup', runEvent);
// taskInput.addEventListener('keypress', runEvent);

// focus & blur
// taskInput.addEventListener('focus', runEvent);
// taskInput.addEventListener('blur', runEvent);

//cut & paste
taskInput.addEventListener('cut', runEvent);
taskInput.addEventListener('paste', runEvent);

// input by symbol
taskInput.addEventListener('input', runEvent);


function runEvent(e) {
	console.log(`Event is ${e.type}`);
	// something to do
	console.log(e.target.value);
}