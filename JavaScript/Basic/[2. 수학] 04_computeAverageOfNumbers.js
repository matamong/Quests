/**
 * Write a function called "computeAverageOfNumbers". ("computeAverageOfNumbers" 함수를 작성하세요.)

Given an array of numbers, "computeAverageOfNumbers" returns their average. (숫자이 배열이 주어졌을때, "computeAverageOfNumbers" 함수는 그들의 평균을 반환합니다.)

Notes:

If given an empty array, it should return 0. (만약 빈배열이 주어졌다면, 0을 반환해야 합니다.)
let input = [1,2,3,4,5];
let output = computeAverageOfNumbers(input);
console.log(output); // --> 3
 */




























function computeAverageOfNumbers(nums) {
    let len = nums.length
    if (len === 0) return 0;
    let sum = 0;
    for (let i = 0; i < len; i++) {
      sum = sum + nums[i];
    }
    return sum / len;
  }