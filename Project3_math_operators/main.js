//Addition Function
function addition_Function() {// Nameing the function for the HTML file
    var addition=2+2;// assigning the variable "addition" the valued of "2+2"
    document.getElementById("Math").innerHTML="2+2=" + addition;//telling the HTML File that where "p" is "iD" is "Math" to perform the function 
}

//Subtraction Function
function subtraction_Function() {//nameing the function
    var subtraction=4-2;//defining the variable and assigning a value to it
    document.getElementById("subtraction").innerHTML="4-2=" + subtraction;//telling program to find where "p" is identified as "subtraction" and what to do
}

//Multiplication Function
function multiplication_Function() {//Naming the function
    var multiplication=4*4;//defining the variable and assigning a value to it
    document.getElementById("Multiply").innerHTML="4*4=" + multiplication;//telling the program what to do
}

//Division Function
function division_Function() {
    var division=25 / 5;
    document.getElementById("division").innerHTML="25 / 5=" + division;
}


//Simple Math Function
function mor_math() {
    var simple_Math = ( 1 + 4 ) * 6 / 3 - 2;
    document.getElementById("Mathmatics").innerHTML = "1 + 4, * 6, / 3, - 2 =" + simple_Math;
}

//Remainder Function
function modulus_Operation() {
    var simple_Math = 25 % 6;
    document.getElementById("remainder").innerHTML = " When you divide 25 by 6 you have a remainder of: " + simple_Math
}

//Negation
function negation_Operation() {
    var x = 10;
    document.getElementById("negative").innerHTML = - x;
}

//Math Operatofs
function math_Functions() {
    var x = Math.PI;
   document.getElementById("piDemo").innerHTML = x;
}

function more_Math() {
    var y = Math.sqrt(16);
    document.getElementById("sqrtDemo").innerHTML = y;
}

function math_Random() {
    document.getElementById("demoRandom").innerHTML = Math.random()
}
//Indrement and Decrement Functions
function increment_function() {
    var x = 5;
    x++
    document.getElementById("increment").innerHTML = x++
}

function decrement_function() {
    var x = 5;
    x--
    document.getElementById("decrement").innerHTML = x--
}    