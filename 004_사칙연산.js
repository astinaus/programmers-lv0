// 정수 num1, num2가 주어질 때, 두 수의 곱, 합, 차, 나눗셈을 구하는 solution 함수를 완성하시오.

// 나눗셈은 (num1 / num2) * 1000의 정수 부분을 나타낼 것.

// 곱
function solution(num1, num2) {
  return num1 * num2;
}

// 합
function solution(num1, num2) {
  return num1 + num2;
}

// 차
function solution(num1, num2) {
  return num1 - num2;
}

// 나눗셈
function solution(num1, num2) {
  return Math.trunc((num1 / num2) * 1000);
}
