var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let v = nums[mid];

    if (v === target) {
      return mid;
    } else if (v < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};
