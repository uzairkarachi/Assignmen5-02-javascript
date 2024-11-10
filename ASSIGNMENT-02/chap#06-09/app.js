function add(a, b, c) {
    console.log(a + b + c)
}
add(32 , 56 , 97)
function sub(a, b, c) {
    console.log(a - b - c)
};
sub(16,45,56,78)
function modulus(a, b, c) {
    console.log(a % b % c)
};modulus(44,22,11)
function Division(a, b, c) {
    console.log(a / b / c)
};Division(88,44,22)
function Multiplication(a, b, c) {
    console.log(a * b * c)
};(2,3,5)
// QNO1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
var a = 10;
document.write("Result:"+"</br>");
document.write("The value of a is: " + a +"</br>");
document.write("........................................" +"</br>"+"</br>");
document.write("The value of ++a is:"+ ++a +"</br>");
document.write("Now the value of a is:"+ a +"</br>"+"</br>");
document.write("The value of a++ is:" + a++ +"</br>");
document.write("Now the value of a is:"+ a++ +"</br>"+"</br>");
var b=12
document.write("The value of --a is:", --b +"</br>");
document.write("Now the value of a is:" + b +"</br>"+"</br>");
document.write("The value of a-- is:"+b +"</br>");
document.write(" Now the value of a is:"+ --b +"</br>"+"</br>");
// QNO2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--

var a = 2;
document.write ("--a: " + (--a) + "<br>");

var a = 2;
var b = 1;
document.write ("--a - --b: " + (--a - --b) + "<br>");

var a = 2;
var b = 1;
document.write ("--a - --b + ++b: " + (--a - --b + ++b) + "<br>");
   
var a = 2;
var b = 1;
document.write ("--a - --b + ++b + b--: " + (--a - --b + ++b + b--) + "<br>"+ "<br>");
// QNO6. Take
// a) Take three subjects name from user and store them in 3 
// different variables.
// b) Total marks for each subject is 100, store it in another 
// variable.
// c) Take obtained marks for first subject from user and 
// stored it in different variable.
// ALERTS | JAVASCRIPT
// Page 3 of 3
// d) Take obtained marks for remaining 2 subjects from user 
// and store them in variables.
// e) Now calculate total marks and percentage and show the 
// result in browser like this.(Hint: user table)
var a="English";
var b="Math";
var c="Urdu";
var d=100;
var e=54 ;
var f=48 ;
var x=d*3;
var y=2*e+f ;
var g=(e/d)*100;
var h=(f/d)*100;
var i=(y/x)*100;
document.write("<b>subject Total Marks Obtained Marks Percentage </b>"+ "<br>"+ "<br>");
document.write(a + " " +"  "+" "+ "  " + "  "+  d + " "+ e +" "+g+"%"+ "<br>");
document.write(b + "  "+ d +" "+ e +" "+g+"%"+ "<br>");
document.write(c + "  "+ d +" "+ f +" "+h+"%"+ "<br>");
document.write("<b>"+"  "+ x +" "+ y +" "+i+"%"+"</b>"+ "<br>");