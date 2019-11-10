/**
 * "getProductOfAllElementsAtProperty" 함수를 작성하세요.
객체와 키가 주어졌을때, "getProductOfAllElementsAtProperty" 함수는 주어진 키에 위치한 배열의 요소의 곱을 반환합니다.

Notes:

만약 배열이 비어있다면, 0을 반환해야 합니다.
만약 주어진 키에 위치하는 속성값이 배열이 아니라면, 0을 반환해야 합니다.
만약 주어진 키에 위치하는 속성이 없다면, 0을 반환해야 합니다.
let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
Hint:

배열의 reduce 메소드를 이용해보세요.
 */






























function product(accumulator, value) {
    return accumulator * value;
  }
  
  function getProductOfAllElementsAtProperty(obj, key) {
    let arrayProperty = obj[key];
    
    if (!Array.isArray(arrayProperty)) {
      return 0;
    }
  
    if (arrayProperty.length === 0) {
      return 0;
    }
  
    return arrayProperty.reduce(product);
  }