let val;

val = document.querySelectorAll('li');

// for tsükliga
for(let i = 0; i < val.length; i++){
	if(i % 2 == 0){
		document.querySelectorAll('li')[i].style.background = '#ddd';
	} else {
		document.querySelectorAll('li')[i].style.background = '#eee';
	}
}


// foreach tsükliga
oddli = document.querySelectorAll('li:nth-child(odd)');
evenli = document.querySelectorAll('li:nth-child(even)');

oddli.forEach(function(li){
	li.style.background = 'orange';
})
evenli.forEach(function(li){
	li.style.background = 'salmon';
})

console.log(val);