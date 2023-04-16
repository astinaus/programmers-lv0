// 머쓱이는 40살인 선생님이 몇 년도에 태어났는지 궁금해졌습니다. 나이 age가 주어질 때, 2022년을 기준 출생 연도를 return 하는 solution 함수를 완성해주세요.

/* 
입출력 예 #1
2022년 기준 40살이므로 1983년생입니다.

입출력 예 #2
2022년 기준 23살이므로 2000년생입니다.
*/

// 1. 단순 계산 방법
function solution(age) {
  return 2022 - age + 1;
}

// 2. Date 객체 사용
function solution(age) {
  // 2022년 기준 + 1을 해 줘야 하지만 현재 연도는 2023년이므로 생략.
  return new Date().getFullYear() - age;
}
