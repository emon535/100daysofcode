// Sum All Numbers in a Range:

function sumAll(arr) {
    if(arr[0]>arr[1]){
      let temp = arr[0];
      arr[0]= arr[1];
      arr[1]=temp;
    }
   let sum = 0; 
   for(let i = arr[0]; i<=arr[1]; i++){
     sum =sum+i;
    
   }
   console.log(sum);
   return sum;
  }
   
  sumAll([5, 10]);


  