function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11){
        Digit += + X;
        X++
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function str_Count() {
    var str = "Hello World!";
    var n =str.length;
    document.getElementById("demo").innerHTML = n;
}

//Assigment p183 For Loop

    var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    var Content = "";
    function for_Loop() {
        for (Y = 0; Y < Instruments.length; Y++){
            Content += Instruments[Y] + "<br>";
        }
        document.getElementById("List_of_Instruments").innerHTML = Content;
    }

//Assignment p187 Arrays    
function array_Function() {
    var cars = ["Saab" , " Volvo" , " BMW"];
    document.getElementById("Array").innerHTML = cars;
}

//Assignment p195 Const
function constant_function() {
    const Musical_Instrument = {type: "guitar", brand:"fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

//Assignment p197 Let
function let_Function() {
    var x = 10;
    {let x = 2;}
    document.getElementById("number").innerHTML = x;
}

//Assignment p200 Return Function
function return_Function() {
    return Math.PI;
  }
 document.getElementById("pie").innerHTML = return_Function();

 //Assignmnet p203 Objects
 let car = {
     make: "Dodge ",
     model: "Viper ",
     year: "2021 ",
     color: "red ",
     description : function() {
         return "The car is a " + this.year + this.make + this.model;
     }
 };
 document.getElementById("Car_Object").innerHTML = car.description();

 //Challenge p204 
 var text ="";
 var i;
 for (i = 0; i <10; i++) {
     if (i === 3) {break;}
     text += "the number is " + i + "<br>";
 }
 document.getElementById("break").innerHTML = text;

