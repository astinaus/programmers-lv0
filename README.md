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

- 나눗셈은 (num1 / num2) \* 1000의 정수 부분을 나타낼 것.

```js
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
```

---

### 2023.04.09

#### 나이 출력

- 머쓱이는 40살인 선생님이 몇 년도에 태어났는지 궁금해졌습니다. 나이 age가 주어질 때, 2022년을 기준 출생 연도를 return 하는 solution 함수를 완성해주세요.

입출력 예 #1

- 2022년 기준 40살이므로 1983년생입니다.

입출력 예 #2

- 2022년 기준 23살이므로 2000년생입니다.

```js
// 1. 단순 계산 방법
function solution(age) {
  return 2022 - age + 1;
}

// 2. Date 객체 사용
function solution(age) {
  // 2022년 기준 + 1을 해 줘야 하지만 현재 연도는 2023년이므로 생략.
  return new Date().getFullYear() - age;
}
```

- Date 객체는 현재 날짜를 기준으로 출력하므로, 2022년 기준 + 1을 해줘야 하지만 현재 연도는
  2023년 이므로 + 1을 생략해주었다.

---

### 2023.04.10

#### 각도기

각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.

- 조건 : 0 < angle < 180 , angle은 정수.

입출력 예 #1

- angle이 70이므로 예각입니다. 따라서 1을 return합니다.

입출력 예 #2

- angle이 91이므로 둔각입니다. 따라서 3을 return합니다.

입출력 예 #2

- angle이 180이므로 평각입니다. 따라서 4를 return합니다.

```js
function solution(angle) {
  return angle > 0 && angle < 90 ? 1 : angle === 90 ? 2 : angle > 90 && angle < 180 ? 3 : 4;
}
```

---

### 2023.04.11

#### 배열의 평균값

정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

제한사항

- 0 ≤ numbers의 원소 ≤ 1,000
- 1 ≤ numbers의 길이 ≤ 100
- 정답의 소수 부분이 .0 또는 .5인 경우만 입력으로 주어집니다.

```js
function solution(numbers) {
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}
```

---

### 2023.04.12

#### 짝수의 합 구하기

정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

입출력 예 #1

- n이 10이면 2 + 4 + 6 + 8 + 10 = 30을 return 합니다.

입출력 예 #2

- n이 4이면 2 + 4 = 6을 return 합니다.

```js
function solution(n) {
  return n % 2 === 0 ? ((n + 2) * (n / 2)) / 2 : ((n + 1) * ((n - 1) / 2)) / 2;
}
```

---

### 2023.04.13

#### 양꼬치

머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요.

입출력 예 #1

- 10인분을 시켜 서비스로 음료수를 하나 받아 총 10 _ 12000 + 3 _ 2000 - 1 \* 2000 = 124,000원입니다.

입출력 예 #2

- 64인분을 시켜 서비스로 음료수를 6개 받아 총 64 _ 12000 + 6 _ 2000 - 6 \* 2000 =768,000원입니다.

```js
function solution(n, k) {
  return 12000 * n + k * 2000 - Math.trunc(n / 10) * 2000;
}
```

---

### 2023.04.14

#### 중복된 숫자 개수

정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

입출력 예 #1

- [1, 1, 2, 3, 4, 5] 에는 1이 2개 있습니다.

입출력 예 #2

- [0, 2, 3, 4] 에는 1이 0개 있습니다.

```js
function solution(array, n) {
  return array.filter((el) => el === n).length;
}
```
