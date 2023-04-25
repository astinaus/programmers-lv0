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

---

### 2023.04.15

#### 순서쌍의 개수

순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다. 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.

입출력 예 #1

- n이 20 이므로 곱이 20인 순서쌍은 (1, 20), (2, 10), (4, 5), (5, 4), (10, 2), (20, 1) 이므로 6을 return합니다.

입출력 예 #2

- n이 100 이므로 곱이 100인 순서쌍은 (1, 100), (2, 50), (4, 25), (5, 20), (10, 10), (20, 5), (25, 4), (50, 2), (100, 1) 이므로 9를 return합니다.

```js
function solution(n) {
  return Array(n)
    .fill(1)
    .map((v, i) => v + i)
    .filter((el) => n % el === 0).length;
}
```

---

### 2023.04.16

#### 모음 개수

영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

입출력 예 #1

- "bus"에서 모음 u를 제거한 "bs"를 return합니다.

입출력 예 #1

- "nice to meet you"에서 모음 i, o, e, u를 모두 제거한 "nc t mt y"를 return합니다

```js
function solution(my_string) {
  return my_string.replace(/[aeiou]/g, '');
}
```

---

### 2023.04.16

#### 개미 군단

개미 군단이 사냥을 나가려고 합니다. 개미군단은 사냥감의 체력에 딱 맞는 병력을 데리고 나가려고 합니다. 장군개미는 5의 공격력을, 병정개미는 3의 공격력을 일개미는 1의 공격력을 가지고 있습니다. 예를 들어 체력 23의 여치를 사냥하려고 할 때, 일개미 23마리를 데리고 가도 되지만, 장군개미 네 마리와 병정개미 한 마리를 데리고 간다면 더 적은 병력으로 사냥할 수 있습니다. 사냥감의 체력 hp가 매개변수로 주어질 때, 사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 몇 마리의 개미가 필요한지를 return하도록 solution 함수를 완성해주세요.

입출력 예 #1

- hp가 23이므로, 장군개미 네마리와 병정개미 한마리로 사냥할 수 있습니다. 따라서 5를 return합니다.

입출력 예 #2

- hp가 24이므로, 장군개미 네마리 병정개미 한마리 일개미 한마리로 사냥할 수 있습니다. 따라서 6을 return합니다.

입출력 예 #3

- hp가 999이므로, 장군개미 199 마리 병정개미 한마리 일개미 한마리로 사냥할 수 있습니다. 따라서 201을 return합니다.

```js
function solution(hp) {
  return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + Math.floor((hp % 5) % 3);
}
```

---

### 2023.04.17

#### 배열 두배 만들기

정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

입출력 예 #1

- [1, 2, 3, 4, 5]의 각 원소에 두배를 한 배열 [2, 4, 6, 8, 10]을 return합니다.

입출력 예 #2

- [1, 2, 100, -99, 1, 2, 3]의 각 원소에 두배를 한 배열 [2, 4, 200, -198, 2, 4, 6]을 return합니다.

```js
function solution(numbers) {
  return numbers.map((el) => el * 2);
}
```

---

### 2023.04.18

#### 제곱수 판별하기

어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.

입출력 예 #1

- 144는 12의 제곱이므로 제곱수입니다. 따라서 1을 return합니다.

입출력 예 #2

- 976은 제곱수가 아닙니다. 따라서 2를 return합니다.

```js
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}
```

---

### 2023.04.19

#### 잘라서 배열로 저장하기

문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

입출력 예 #1

- "abc1Addfggg4556b" 를 길이 6씩 잘라 배열에 저장한 ["abc1Ad", "dfggg4", "556b"]를 return해야 합니다.

입출력 예 #2

- "abcdef123" 를 길이 3씩 잘라 배열에 저장한 ["abc", "def", "123"]를 return해야 합니다.

```js
function solution(my_str, n) {
  let reg = new RegExp(`.{1,${n}}`, 'g');
  return my_str.match(reg);
}
```

---

### 2023.04.20

#### 빈 배열에 추가, 삭제하기

아무 원소도 들어있지 않은 빈 배열 X가 있습니다. 길이가 같은 정수 배열 arr과 boolean 배열 flag가 매개변수로 주어질 때, flag를 차례대로 순회하며 flag[i]가 true라면 X의 뒤에 arr[i]를 arr[i] x 2 번 추가하고, flag[i]가 false라면 X에서 마지막 arr[i]개의 원소를 제거한 뒤 X를 return 하는 solution 함수를 작성해 주세요.

