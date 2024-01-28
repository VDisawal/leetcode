/**
 * @param {number} n
 * @return {number}
 */

var totalMoney = function(n) {
    let a = parseInt(n/7)
    let b = parseInt((((a+3)*(a+4)/2) - 6) * 7)
    let c = n - 7 * a
    let d = parseInt(((a+c) * (a+c+1)/2)-((a) * (a+1))/2)
    return b + d
};