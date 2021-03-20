const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const bubbleSort = (arr) => {
  let i = 0;
  while (i < arr.length - 1) {
    if (arr[i] > arr[i + 1]) {
      swap(arr, i, i + 1);
      i = 0;
    } else {
      i++;
    }
  }
  return arr;
}

console.log(bubbleSort([2, 1, 3, 4]));