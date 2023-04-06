# 프로그래머스 Lv 0 문제 풀이 저장용 레포입니다.

## language : JavaScript

## 1일 1문제를 풀고 저장합니다.

### 2023.04.06

#### 몫구하기

- 정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.

입출력 예 #1

- num1이 10, num2가 5이므로 10을 5로 나눈 몫 2를 return 합니다.

입출력 예 #2

- num1이 7, num2가 2이므로 7을 2로 나눈 몫 3을 return 합니다.

제출정답

```js
function solution(num1, num2) {
  return Math.trunc(num1 / num2);
}
```

참고 : Math.floor() VS Math.trunc() https://velog.io/@sangmin-iam/TIL-Math.trunc-vs-Math.floor

---

### 2023.04.07

#### 나머지 구하기

- 정수 num1 , num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.

입출력 예 #1

- num1이 3, num2가 2이므로 3을 2로 나눈 나머지 1을 return 합니다.

입출력 예 #2

- num1이 10, num2가 5이므로 10을 5로 나눈 나머지 0을 return 합니다.

제출정답

```js
function solution(num1, num2) {
  return Math.trunc(num1 / num2);
}
```

---
