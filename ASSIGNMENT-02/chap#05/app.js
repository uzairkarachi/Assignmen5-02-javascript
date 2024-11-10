// QNO1. Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser.
var a = 5;
var b = 3;
var c = a + b;
document.write("Sum of " + a + " and " + b + " is " + c);
// QNO2. Repeat task1 for subtraction, multiplication, division &
// modulus.
var d = a - b;
document.write("<br/><br/>Subtract of " + a + " and " + b + " is " + d);
var e = a * b;
document.write("<br/><br/>Multiplication of " + a + " and " + b + " is " + e);
var f = a / b;
document.write("<br/><br/>Division of " + a + " and " + b + " is " + f);
var g = a % b;
document.write("<br/><br/>Modulus of " + a + " and " + b + " is " + g);
// QNO3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
var abc;
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
document.write("<br/><br/>Value after variable declaration is:??");
// c. Initialize the variable with some number.
abc = 5;
// d. Show the value of variable in your browser like “Initial
// value: 5”.
document.write("<br/><br/> Initial value :5");
// e. Increment the variable.
abc++
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
document.write("<br/><br/>value after increment is: " + +abc);
// g. Add 7 to the variable.
x = 7 + abc++;
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
document.write("<br/> <br/> Value after addition is : " + x);
// i. Decrement the variable.
var i = 13;
var ijk = i--;
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
document.write("<br/> <br/> Value after decrement is : " + ijk);
// k. Show the remainder after dividing the variable’s value 
// by 3. 
var a = 12;
var b = a % 4;
// l. Output : “The remainder is : 0”.
document.write("<br/> <br/>The remainder is :" + b);
// QNO4. Cost of one movie ticket is 600 PKR. Write a script to 
// store ticket price in a variable & calculate the cost of buying 5 
// tickets to a movie. Example output
var q = 600;
var w = q * 5;
document.write("<br/> <br/>Total cost to buy 5 tickets to a movie is " + w + " PKR");
// QNO5. Write a script to display multiplication table of any 
// number in your browser. E.g
var num = 2;
document.write("<h1>Multiplication table of " + num + "<h1/>");
for (var i = 1; i <= 10; i++) {
    document.write("<h5>" + num + "X" + i + "=" + (num * i) + "<h5/>")
};
// QNO6. The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae:
var celsius = 20;
var fahrenheit = (celsius * 9 / 5) + 32;
document.write(celsius + " Degree celsius Temperature convert into fahrenheit Temperature " + fahrenheit);
fahrenheit = 20
celsius = (fahrenheit - 32) * 5 / 9
document.write("</br>" + fahrenheit + " Degree Temperature convert into celsius Temperature " + celsius)
// QNO7. Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// the following in variables
// MATH EXPRESSIONS | JAVASCRIPT
// Page 5 of 9
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
document.write("<h2>Shopping Cart <h2/>");
var item1 = 650;
var quantityitem1 = 3;
var item2 = 100;
var quantityitem2 = 7;
var deliverycharges = 100;
var totalamount = item1 * quantityitem1 + item2 * quantityitem2 + deliverycharges;
document.write("<h5>Price of item 1 is " + item1 + "</h5>");
document.write("<h5>Price of item 1 is " + item2 + "</h5>");
document.write("<h5>Ordered quantity of item 1 is " + quantityitem1 + "</h5>");
document.write("<h5>Ordered quantity of item 1 is " + quantityitem2 + "</h5>");
document.write("<h5>Shipping Charges " + deliverycharges + "</h5>");
document.write("<h5>Total cost of your order is " + totalamount + "</h5>");
// QNO8. Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in 
// your browser.
var totalmarks = 980;
var obtainedmarks = 804;
document.write("<h1>Marks Sheet</h1>");
document.write("Total marks: " + totalmarks + "</br>");
document.write("Marks obtained:" + obtainedmarks + "</br>");
document.write("Percentage:" + obtainedmarks / totalmarks * 100 + "%")
// QNO9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee)
var USDollar = 104.80;
var SaudiRiyal = 28;
var total = USDollar * 10 + SaudiRiyal * 25;
document.write("<h1>Currency in PKR</h1>");
document.write("Total Currency in PKR:" + total)
// QNO10. Write a program to initialize a variable with some 
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
var somenumber = 10;
var result = ((somenumber + 5) * 10) / 2;
document.write("<h1>ARITHMETIC OPERATION</h1>");
document.write("calculation in a single expression is " + result);
// QNO11. The Age Calculator: Forgot how old someone is? 
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored 
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.
var x = 2016;
var y = 1992;
var z = x - y;
document.write("<h1>Age Calculator</h1>" + "</br>");
document.write("Current Year: " + x + "</br>");
document.write("Birth Year: " + y + "</br>");
document.write("Your Age is: " + z);
// QNO12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// MATH EXPRESSIONS | JAVASCRIPT
// Page 8 of 9
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The 
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
var r = 20;
var circum = (2 * 3.142) * r;
var A = 3.142 * (r * 2);
document.write("<h1>The Geometrizer</h1>" + "</br>");
document.write("Radius of a circle: " + r + "</br>");
document.write("The circumference is:" + circum + "</br>");
document.write("The area is: " + A);
// QNO13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.
var favoritesnacke="chocolate chip";
var age=15;
var maximumage=65;
var needperday=3;
var totalneed=(maximumage-age)*365*3;
document.write("<h1>The Lifetime Supply Calculator</h1>"+ "</br>")
document.write("Favourite Snack : "+ favoritesnacke +"</br>") ;
document.write("Current age : " + age +"</br>");
document.write("Estimate Maximum Age : " + maximumage + "</br>");
document.write("Amount of snacks per day : " + needperday + "</br>");
document.write("You will need " + totalneed + " chocolate chip to last you until the ripe old age of " + maximumage );

  

