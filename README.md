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
  return angle > 0 && angle < 90
    ? 1
    : angle === 90
    ? 2
    : angle > 90 && angle < 180
    ? 3
    : 4;
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
  return (
    Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + Math.floor((hp % 5) % 3)
  );
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
  return eq === '!'
    ? eval(n + ineq + m)
      ? 1
      : 0
    : eval(n + ineq + eq + m)
    ? 1
    : 0;
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

---

### 2023.04.26

#### flag에 따라 다른 값 변환하기

두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때, flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.

입출력 예 #1

- 예제 1번에서 flag가 true이므로 a + b = (-4) + 7 = 3을 return 합니다.

입출력 예 #2

- 예제 2번에서 flag가 false이므로 a - b = (-4) - 7 = -11을 return 합니다.

```js
function solution(a, b, flag) {
  return flag ? a + b : a - b;
}
```

---

### 2023.04.27

#### 카운트다운

정수 start와 end가 주어질 때, start에서 end까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

입출력 예 #1

10부터 3까지 1씩 감소하는 수를 담은 리스트는 [10, 9, 8, 7, 6, 5, 4, 3]입니다.

```js
function solution(start, end) {
  function solution(start, end) {
    let result = [];
    for (let i = start; i >= end; i--) {
      result.push(i);
    }
    return result;
  }
}
```

---

### 2023.04.28

#### n번째 원소부터

// 정수 리스트 num_list와 정수 n이 주어질 때, n 번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.

입출력 예 #1

- [2, 1, 6]의 세 번째 원소부터 마지막 원소까지의 모든 원소는 [6]입니다.

입출력 예 #2

- [5, 2, 1, 7, 5]의 두 번째 원소부터 마지막 원소까지의 모든 원소는 [2, 1, 7, 5]입니다.

```js
function solution(num_list, n) {
  return num_list.splice(n - 1);
}
```

### 2023.04.29

#### 홀짝에 따라 다른 값 반환하기

양의 정수 n이 매개변수로 주어질 때, n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고 n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.

입출력 예 #1

- 예제 1번의 n은 7로 홀수입니다. 7 이하의 모든 양의 홀수는 1, 3, 5, 7이고 이들의 합인 1 + 3 + 5 + 7 = 16을 return 합니다.

입출력 예 #2

- 예제 2번의 n은 10으로 짝수입니다. 10 이하의 모든 양의 짝수는 2, 4, 6, 8, 10이고 이들의 제곱의 합인 22 + 42 + 62 + 82 + 102 = 4 + 16 + 36 + 64 + 100 = 220을 return 합니다.

```js
function solution(n) {
  let arr = Array(n)
    .fill(0)
    .map((el, i) => el + i + 1);
  return n % 2 === 0
    ? arr.filter((el) => el % 2 === 0).reduce((acc, cur) => acc + cur ** 2, 0)
    : arr.filter((el) => el % 2 !== 0).reduce((acc, cur) => acc + cur, 0);
}
```

---

### 2023.04.30

#### 부분 문자열

어떤 문자열 A가 다른 문자열 B안에 속하면 A를 B의 부분 문자열이라고 합니다. 예를 들어 문자열 "abc"는 문자열 "aabcc"의 부분 문자열입니다.

문자열 str1과 str2가 주어질 때, str1이 str2의 부분 문자열이라면 1을 부분 문자열이 아니라면 0을 return하도록 solution 함수를 완성해주세요.

입출력 예 #1

- 본문과 동일합니다.

입출력 예 #2

- "tbbttb"에는 "tbt"가 없으므로 0을 return합니다.

```js
function solution(str1, str2) {
  return str2.includes(str1) ? 1 : 0;
}
```

---

### 2023.05.01

#### 수 조작하기

정수 n과 문자열 control이 주어집니다. control은 "w", "a", "s", "d"의 4개의 문자로 이루어져 있으며, control의 앞에서부터 순서대로 문자에 따라 n의 값을 바꿉니다.

- "w" : n이 1 커집니다.
- "s" : n이 1 작아집니다.
- "d" : n이 10 커집니다.
- "a" : n이 10 작아집니다.

