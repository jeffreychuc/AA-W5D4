
function range(start, end)  {
  if (start === end)  {
    return [start];
  }
  let retArr = [start];
  return retArr.concat(range(start+1, end));
}

console.log(range(0,10));

function sumRec(arr)  {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumRec(arr.slice(1));
}

console.log(sumRec([1,2,3,4,5,6,7,8,9]));

function exponent(base, exp)  {
  if (exp === 0)  {
    return 1;
  }
  return base * exponent(base, exp - 1);
}

console.log(exponent(10, 10));

function exponent(base, exp)  {
  if (exp === 0)  {
    return 1;
  } else if (exp === 1) {
    return base;
  }

  if (exp % 2 === 0) {
    return Math.pow(exponent(base, exp / 2), 2);
  }

  return Math.pow(base * (exponent(base, (exp-1) / 2)), 2);
}

console.log(exponent(10, 10));


function fibonacci(n) {
  if(n===2) {
    return [0,1];
  } else if (n===1) {
    return [0];
  }
  const fibo = fibonacci(n-1);
  fibo.push(fibo[fibo.length-1] + fibo[fibo.length-2]);
  return fibo;
}

console.log(fibonacci(10));



// function bsearch(arr, target) {
//   let mid = Math.floor(arr.length/2);
//
//   if (arr[mid] === target)  {
//     return mid;
//   } else if (arr.length === 1) {
//     return -1;
//   }
//
//   if (arr[mid] < target) {
//     return mid+1 + bsearch(arr.slice(mid+1), target);
//   } else {
//     return bsearch(arr.slice(0, mid-1), target);
//   }
// }

// console.log(bsearch([1,2,3,4,5,6,7,8,9], 8));


function bsearchHelper(arr, target, left, right) {
  if (left > right) {
    return -1;
  }

  const mid = Math.floor((left + right) / 2);

  if(arr[mid] === target) {
    return mid;
  } else if (target > arr[mid]) {
    return bsearchHelper(arr, target, mid+1, right);
  } else {
    return bsearchHelper(arr, target, left, mid-1);
  }
}

function bsearch(arr, target) {
  return bsearchHelper(arr, target, 0, arr.length-1);
}

console.log(bsearch([1,2,3,4,5,6,7,8,9], 7));


function mergeSort (arr)  {
  if (arr.length === 1) {
    return arr;
  } else if (arr.length === 0) {
    return [];
  }

  const mid = Math.floor(arr.length/2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge (left, right)  {

  const fin = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      fin.push(right.shift());
    } else {
      fin.push(left.shift());
    }
  }

  const debug = fin.concat(left, right);
  return debug;
}


console.log(mergeSort([1,3,6,8,12,5,4,2,3,4,6]));


function subsets(arr) {
  if (arr.length === 1) {
    return [arr];
  }

  let subsetsResult = [arr];
  for (var i = 0; i < arr.length; i++) {
    const subArr = arr.slice(0,i).concat(arr.slice(i+1));

    subsetsResult = subsetsResult.concat(subsets(subArr));
  }

  return subsetsResult;
}

console.log(subsets([0,1,2,3]));
