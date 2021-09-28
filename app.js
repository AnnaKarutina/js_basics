// deklareerimine
function greeting(firstname = 'Kadi', lastname = 'Tamm'){
	/*
	if(typeof firstname === 'undefined'){
		firstname = 'Kadi';
	}
	if(typeof lastname === 'undefined'){
		lastname = 'Tamm';
	}
	*/
	return 'Tere, ' + firstname + ' ' + lastname;
}
// kasutamine
greet = greeting('Anna', 'Karutina');
console.log(greet);

// f-on defineeritud nagu const
const square = function(number = 3){
	return Math.pow(number, 2);
};
console.log(square());

// f-on, mis kohe töötab koodis
(function(){
	console.log('function is ran');	
})();

(function(name){
	console.log('Tere, ' + name);
})('Anna');

// f-oni objekti atribuutidena
const todoList = {
	add: function(task){
		console.log(task + ' is added');
	},
	edit: function(oldtask, newtask){
		console.log(`${oldtask} is changed to ${newtask}`);
	},
	delete: function(task){
		console.log(task + ' is deleted');
	}
};

todoList.add('Study JS');
todoList.edit('Study JS', 'Study TypeScript');
todoList.delete('Study JS');