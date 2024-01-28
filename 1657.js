//start : 10:33
//end   : 10:53 
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if(word1.length != word2.length) return false;
    let [a, alphabetA] = countHash(word1);
    let [b, alphabetB] = countHash(word2);
    
    return isAlphabetSetSame(alphabetA, alphabetB) && isHashEqual(a,b)
};

var countHash = function(word){

    let hsh = {};
    word.split("").forEach((x) => {
        hsh[x] ||= 0;
        hsh[x]++;
    })

    let hsh2 = {};
    let alphabets = Object.keys(hsh).sort()
    alphabets.forEach((x) => {
        hsh2[hsh[x]] ||= 0;
        hsh2[hsh[x]]++;
    })
    return [hsh2, alphabets];
}

var isHashEqual = (a, b) => {
    let keys = Object.keys(a)
    for(let i=0; i<keys.length; i++){
        if(a[keys[i]] != b[keys[i]]) return false; 
    }
    return true;
}

var isAlphabetSetSame = (a, b) => {
    for(let i=0; i<a.length; i++){
        if(a[i] !== b[i]) return false;
    }
    return true;
}