/**
 * Write a function called "computeCompoundInterest". ("computeCompoundInterest" 함수를 작성하세요.)

Given a principal, an interest rate, a compounding frequency, and a time (in years), "computeCompoundInterest" returns the amount of compound interest generated. (원금, 이자, 복리 빈도, 기간(년)이 주어졌을때, "computeCompoundInterest" 함수는 이자를 반환합니다.)

let output = computeCompoundInterest(1500, 0.043, 4, 6);
console.log(output); // --> 438.8368221341061
Reference: https://en.wikipedia.org/wiki/Compound_interest#Calculation_of_compound_interest This shows the formula used to calculate the total compound interest generated. (위 링크는 복리를 계산할 수 있는 공식을 보여줍니다.)
 */















 





function computeCompoundInterest(
    principal,
    interestRate,
    compoundingFrequency,
    timeInYears
  ) {
    return principal * Math.pow(1 + interestRate / compoundingFrequency, compoundingFrequency * timeInYears) - principal;
  }