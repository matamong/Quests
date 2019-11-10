/**Write a function called "computeSquareRoot". ("computeSquareRoot" 함수를 작성하세요.)

Given a number, "computeSquareRoot" returns its square root. (숫자가 주어졌을때, "computeSquareRoot" 함수는 해당 수의 제곱근 값을 반환합니다.)

let output = computeSquareRoot(9);
console.log(output); // --> 3
Do not use Math.sqrt(); for this problem. Instead, use this iterative way of solving the problem: (Math.sqrt()를 사용하지 말고, 아래 링크에서 나온 방법을 통해 해결하세요.)

https://wwwproxy.deltacollege.edu/dept/basicmath/documents/BABYLONIAN.doc
 * 
 */













 




function computeSquareRoot(num) {
    let closestNum = 1
  
    while ( closestNum * closestNum < num) {
      closestNum ++
    }
  
    if (closestNum * closestNum === num) {
      return closestNum
    }
  
    for (let i = 0; i < 3; i++) {
      closestNum = (closestNum + (num / closestNum)) / 2
    }
  
    return closestNum
  }











