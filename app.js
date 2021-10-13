// event elements
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('ul');

const clearBtn = document.querySelector('#clear-tasks');

// form submit event
form.addEventListener('submit', addTask);

// taskList X click event
taskList.addEventListener('click', removeTask);

// clearBtn click event
clearBtn.addEventListener('click', clearTasks);


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

	addTaskToLS(taskInput.value);

	taskInput.value = '';

	e.preventDefault();
}

function removeTask(e){
	console.log(e.target.parentElement);
	if(e.target.textContent == "X"){
		if(confirm('Do you want to delete this task?')) {
			e.target.parentElement.remove();

			removeTaskFromLS(e.target.parentElement.firstChild.textContent);
		}
	}
}

function clearTasks(e){
	while(taskList.firstChild){
		taskList.removeChild(taskList.firstChild);
	}
}


function addTaskToLS(task){
	let tasks;
	if(localStorage.getItem('tasks') === null){
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	tasks.push(task);
	localStorage.setItem('tasks', JSON.stringify(tasks));
}


function removeTaskFromLS(task){
	let tasks;
	if(localStorage.getItem('tasks') === null){
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	tasks.forEach(function(tasksElement, tasksIndex){
		if(tasksElement === task){
			tasks.splice(tasksIndex, 1);
		}
	});
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

/*
function storeTaskInLocalStorage(task=null) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  console.log(tasks);
  tasks.push(task);
  //console.log(tasks);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  //console.log(JSON.stringify(tasks));
  
  /*
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = '';
  } else {
    tasks = localStorage.getItem('tasks');
  }
  tasks = taskList.innerHTML;
  localStorage.setItem('tasks', tasks);
  */
  /*/
}

function removeTaskFromLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  console.log(task);
  tasks.forEach(function(element, index){
  	console.log(element);
  	if(element == task.slice(0, -1)){
  		tasks.splice(index, 1);
  	}
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
*/