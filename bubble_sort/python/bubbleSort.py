def swap(arr, i, j):
  temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp

def bubbleSort(arr):
  unsorted = True
  while unsorted:
    unsorted = False
    for i in range(len(arr) - 1):
      if arr[i] > arr[i + 1]:
        swap(arr, i, i + 1)
        unsorted = True
  return arr

print(bubbleSort([2, 1, 3, 4]))