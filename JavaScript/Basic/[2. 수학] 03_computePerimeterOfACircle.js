/**
 * Write a function called "computePerimeterOfACircle". ("computePerimeterOfACircle" 함수를 작성하세요.)

Given the radius of a circle, "computePerimeterOfACircle" returns its perimeter. (원의 반지름이 주어졌을때, "computePerimeterOfACircle" 함수는 원의 둘레를 반환하세요.)

let output = computePerimeterOfACircle(4);
console.log(output); // --> 25.132741228718345
 */





























function computePerimeterOfACircle(radius) {
    return 2 * Math.PI * radius;
  }



  //or

  function computePerimeterOfACircle(radius) {
    return (radius*2)*Math.PI;
  }