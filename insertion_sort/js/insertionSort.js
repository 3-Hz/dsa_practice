const swap = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return temp;
}

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j-1] > arr[j]) {
      swap(arr, j, j - 1);
      j--;
    }
  }
  return arr;
}

let test = () => {
  let arr = [2, 1, 4, 3];
  console.log(insertionSort(arr));
}

test();