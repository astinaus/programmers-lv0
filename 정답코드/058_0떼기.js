// 정수로 이루어진 문자열 n_str이 주어질 때, n_str의 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(n_str) {
  for (let i = 0; i < n_str.length; i++) {
    if (n_str[i] !== '0') return n_str.substring(i, n_str.length);
  }
}
