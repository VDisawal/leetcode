/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVII = function(stones) {
    let sum = stones.reduce((a, b) => a+b)
    var hsh = {}
    let x = solve(stones, sum, 0, stones.length - 1, hsh)
    return x[0] - x[1];
};

var solve = function(stones, sum, start, end, hsh){



    if(start + 1 == end){
        let l = stones[start] > stones[end] ? stones[start] : stones[end]
        return [l, 0]
    }

    hsh[start] ||= {}
    if(hsh[start][end]) {
        return hsh[start][end]; 
    }

    let sumA = sum - stones[start];
    let a = solve(stones, sumA, start + 1, end, hsh)
    let sumB = sum - stones[end];
    let b = solve(stones, sumB, start, end - 1, hsh)

    sumA = sumA + a[1]
    sumB = sumB + b[1]

    let valA = sumA - a[0]
    let valB = sumB - b[0]

    let c = [sumA, a[0]]
    if(valA < valB){
        c = [sumB, b[0]]
    }

    hsh[start][end] = c;
    // console.log(JSON.parse(JSON.stringify(hsh)))
    // console.log(c)
    return c;
}