위 규칙에 따라 n을 바꿨을 때 가장 마지막에 나오는 n의 값을 return 하는 solution 함수를 완성해 주세요.

```js
function solution(n, control) {
  control.split('').map((el) => {
    switch (el) {
      case 'w':
        n += 1;
        break;
      case 's':
        n -= 1;
        break;
      case 'd':
        n += 10;
        break;
      case 'a':
        n -= 10;
        break;
    }
  });

  return n;
}
```

---

### 2023.05.02

#### 조건에 맞게 수열 변환하기 1

정수 배열 arr가 주어집니다. arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고, 50보다 작은 홀수라면 2를 곱합니다. 그 결과인 정수 배열을 return 하는 solution 함수를 완성해 주세요.

입출력 예
arr = [1, 2, 3, 100, 99, 98] 일 때,
result = [2, 2, 6, 50, 99, 49]

```jsx
function solution(arr) {
  return arr.map((v) =>
    v >= 50 && v % 2 === 0 ? v / 2 : v < 50 && v % 2 !== 0 ? v * 2 : v
  );
}
```

---

### 2023.05.03

#### 이어 붙인 수

정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.

입출력 예 #1 [3, 4, 5, 2, 1]

- 홀수만 이어 붙인 수는 351이고 짝수만 이어 붙인 수는 42입니다. 두 수의 합은 393입니다.

입출력 예 #2 [5, 7, 8, 3]

- 홀수만 이어 붙인 수는 573이고 짝수만 이어 붙인 수는 8입니다. 두 수의 합은 581입니다.

```jsx
function solution(num_list) {
  return (
    parseInt(num_list.filter((v) => v % 2 === 0).join('')) +
    parseInt(num_list.filter((v) => v % 2 !== 0).join(''))
  );
}
```

---

### 2023.05.04

#### 369게임

머쓱이는 친구들과 369게임을 하고 있습니다. 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다. 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.

```jsx
function solution(order) {
  return (order.toString().match(/[369]/g) ?? []).length;
}
```

---

### 2023.05.05

#### 문자열 바꿔서 찾기

문자 "A"와 "B"로 이루어진 문자열 myString과 pat가 주어집니다. myString의 "A"를 "B"로, "B"를 "A"로 바꾼 문자열의 연속하는 부분 문자열 중 pat이 있으면 1을 아니면 0을 return 하는 solution 함수를 완성하세요.

```jsx
function solution(myString, pat) {
  return myString
    .split('')
    .map((el) => (el === 'A' ? 'B' : 'A'))
    .join('')
    .includes(pat)
    ? 1
    : 0;
}
```

---

### 2023.05.06

#### 글자 이어 붙여 문자열 만들기

문자열 my_string과 정수 배열 index_list가 매개변수로 주어집니다. my_string의 index_list의 원소들에 해당하는 인덱스의 글자들을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

```jsx
function solution(my_string, index_list) {
  return index_list.map((v) => my_string[v]).join('');
}
```

---

### 2023.05.07

#### 특정 문자를 대문자로 바꾸기

영소문자로 이루어진 문자열 my_string과 영소문자 1글자로 이루어진 문자열 alp가 매개변수로 주어질 때, my_string에서 alp에 해당하는 모든 글자를 대문자로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

```jsx
function solution(my_string, alp) {
  return my_string.replaceAll(alp, alp.toUpperCase());
}
```

---

### 2023.05.08

#### 피자 나눠 먹기(2)

머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때, n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.

입출력 예 #1

- 6명이 모두 같은 양을 먹기 위해 한 판을 시켜야 피자가 6조각으로 모두 한 조각씩 먹을 수 있습니다.

입출력 예 #2

- 10명이 모두 같은 양을 먹기 위해 최소 5판을 시켜야 피자가 30조각으로 모두 세 조각씩 먹을 수 있습니다.

입출력 예 #3

- 4명이 모두 같은 양을 먹기 위해 최소 2판을 시키면 피자가 12조각으로 모두 세 조각씩 먹을 수 있습니다.

