function sumSquare(arr) {
    var sum = 0, 
        i = arr.length;
    while (i--) 
     sum += Math.pow(arr[i], 2);
    return sum;
  }
   
  console.log(sumSquare([0,1,2,3,4,5])); 