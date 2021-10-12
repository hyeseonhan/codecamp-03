// 소수점
function solution(n) {
  // 소수인지 아닌지 판별하는 함수
  function check(i) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) return false;
    }
    return true;

    //         if(소수라면?){
    //             return true
    //         } else {
    //             return false
    //         }
    // }
  }

  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (check(i) === true) count = count + 1;
    // i - 2, if(check(i) === true ) count = count + 1
    // i - 3, check(i)
    // i - 4,
    // ...
    // i -9,     i가 10보다 작을 때니까
  }
  return count;
}

function solution(n) {
  // 소수인지 아닌지 판별하는 함수
  function check(i) {
    for (let j = 2; j <= i / 2; j++) {
      if (i % j === 0) return false;
    }
    return true;
  }

  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (check(i) === true) count = count + 1;
  }
  return count;
}

function solution(n) {
  // 소수인지 아닌지 판별하는 함수
  function check(i) {
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) return false;
    }
    return true;
  }

  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (check(i) === true) count = count + 1;
  }
  return count;
}
