document.write(typeof "Word");

function NaN_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}

//To get a Positive Test
function Positive_Function() {
    document.getElementById("positive").innerHTML = isNaN('This is a string');
}

//To get a Negative Test
function Negative_Function() {
    document.getElementById("negative").innerHTML = isNaN('007')
}

//To get an Infinity Result
function Infinity_Function() {
    document.write(2E320);
}

//To get a -Infinity Result
function negInfinity_Function() {
    document.write(-3E310);
}

//Using a greater then sign(>)
function greater_Function() {
    document.write(4>2);
}

//Using a lesser then sign(>)
function lesser_Function() {
    document.write(2>4);
}

//Console.log() Method
function console_Function() {
    console.log(2+2);
}

//Type Coercion
function coercion_Function() {
    document.write("15"+3);
}

//Boolean logic and the console.log() method
function TF_Function() {
    console.log(4>8);
}

//Comparisons == True
function comparison_Function() {
    document.write(3==3);
}

//Comparisons == False
function comparison2_Function() {
    document.write(4==3);
}

//Comparisons === True
function equalsT_Function() {
    x = 10;
    y = 10;
    document.write(x===y);
}

//Comparisons === False
function equalsF_Function() {
    x = 10;
    y = "10";
    document.write(x===y);
}
function equalsFa_Function() {
    x = 10;
    y = 20;
    document.write(x===y);
}
function equalsFal_Function() {
    x = 10;
    y = "bob";
    document.write(x===y);
}

//Logical Operators && True
function andT_Function() {
    document.write(5>2 && 10>4);
}

//Logical Operators && False
function andF_Function() {
    document.write(1>2 && 10>4);
}

//Logical Operators || True
function orT_Function() {
    document.write(5>2 || 10>4);
}

//Logical Operators || False
function orF_Function() {
    document.write(1>2 || 10>4);
}

//Not Operator (!)True
function notT_Function() {
    document.getElementById("notT").innerHTML = !(20>30);
}

//Not Operator (!)False
function notF_Function() {
    document.getElementById("notF").innerHTML = !(20>10);
}