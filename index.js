//fibonacci
function fib(n) {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  } else {
    let arr = fib(n - 1);
    return [...arr, arr[n - 1] + arr[n - 2]];
  }
}

//merge sort
function merge(left, right) {
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
}

function mergeSort(arr) {
  let halfwayPoint = Math.floor(arr.length / 2);
  let left = arr.slice(0, halfwayPoint);
  let right = arr.slice(halfwayPoint, arr.length);

  if (arr.length <= 1) {
    return arr;
  } else {
    return merge(mergeSort(left), mergeSort(right));
  }
}
