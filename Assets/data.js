function report(){

    Event.preventDefault();

    let data = [] ;

        data [0]["shed_A"] = parseInt(document.getElementById("shed_A").value);
        data [1]["shed_B"] = parseInt(document.getElementById("shed_B").value);
        data [2]["shed_C"] = parseInt(document.getElementById("shed_C").value);
        data [3]["shed_D"] = parseInt(document.getElementById("shed_D").value);

    let sumData = data.shed_A + data.shed_A + data.shed_C + data.shed_D; 
    
    document.getElementById("outputData").innerHTML += "<Br>"

    document.getElementById("outputData").innerHTML += "<p>Your production in shed A is " + data.shed_A + " litres/day</p>";
    document.getElementById("outputData").innerHTML += "<p>Your production in shed B is " + data.shed_B + " litres/day</p>";
    document.getElementById("outputData").innerHTML += "<p>Your production in shed C is " + data.shed_C + " litres/per day</p>";
    document.getElementById("outputData").innerHTML += "<p>Your production in shed D is " + data.shed_D + " litres/per day</p>";

    document.getElementById("outputData").innerHTML += "<p>Your total production per day is " + sumData + " litres/per day</p>";
    
        








}