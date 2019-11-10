/**
 * Write a function called "greetCustomer". ("greetCustomer" 함수를 작성하세요.)

Given a name, "greetCustomer" returns a greeting based on how many times that customer has visited the restaurant. Please refer to the customerData object. (고객들의 방문 횟수를 가지고 있는 객체와 이름이 주어졌을때, "greetCustomer" 함수는 손님이 몇번 방문했는지에 따라 다른 인삿말을 반환합니다. customerData 객체를 참고해 주세요.)

customerData의 형식은 아래와 같습니다.

  let customerData = {
  Joe: {
    visits: 1
  },
  Carol: {
    visits: 2
  },
  Howard: {
    visits: 3
  },
  Carrie: {
    visits: 4
  }
};
The greeting should be different, depending on the name on their reservation. (손님들의 예약에 나타나 있는 이름에 따라 인삿말이 달라야 합니다.)

Case 1 - Unknown customer ( Name is not present in customerData ): (상황 1 - 처음 방문한 손님 (customerData에 이름이 없을경우):)

let output = greetCustomer(customerData, 'Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'
Case 2 - Customer who has visited only once ( 'visits' value is 1 ): (상황 2 - 한번 방문했던적이 있는 손님 ('visits'의 값이 1인 경우):)

let output = greetCustomer(customerData, 'Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
Case 3 - Repeat customer: ( 'visits' value is greater than 1 ): (상황 3 - 여러번 방문한 손님 ('visits'의 값이 1보다 큰 경우):)

let output = greetCustomer(customerData, 'Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'
 */



/**
 * Notes:

Your function should not alter the customerData object to update the number of visits. (- 여러분의 함수는 방문수를 업데이트 하기위해 customerData 객체를 수정하여서는 안됩니다.)
Do not hardcode to the exact sample data. This is a BAD IDEA: (샘플 데이터를 하드코딩 하지 마세요. 좋지 않은 생각입니다.)
if (firstName === 'Joe') {
  // do something
}
 */










function greetCustomer(customerData, firstName) {
    let greeting = '';
  
    if (!customerData[firstName]) {
      greeting = `Welcome! Is this your first time?`;
    } else if (customerData[firstName].visits === 1) {
      greeting = `Welcome back, ${firstName}! We're glad you liked us the first time!`;
    } else if (customerData[firstName].visits > 1) {
      greeting = `Welcome back, ${firstName}! So glad to see you again!`;
    }
  
    return greeting;
  }