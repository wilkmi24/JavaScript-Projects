//Ternary Operators
function ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height"). value;
    Can_ride = (Height < 52) ? "You are too short " : "You are tall enough ";
    document.getElementById("ride").innerHTML = Can_ride + "to ride.";
}
//Voting Age Program
function vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("age"). value;
    Can_vote = (Age < 18) ? "You are not old enough " : "You are old enough ";
    document.getElementById("vote").innerHTML = Can_vote + "to vote.";
}

//Keywords
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard")
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + 
    Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year
}

//Assignment
function Animal(Species, Sex, Age, Color) {
    this.Animal_Species = Species;
    this.Animal_Sex = Sex;
    this.Animal_Age = Age;
    this.Animal_Color = Color;
}
var Nala = new Animal("Cat", "Female", 5, "Calico");
var Sammy = new Animal("Dog", "Male", 7, "Brown");
var Skye = new Animal("Dog", "Female", 2, "Black and White")
function animal_Function() {
    document.getElementById("New_and_This").innerHTML = "Nala is a " + Nala.Animal_Color + "-colord " +
    Nala.Animal_Species + " who is " + Nala.Animal_Age
}

//Assignemnt p128
function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point +=1;}
        Plus_one();
        return Starting_point;
    }
}