```js
function solution(arr, flag) {
  let X = [];
  flag.forEach((el, index) => {
    if (el) {
      for (let i = 0; i < arr[index] * 2; i++) {
        X.push(arr[index]);
      }
    } else if (!el) {
      for (let i = 0; i < arr[index]; i++) {
        X.pop();
      }
    }
  });

  return X;
}
```

---

### 2023.04.21

#### 조건 문자열

문자열에 따라 다음과 같이 두 수의 크기를 비교하려고 합니다.

두 수가 n과 m이라면
">", "=" : n >= m
"<", "=" : n <= m
">", "!" : n > m
"<", "!" : n < m
두 문자열 ineq와 eq가 주어집니다. ineq는 "<"와 ">"중 하나고, eq는 "="와 "!"중 하나입니다. 그리고 두 정수 n과 m이 주어질 때, n과 m이 ineq와 eq의 조건에 맞으면 1을 아니면 0을 return하도록 solution 함수를 완성해주세요.

입출력 예 #1

- 20 <= 50은 참이기 때문에 1을 return합니다.

입출력 예 #2

- 41 > 78은 거짓이기 때문에 0을 return합니다.

```js
function solution(ineq, eq, n, m) {
  return eq === '!' ? (eval(n + ineq + m) ? 1 : 0) : eval(n + ineq + eq + m) ? 1 : 0;
}
```

---

### 2023.04.22

#### 1로 만들기

정수가 있을 때, 짝수라면 반으로 나누고, 홀수라면 1을 뺀 뒤 반으로 나누면, 마지막엔 1이 됩니다. 예를 들어 10이 있다면 다음과 같은 과정으로 1이 됩니다.

10 / 2 = 5
(5 - 1) / 2 = 4
4 / 2 = 2
2 / 2 = 1
위와 같이 4번의 나누기 연산으로 1이 되었습니다.

정수들이 담긴 리스트 num_list가 주어질 때, num_list의 모든 원소를 1로 만들기 위해서 필요한 나누기 연산의 횟수를 return하도록 solution 함수를 완성해주세요.

```js
function solution(num_list) {
  return num_list.reduce((acc, cur) => {
    let count = 0;
    while (cur !== 1) {
      cur = cur % 2 ? (cur - 1) / 2 : cur / 2;
      count++;
    }
    return acc + count;
  }, 0);
}
```

---

### 2023.04.23

#### 세균 증식

어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.

입출력 예 #1

- 처음엔 2마리, 1시간 후엔 4마리, 2시간 후엔 8마리, ..., 10시간 후엔 2048마리가 됩니다. 따라서 2048을 return합니다.

입출력 예 #2

- 처음엔 7마리, 1시간 후엔 14마리, 2시간 후엔 28마리, ..., 15시간 후엔 229376마리가 됩니다. 따라서 229,376을 return합니다.

```js
function solution(n, t) {
  return Math.pow(2, t) * n;
}
```

---

### 2023.04.24

#### 조건에 맞게 수열 반환하기3

정수 배열 arr와 자연수 k가 주어집니다.

만약 k가 홀수라면 arr의 모든 원소에 k를 곱하고, k가 짝수라면 arr의 모든 원소에 k를 더합니다.

이러한 변환을 마친 후의 arr를 return 하는 solution 함수를 완성해 주세요.

입출력 예 #1

- 주어진 k인 3은 홀수이므로, 전체 배열에 3을 곱합니다. 따라서 [3, 6, 9, 300, 297, 294]을 return 합니다.

입출력 예 #2

- 주어진 k인 2는 짝수이므로, 전체 배열에 2를 더합니다. 따라서 [3, 4, 5, 102, 101, 100]을 return 합니다.

```js
function solution(arr, k) {
  return k % 2 === 0 ? arr.map((v) => v + k) : arr.map((v) => v * k);
}
```

---

### 2023.04.25

#### 글자지우기

문자열 my_string과 정수 배열 indices가 주어질 때, my_string에서 indices의 원소에 해당하는 인덱스의 글자를 지우고 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

```js
function solution(my_string, indices) {
  let result = [];
  my_string.split('').forEach((el, i) => {
    !indices.includes(i) ? result.push(el) : el;
  });
  return result.join('');
}
```
