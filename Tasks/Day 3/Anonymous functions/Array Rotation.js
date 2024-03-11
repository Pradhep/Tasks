//Rotation By k times

 
let nums = [1,2,3,4,5];
 
const rotateArray1 = function(nums, k) {

  for (let i = 0; i < k; i++) {
      nums.unshift(nums.pop());
  }

  return nums;
}

console.log(rotateArray1(nums,4));