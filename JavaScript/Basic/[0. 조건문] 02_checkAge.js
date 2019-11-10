/**
 * checkAge 함수를 작성하세요
이름과 나이를 파라미터로 받는 checkAge라는 함수는 두개 중 하나의 메시지를 리턴합니다.

만일 21살보다 적으면, Go home, {전달받은_이름}! 만일 21살이거나 더 나이가 많으면, Welcome, {전달받은_이름}! 을 리턴하세요. 쉼표와 공백, 느낌표까지 정확히 리턴해야 합니다.

let output = checkAge('Adrian', 22);
console.log(output); // --> 'Welcome, Adrian!'
 */






















function checkAge(name, age) {
    if (age < 21) {
      return 'Go home, ' + name + '!';
    } else {
      return 'Welcome, ' + name + '!';
    }
  }