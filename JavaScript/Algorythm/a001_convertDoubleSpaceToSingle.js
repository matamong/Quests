/**
 * Write a function called "convertDoubleSpaceToSingle". ("convertDoubleSpaceToSingle" 함수를 작성하세요.)

Given a string, "convertDoubleSpaceToSingle" returns the passed in string, with all the double spaces converted to single spaces. (문자열이 주어졌을때, "convertDoubleSpaceToSingle" 함수는 주어진 문자열에 있는 띄어쓰기 두개(double spaces)를 띄어쓰기 한개(single space)로 변환한 뒤 해당 문자열을 반환합니다.)

let output = convertDoubleSpaceToSingle('string  with  double  spaces');
console.log(output); // --> "string with double spaces"
 */











function convertDoubleSpaceToSingle(str) {
    let result = '';
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ' ' && str[i + 1] === ' ') {
      } else {
        result = result + str[i];
      }
    }
    return result;
  }