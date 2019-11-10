/**
 * Write a function called "calculateBillTotal". ("calculateBillTotal" 함수를 작성하세요.)

Given the pre tax and pre tip amount of a meal, "calculateBillTotal" returns the total amount due after tax and tip. (팁과 세금을 제외한 식사값이 주어졌을때, "calculateBillTotal" 함수는 팁과 세금이 포함된 총 식사값을 반환합니다.)

Notes:

Assume that sales tax is 9.5% and tip is 15%. (- 세금은 9.5% 팁은 15% 로 계산하세요.)
Do NOT tip on the sales tax, only on the pre tip amount. (- 팁을 계산할때 세금을 포함하여 계산하지 마세요.)
let output = calculateBillTotal(20);
console.log(output); // --> 24.9
 */













 




function calculateBillTotal(preTaxAndTipAmount) {
    let salesTax = preTaxAndTipAmount * 0.095;
    let tip = preTaxAndTipAmount * 0.15;
  
    return preTaxAndTipAmount + salesTax + tip;
  }