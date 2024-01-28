/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let hsh = {};
    let currentMax = 0;
    let ii = matrix.length;
    let jj = matrix[0].length;
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
            if(matrix[i][j] == '0') continue;
            currentMax = 1;
            hsh[i] ||= {}
            hsh[i][j] = true
        }
    }
    if(currentMax != 1) return 0;
    let size = 2;
    let newMax = currentMax;
    while(true){
        let newHsh = {};
        // console.log(hsh)
        // console.log(size)
        let kRs = Object.keys(hsh).map(x => parseInt(x))
        
        let iSize = 1;
        kRs.forEach(r => {
            if((r + iSize) >= ii) return;
            let kCs = Object.keys(hsh[r]).map(x => parseInt(x))
            kCs.forEach(c => {
                if((c+iSize) >= jj) return;
                if(hsh?.[r+iSize]?.[c+iSize] && hsh?.[r+iSize]?.[c] && hsh?.[r]?.[c+iSize]){
                    newHsh[r] ||= {}
                    newHsh[r][c] = true;
                    newMax = size * size;
                }
            })
        })
        if(newMax == currentMax) break;
        size++;
        hsh = newHsh;
        currentMax = newMax;
    }
    return newMax;
};