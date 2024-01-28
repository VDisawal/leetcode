/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
    let [a, b, k, c, d] = time;
    if(a === "?" && b === "?"){
        a = "2";
        b = "3"
    }
    else if(a === "?"){
        a = parseInt(b) > 3 ? 1 : 2;
    }
    else if(b === "?"){
        b = parseInt(a) == 2 ? 3 : 9
    }

    c = c == "?" ? 5 : c;
    d = d == "?" ? 9 : d;
    
    return a+b+k+c+d;
};