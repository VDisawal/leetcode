/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function(equation) {
    let [right, left] = equation.split("=")
    
    r_coeff = fetch_coeff_of_x(right);
    l_coeff = fetch_coeff_of_x(left);

    r_cons = fetch_constant(right);
    l_cons = fetch_constant(left);

    cons = l_cons - r_cons;
    coeff = l_coeff - r_coeff;

    // coeff * x + cons = 0
    // x = (-cons/coeff)
    if(coeff == 0 && cons !== 0){
        return "No solution"
    }
    if(coeff == 0){
        return "Infinite solutions"
    }
    else {
        return "x=" +(parseInt((-1 * cons)/coeff))
    }
};

var fetch_coeff_of_x = (str) => {
    let arr = split_by_plus_minus(str);
    let coeff = arr.filter(x => {
        return x.includes("x")
    }).map(x => {
        let a = x.replace(/x/g, "")
        if(a === "") return 1;
        if(a === "-") return -1;
        return parseInt(a);
    }).reduce((a, x) => {
        return a+x
    }, 0)
    return coeff;
}

var fetch_constant = (str) => {
    let arr = split_by_plus_minus(str);
    let coeff = arr.filter(x => {
        return !x.includes("x")
    }).map(x => {
        return parseInt(x);
    }).reduce((a, x) => {
        return a+x
    }, 0)
    return coeff;
}


var split_by_plus_minus = (str) => {
    // Better way of splitting would have been to replace - with +- and then split with -
    let arr = [];
    let tempStr = "";
    for(let i=0; i<str.length; i++){
        let a = str[i]
        if(a !== "+" && a !== "-"){
            tempStr = tempStr + a;
        }
        if(a === "+" || a==="-" || i+1 == str.length){
            if(tempStr !== "") arr.push(tempStr);
            if(a === "+"){
                tempStr = ""
            }
            else {
                tempStr = "-"
            }
        }

    }
    console.log(arr)
    return arr;
    
}