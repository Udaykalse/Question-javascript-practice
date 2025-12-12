function searchInsert(nums, target) {
  let low = 0,
    hight = nums.length - 1;

  while (low <= hight) {
    let mid = Math.floor((low + hight) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) low = mid + 1;
    else hight = mid - 1;
  }
  return low;
}

console.log(searchInsert([1,3,5,6], 5));