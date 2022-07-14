 
 // using for loop
 function diagonalDifference(arr) {
    const len = arr.length;
    let leftDiag = 0;
    let rightDia = 0;
    
    for(let row = 0; row < len; row++){
        for(let col =0; col < len; col++){
           leftDiag += arr[row][col];
          }
          if(row + col === len -1){
              rightDia += arr[row][col];
          }
        }
   return Math.abs(leftDiag - rightDia);
  }