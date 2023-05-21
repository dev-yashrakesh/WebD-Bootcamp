function bmicalculator(weight,height){
    var bmi=weight/Math.pow(height,2);
    return Math.round(bmi);
}

var bmi = bmicalculator(60,1.78);
console.log(bmi);