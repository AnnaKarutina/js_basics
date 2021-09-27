const today = new Date();

val = today.getMonth(); // jaanuar - 0
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday = new Date('10/02/2021 12:00:50');

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(2020);
birthday.setHours(17);
birthday.setMinutes(30);
birthday.setSeconds(40);
birthday.setMilliseconds(15);

console.log(birthday);