```js
function solution(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if ((6 * i) % n === 0) {
      result += i;
      break;
    }
  }
  return result;
}
```

---

### 2023.05.09

#### 가장 큰 수 찾기

정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

```js
function solution(array) {
  const max = Math.max(...array);
  return [max, array.indexOf(max)];
}
```

---

### 2023.05.10

#### 외계행성의 나이

우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다. a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.

```js
function solution(age) {
  return age
    .toString()
    .split('')
    .map((el) => 'abcdefghij'[el])
    .join('');
}
```

---

### 2023.05.11

#### 배열 회전시키기

정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

```js
function solution(numbers, direction) {
  return direction === 'right'
    ? [numbers.pop(), ...numbers]
    : [numbers.shift(), numbers].reverse().flat();
}
```

---

### 2023.05.12

#### 분수의 덧셈

첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

```js
function solution(numer1, denom1, numer2, denom2) {
  let answer = [];
  let denom = denom1 * denom2;
  let numer = numer1 * denom2 + numer2 * denom1;
  let gcd = 1;
  for (let i = 2; i <= numer; i++) {
    if (numer % i === 0 && denom % i === 0) {
      gcd = i;
    }
  }
  answer.push(numer / gcd);
  answer.push(denom / gcd);
  return answer;
}
```

---

### 2023.05.13

#### 숫자 찾기

정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

```js
function solution(num, k) {
  return (
    num
      .toString()
      .split('')
      .map((el) => Number(el))
      .indexOf(k) + 1 || -1
  );
}
```

---

### 2023.05.14

#### A 강조하기

문자열 myString이 주어집니다. myString에서 알파벳 "a"가 등장하면 전부 "A"로 변환하고, "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여 return 하는 solution 함수를 완성하세요.

```js
function solution(myString) {
  return myString.toLowerCase().replaceAll('a', 'A');
}
```

---

### 2023.05.15

#### 인덱스 바꾸기

문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

```js
function solution(my_string, num1, num2) {
  const idxV = [...my_string].filter((_, i) => i === num1 || i === num2);

  return [...my_string]
    .map((v, i) =>
      i === num1 ? (v = idxV[1]) : i === num2 ? (v = idxV[0]) : v
    )
    .join('');
}
```

---

### 2023.05.16

#### 카운트업

정수 start와 end가 주어질 때, start부터 end까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

```js
function solution(start, end) {
  return Array(end - start + 1)
    .fill(0)
    .map((el, i) => el + i + start);
}
```

---

### 2023.05.17

#### 삼각형의 완성조건 (1)

선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.

```js
function solution(sides) {
  const newSides = sides.sort((a, b) => a - b);
  return newSides[2] >= newSides[0] + newSides[1] ? 2 : 1;
}
```

---

### 2023.05.18

#### 접두사인지 확인하기

어떤 문자열에 대해서 접두사는 특정 인덱스까지의 문자열을 의미합니다. 예를 들어, "banana"의 모든 접두사는 "b", "ba", "ban", "bana", "banan", "banana"입니다.
문자열 my_string과 is_prefix가 주어질 때, is_prefix가 my_string의 접두사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.

```js
function solution(my_string, is_prefix) {
  let arr = [];
  for (let i = 0; i < my_string.length; i++) {
    arr.push(my_string.substr(0, i + 1));
  }

  return arr.includes(is_prefix) ? 1 : 0;
}
```

---

### 2023.05.19

#### rny_string

'm'과 "rn"이 모양이 비슷하게 생긴 점을 활용해 문자열에 장난을 하려고 합니다. 문자열 rny_string이 주어질 때, rny_string의 모든 'm'을 "rn"으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

```js
function solution(rny_string) {
  return rny_string.replaceAll('m', 'rn');
}
```

---

### 2023.05.20

#### n의 배수 구하기

정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.

```js
function solution(n, numlist) {
  return numlist.filter((v) => v % n === 0);
}
```

---

### 2023.05.21

#### 약수 구하기

정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

```js
// reduce 활용
function solution(n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) answer.push(i);
  }
  return answer.reduce((acc, cur) => acc + cur, 0);
}

// reduce 활용하지 않음
function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) answer += i;
  }
  return answer;
}
```

