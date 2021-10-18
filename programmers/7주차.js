// 3진법 뒤집기

function solution(n) {
  // 3진법으로 변환
  n = n.toString(3);
  // console.log(typeof n)

  let reverse = "";
  for (let i = n.length - 1; i >= 0; i--) {
    // console.log(n, n[i])
    reverse += n[i];
  }
  // console.log(reverse)
  // 3진법으로 변환된 데이터를 10진법으로 변환
  return parseInt(reverse, 3);
}

const solution = (n) => {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
};

// 메서드
function solution(n) {
  n = n.toString(3).split("").reverse().join("");
  //   console.log(n);

  return parseInt(n, 3);
}
