//Global variable
var x = 10;
function Add_numbers_1() {//expected outcome is 30
    document.write(20 + x + "<br>");
}
function Add_numbers_2() {//expected outcome is 110
    document.write(x +100);
}

//Local variable
function Add_numbers_3() {
    var y = 10;
    document.write(20 + y + "<br>");
}
function Add_numbers_4() {
    document.write(y + 100);
}

//Using Console.log to troubleshoot
function Add_numbers_5() {
    var r = 10;
    console.log(15 +r);
}
function Add_numbers_6() {
    console.log(r + 100);
}

//Assignment p134
function get_Date() {
    if (new Date().getHours()< 18) {
        document.getElementById("greeting").innerHTML = "How are you today?";
    }
}

//Assignment p135
function get_Dateb() {
    if (new Date().getHours()> 12) {
        document.getElementById("lunch").innerHTML = "Time for lunch!";
    }
}

//Assignment p137
function age_Function() {
    Age = document.getElementById("Age"). value;
    if (Age>=18)  {
        vote = "You are old enough to vote!";
    }
    else {
        vote = "You are not old enought to vote!"
    }
    document.getElementById("How_old_are_you?").innerHTML = vote;
}

//Assignment p139
function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is the afternoon.";
    }
    else if  (Time > 12 == Time < 18) {
        Reply = "It is the afternoon."
    }
    else {
        Reply = "It is the evening time."
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}