let binarySearch = function (sortedArr, target, start = 0, end = sorted_arr.length - 1) {
   if (start > end) return false;

   let mid = Math.floor((start + end) / 2);

   if (sortedArr[mid] === target) return true;

   if (sortedArr[mid] > target)
      return binarySearch(sorted_arr, target, start, mid - 1);
   else return binarySearch(sortedArr, target, mid + 1, end);
}
 