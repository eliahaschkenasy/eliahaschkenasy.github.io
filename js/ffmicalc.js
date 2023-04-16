var heightInput = document.querySelector(".height-input-field");
var weightInput = document.querySelector(".weight-input-field");
var fatPercentageInput = document.querySelector(".fat-percentage-input-field")
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var statement = document.querySelector(".result-statement");
var FFMI, height, weight, fatPercentage;

calculateButton.addEventListener("click", ()=>{
    
    height = heightInput.value;
    weight = weightInput.value;
    fatPercentage = fatPercentageInput.value;
    // bodyFat = weight × (fatPercentage / 100)
    fatFreeMass = weight * (1 - (fatPercentage/ 100)); 
    FFMI = fatFreeMass/ (height**2);
    result.innerText = FFMI;

    if(isNaN(FFMI)) {
        statement.innerText = "Input Error";
    }else if(BMI < 18.5){
        statement.innerText = "Below Average";    
    }else if((BMI > 18.5) && (BMI < 20)){
        statement.innerText = "Average";
    }else if((BMI > 20) && (BMI < 22 )){
        statement.innerText = "Above Average";
    }else{
        statement.innerText = "Excellent";
    }
});
function toDecimal(value, decimals) {
    return +value.toFixed(decimals);
}
