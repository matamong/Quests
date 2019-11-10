/**
 * isFalsy함수를 작성하세요
isFalsy함수가 있습니다. falsy 값은, 거짓으로 취급되는 값을 의미합니다. 이 함수는 주어진 파라미터가 falsy값인지 아닌지를 평가합니다.

let output = isFalsy('hello');
console.log(output); // --> false

let output2 = isFalsy(0);
console.log(output2); // --> true

let output3 = isFalsy(true);
console.log(output3); // --> false

let output4 = isFalsy(undefined);
console.log(output4); // --> true

let output5 = isFalsy(NaN);
console.log(output5); // --> true

let output6 = isFalsy('');
console.log(output6); // --> true
 */


























function isFalsy(anything) {
    return !Boolean(anything);
  }

  //or


  function isFalsy(anything) {
    if(anything === false){
      return true;
    }
    if(anything === null){
      return true;
    }
    if(anything === undefined){
      return true;
    }
    if(anything === 0){
      return true; 
    }
    if(isNaN(anything)){
      return true;
    }
    if(anything === ''){
      return true;
    }
    return false
  }
  