function my_Dictionary() {
    var vehicle = {
        type = "Car",
        make = "Subaru",
        model = "crosstrek",
        year = 2018,
        transmission = "manual"
    };
    document.getElementById("dictionary").innerHTML = vehicle.model;
}
