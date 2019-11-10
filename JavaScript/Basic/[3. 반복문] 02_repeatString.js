/**
 * Write a function called "repeatString". ("repeatString" 함수를 작성하세요.)

Given a string and a number, "repeatString" returns the given string repeated the given number of times. (문자열과 숫자가 주어졌을때, "repeatString" 함수는 주어진 문자열을 주어진 숫자만큼 반복하여 반환해야 합니다.)

let output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'
 */






























function repeatString(string, num) {
    let result = '';

    for (let i = 0; i < num; i++) {
        result = result + string;
    }

    return result;
}




//or


function repeatString(string, num) {
    return string.repeat(num);
  }
  