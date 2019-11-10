/**
 * sum
n까지의 총 합: n을 매개변수로 받아 0 부터 n 까지 모든 수의 총 합을 반환하는 함수를 작성하세요.

sum(3); // => 6
sum(4); // => 10
sum(5); // => 15
 */






























function sum(n) {
    let result = 0;
  
    for (let i = 0; i <= n; i++) {
      result = result + i;
    }
    
    return result;
  }