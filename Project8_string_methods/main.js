//Assignment p143 Cancatenate
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentencs.";
    var Whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = Whole_sentence;//the result should be the full sentence
}

//Assignment p145 Slice Method
function slice_Method() {
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section = sentence.slice(27,33);
    document.getElementById("slice").innerHTML = section; //the result will be Jonny
}

//Challenge p146 toUpperCase Method
function toUC_Method() {
    var str = "Good Afternoon!";
    var res = str.toLocaleUpperCase();
    document.getElementById("test").innerHTML = res; // the result will be "GOOD AFTERNOON!"
}

//Challenge p146 search_Method
function search_Method() {
    var str = "Billy has a dog named Spot";
    var n = str.search("dog");
    document.getElementById("pet").innerHTML = n;// the result will be the mathmatical place of "dog"
}

//Assignment p148 String Method
function string_Method() {
    var X=182;
    document.getElementById("Numbers_tostring").innerHTML = X.toString();// the result will be 182
}

//Assignment p150 toPrecision Method
function toPrecision() {
    var z = 12938.3012987376112;
    document.getElementById("precision").innerHTML = z.toPrecision(10); //the result should be 12938.30130
}

//Challenge p151 toFixed Method
function toFixed() {
    var num = 5.56789;
    var n = num.toFixed(2);
    document.getElementById("practice").innerHTML = n;//should be 5.57
}

//Challenge p151 valueOf Method
function valueOf_Method() {
    var str = "Hello World!";
    var res = str.valueOf();
    document.getElementById("demo").innerHTML = res;// should be "Hello World!"
}

