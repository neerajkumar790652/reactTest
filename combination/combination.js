function comb(string){
    var stringLength = string.length;
    var result = [];
    var indexCurrent = 0;

    while(indexCurrent < stringLength){
        var char = string.charAt(indexCurrent);
        var x;
        var arrTemp = [char];

        for(x in result) {
            arrTemp.push(""+result[x]+char);
        }
        result = result.concat(arrTemp);

        indexCurrent++;
    }

    return result;
}

console.log(comb("abc"));