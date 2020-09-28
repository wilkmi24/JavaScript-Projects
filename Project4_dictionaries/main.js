function my_Dictionary() {//Named the function to be called in html
    var vehicle = {//adding multiple descriptions to dicitonary entry "vehicle"
        type :"Car",
        make : "Subaru",
        model : "crosstrek",
        year : 2018,
        transmission : "manual"
    };
    delete vehicle.model;//removed/deleted an element fromt the dictionary
    document.getElementById("dictionary").innerHTML = vehicle.model;
}