---

### 2023.05.22

#### 자릿수 더하기

자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

```js
function solution(n) {
  return n
    .toString()
    .split('')
    .reduce((acc, cur) => acc + parseInt(cur), 0);
}
```

---

### 2023.05.23

#### x만큼 간격이 있는 n개의 숫자

함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

```js
function solution(x, n) {
  return Array(n)
    .fill(0)
    .map((el, i) => (el + x) * (i + 1));
}
```

---

### 2023.05.24

#### 뒤에서 5등 위로

정수로 이루어진 리스트 num_list가 주어집니다. num_list에서 가장 작은 5개의 수를 제외한 수들을 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

```js
function solution(num_list) {
  num_list = num_list.sort((a, b) => a - b);
  for (let i = 0; i < 5; i++) num_list.shift();
  return num_list;
}
```

---

### 2023.05.25

#### JadenCase 문자열 만들기

JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

제한 조건
s는 길이 1 이상 200 이하인 문자열입니다.
s는 알파벳과 숫자, 공백문자(" ")로 이루어져 있습니다.
숫자는 단어의 첫 문자로만 나옵니다.
숫자로만 이루어진 단어는 없습니다.
공백문자가 연속해서 나올 수 있습니다.

```js
function solution(s) {
  s = s.toLowerCase().split(' ');
  let answer = [];
  s.forEach((el) => {
    for (let i = 0; i < el.length; i++) {
      answer.push(i === 0 ? el[i].toUpperCase() : el[i]);
    }
    answer.push(' ');
  });
  answer.pop();
  return answer.join('');
}
```

---

### 2023.05.26

#### 편지

머쓱이는 할머니께 생신 축하 편지를 쓰려고 합니다. 할머니가 보시기 편하도록 글자 한 자 한 자를 가로 2cm 크기로 적으려고 하며, 편지를 가로로만 적을 때, 축하 문구 message를 적기 위해 필요한 편지지의 최소 가로길이를 return 하도록 solution 함수를 완성해주세요.

```js
function solution(message) {
  return message.length * 2;
}
```

---

### 2023.05.27

#### 공배수

정수 number와 n, m이 주어집니다. number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return하도록 solution 함수를 완성해주세요.

```js
function solution(number, n, m) {
  return number % n === 0 && number % m === 0 ? 1 : 0;
}
```

---

### 2023.05.28

#### 정수 찾기

정수 리스트 num_list와 찾으려는 정수 n이 주어질 때, num_list안에 n이 있으면 1을 없으면 0을 return하도록 solution 함수를 완성해주세요.

```js
function solution(num_list, n) {
  num_list.includes(n) ? 1 : 0;
}
```

---

### 2023.05.29

#### 숨어있는 숫자의 덧셈(2)

문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

```js
function solution(my_string) {
  return (my_string.match(/\d+/g) ?? []).reduce(
    (a, b) => parseInt(a) + parseInt(b),
    0
  );
}
```

---

### 2023.05.30

#### n번째 원소까지

정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 n 번째 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.

```js
function solution(num_list, n) {
  return num_list.splice(0, n);
}
```

---

### 2023.05.31

#### 0 떼기

정수로 이루어진 문자열 n_str이 주어질 때, n_str의 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열을 return하도록 solution 함수를 완성해주세요.

```js
function solution(n_str) {
  for (let i = 0; i < n_str.length; i++) {
    if (n_str[i] !== '0') return n_str.substring(i, n_str.length);
  }
}
```

---

### 2023.06.01

#### 할 일 목록

오늘 해야 할 일이 담긴 문자열 배열 todo_list와 각각의 일을 지금 마쳤는지를 나타내는 boolean 배열 finished가 매개변수로 주어질 때, todo_list에서 아직 마치지 못한 일들을 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

```js
function solution(todo_list, finished) {
  let answer = [];
  for (let i = 0; i < finished.length; i++) {
    if (finished[i] === false) answer.push(todo_list[i]);
  }
  return answer;
}
```
