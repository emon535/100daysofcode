// Sum All Numbers in a Range:

function sumAll(arr) {
  if (arr[0] > arr[1]) {
    let temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
  }
  let sum = 0;
  for (let i = arr[0]; i <= arr[1]; i++) {
    sum = sum + i;

  }
  console.log(sum);
  return sum;
}

sumAll([5, 10]);






// Seek and Destroy

function destroyer(arr) {
  // Remove all the values
  let newArr = arguments[0];
  var args = Array.from(arguments).slice(1);

  let result = arr.filter(function (val) {
    return !args.includes(val);
  });

  console.log(result);;
  return result;
}


destroyer([3, 5, 1, 2, 2], 2, 3, 5)
destroyer([1, 2, 3, 1, 2, 3], 2, 3);


