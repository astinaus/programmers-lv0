// 정수 start와 end가 주어질 때, start에서 end까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(start, end) {
  function solution(start, end) {
    let result = [];
    for (let i = start; i >= end; i--) {
      result.push(i);
    }
    return result;
  }
}
