def swap(arr, a, b):
  temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
  return arr

def insertionSort(arr):
  for i in range(1, len(arr)):
    j = i
    while j > 0 and arr[j-1] > arr[j]:
      swap(arr, j, j - 1)
      j = j - 1
  return arr

def test():
  arr = [2, 1, 4, 3]
  print(insertionSort(arr))

test()