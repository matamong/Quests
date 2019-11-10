/**
 * "getElementsLessThan100AtProperty" 함수를 작성하세요.
객체와 키값이 주어졌을때, "getElementsLessThan100AtProperty" 함수는 주어진 키에 위치하는 배열에서 100 보다 작은 값으로만 이루어진 배열을 반환합니다.

Notes:

만약 배열이 비었다면, 빈 배열을 반환해야 합니다.
만약 배열에 100 미만인 요소가 없다면, 빈 배열을 반환해야 합니다.
만약 주어진 키에 위치하는 속성값이 배열이 아니라면, 빈 배열을 반환해야 합니다.
만약 주어진 객체에 주어진 키가 없다면, 빈 배열을 반환해야 합니다.
let obj = {
  key: [1000, 20, 50, 500]
};
let output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]
Hint:

배열의 filter 메소드를 이용해보세요.
 */



























function lessThan100(number) {
    return number < 100;
  }
  
  function getElementsLessThan100AtProperty(obj, key) {
    let arrayProperty = obj[key];
    if (!Array.isArray(arrayProperty)) {
      return [];
    }
    return arrayProperty.filter(lessThan100);
  }