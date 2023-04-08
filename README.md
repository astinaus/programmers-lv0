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

### 2023.04.06

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

### 2023.04.07

#### 숫자비교하기

- 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.

입출력 예 설명 #1

- num1이 2이고 num2가 3이므로 다릅니다. 따라서 -1을 return합니다.

입출력 예 설명 #2

- num1이 11이고 num2가 11이므로 같습니다. 따라서 1을 return합니다.

입출력 예 설명 #3

- num1이 7이고 num2가 99이므로 다릅니다. 따라서 -1을 return합니다.

코드

```js
function solution(num1, num2) {
  return num1 === num2 ? 1 : -1;
}
```

---

### 2023.04.08

#### 사칙연산 (곱, 합, 차, 나눗셈)

- 정수 num1, num2가 주어질 때, 두 수의 곱, 합, 차, 나눗셈을 구하는 solution 함수를 완성하시오.

// 곱

```js
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
  return num1 / num2;
}
```
