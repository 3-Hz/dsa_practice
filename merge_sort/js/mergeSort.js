function merge(left, right) {
  let arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return [...arr, ...left, ...right];
}

function mergeSort(arr) {
  let m = arr.length / 2;
  if (arr.length < 2) {
    return arr;
  }
  let left = arr.splice(0, m);
  return merge(mergeSort(left), mergeSort(arr));
}

let test = () => {
  let nums = [3, 1, 4, 2, 6, 9];
  console.log(mergeSort(nums));
}

test();