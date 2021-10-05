// event elements
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('ul');


// form submit event
form.addEventListener('submit', addTask);

// taskList X click event
taskList.addEventListener('click', removeTask);


function addTask(e) {
	const li = document.createElement('li');
	li.className = 'collection-item';
	li.appendChild(document.createTextNode(taskInput.value));
	
	const link = document.createElement('a');
	link.className = 'secondary-content';
	link.appendChild(document.createTextNode('X'));
	link.setAttribute('href', '#');
	li.appendChild(link);

	taskList.appendChild(li);

	taskInput.value = '';

	e.preventDefault();
}

function removeTask(e){
	if(e.target.textContent == "X"){
		if(confirm('Do you want to delete this task?')) {
			e.target.parentElement.remove();
		}
	}
}