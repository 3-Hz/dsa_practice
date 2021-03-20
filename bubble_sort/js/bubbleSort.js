const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const bubbleSort = (arr) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < arr.length - 1; i++)
    if (arr[i] > arr[i + 1]) {
      swap(arr, i, i + 1);
      unsorted = true;
    }
  }
  return arr;
}

console.log(bubbleSort([2, 1, 3, 4]));