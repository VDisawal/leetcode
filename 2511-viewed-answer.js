/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var hsh;
var putMarbles = function(weights, k) {
    let arr = [];

    weights.forEach((w, i) => {
        if(i === weights.length - 1) return;
        arr.push(w + weights[i+1])
    })

    arr.sort((x, y) => x-y);

    let max = arr[0] + arr[arr.length - 1] || 0
    let min = arr[0] + arr[arr.length - 1] || 0
    for(let i=0; i<arr.length; i++){
        if(i < k - 1){
            min += arr[i]
        }
        if(i > arr.length - k){
            max += arr[i]
        }
    }
    return max - min;
};
