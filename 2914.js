/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function(s) {
    let count = 0;
    let i=0;
    while(true){
        if(s[i] != s[i+1]){
            count++;
        }
        i=i+2;
        if(i > s.length)
            return count;
    }
};