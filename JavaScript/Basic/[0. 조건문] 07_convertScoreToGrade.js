/**
 * Write a function called "convertScoreToGrade". ("convertScoreToGrade" 함수를 작성하세요.)

Given a score, "convertScoreToGrade" returns a string representing the letter grade corresponding to the given score. (점수가 주어졌을때, "convertScoreToGrade" 함수는 주어진 점수와 대응하는 등급을 문자열로 반환합니다.)

Notes:

(100 - 90) --> 'A'
(89 - 80) --> 'B'
(79 - 70) --> 'C'
(69 - 60) --> 'D'
(59 - 0) --> 'F'
If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'. (만약 주어진 점수가 100을 초과하거나 0 미만이라면 'INVALID SCORE' 를 반환해야 합니다.)
let output = convertScoreToGrade(91);
console.log(output); // --> 'A'
 */

































function convertScoreToGrade(score) {
    let grade;
    if (score > 100 || score < 0) {
      return 'INVALID SCORE';
    }
    if (score === 100) {
      return 'A';
    }
    if (score >= 90) {
      grade = 'A';
    }
    else if (score >= 80) {
      grade = 'B';
    }
    else if (score >= 70) {
      grade = 'C';
    }
    else if (score >= 60) {
      grade = 'D';
    }
    else if (score >= 0) {
      grade = 'F';
    }
  
    return grade;
  }