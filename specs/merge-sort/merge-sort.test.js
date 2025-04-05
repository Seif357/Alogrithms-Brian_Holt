/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  if (nums.length < 2) return nums;
  if (nums.length % 2 == 0) {
    return merge(
      mergeSort(nums.slice(0, nums.length / 2)),
      mergeSort(nums.slice(nums.length / 2, nums.length))
    );
  } else {
    return merge(
      mergeSort(nums.slice(0, nums.length / 2 + 1)),
      mergeSort(nums.slice(nums.length / 2 + 1, nums.length))
    );
  }
};
const merge = (left, right) => {
  const results = [];
  while(left.length!=0&&right.length!=0) {
      if (left[0] > right[0]) {
        results.push(right.shift());
      } else {
        results.push(left.shift());
      }
    }
    return results.concat(left, right);
}; // unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
