var Planets = ["Mercury","Venus", "Earth", "Mars", "Jupiter"];


console.log(Planets[0]);
console.log(Planets[1]);
console.log(Planets[2]);
console.log(Planets[3]);
console.log(Planets[Planets.length -1]);
/*
var a = 5, b = "Hello", c = "World!", d = 10;

console.log(a +" "+ b);
console.log(b +" "+ c);
console.log(a +" "+ d);
*/


var a = 5, b = 10, c = "5";
var x = a;

console.log(a == c);
console.log(a === c);
console.log(a == x);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a >= c);
console.log(a <= b);

/*
var hello = function() {
    return'Hello World!';
};
console.log(hello())
*/

var hello = function(){
    return 'Hi!';
};
var x = hello();
console.log(x);
