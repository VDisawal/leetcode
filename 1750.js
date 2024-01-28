/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let start = 0, end = s.length - 1;
    while(true){
        console.log(start, end)
        if(start == end){
            return 1;
        }
        if(s[start] !== s[end]) return end - start + 1;
        while(start !== end && s[start] == s[start + 1]){
            start++;
        }
        while(start !== end && s[end] == s[end - 1]){
            end--;
        }
        if(start == end){
            return 0;
        }
        start++;
        end--;
    }
};