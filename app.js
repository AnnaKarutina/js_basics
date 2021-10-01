let val;

const list = document.querySelector('ul');
const listItem = document.querySelector('li:first-child');

val = list.children;
val = list.children[1];
// list.children[1].textContent = 'Study XML';
val = list.children[2].children;
// list.children[2].children[0].style.color = 'blue';

val = list.firstElementChild;
val = list.lastElementChild;
val = list.childElementCount;

val = listItem.parentElement;
val = listItem.parentElement.parentElement;

val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

console.log(val);