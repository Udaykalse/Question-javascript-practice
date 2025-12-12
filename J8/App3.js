function removeElement(nums, val) {
  let kthValue = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[kthValue++] = nums[i];
    }
  }
  return kthValue;
}

console.log(removeElement([3,2,2,3], 3));