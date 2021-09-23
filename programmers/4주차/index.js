// 하샤드수

function solution(x) {
  var answer = true;

  // 숫자를 문자열 형태로 변환
  x = x.toString();

  // 총 합을 담아주는 변수
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    // 다시 숫자 타입으로 변환해야지 sum에 담김
    sum += Number(x[i]);
  }

  return x % sum === 0 ? true : false;
}

// 나머지 값이 0과 1만 나온다고 했을 때 js에서 0은 false, 1은 true로 출력합니다. 문제에서 나누어 떨어질 때(즉, 나머지가 0일 때) true, 나누어 떨어지지 않을 때(나머지가 1일 때)는 false를 출력하라고 했으니까 !를 붙여서 false는 true로, true는 false
function Harshad(n) {
  return !(
    n %
    (n + "").split("").reduce(function (i, sum) {
      return +sum + +i;
    })
  );
}

// 메서드
function solution(x) {
  let sum = 0;
  x.toString()
    .split("")
    .forEach((num) => {
      sum += Number(num);
    });
  return x % sum === 0 ? true : false;
}

function soluton(x){
    let sum = x.toString()
    .split("")
    .reduce( (el,cu) =>{
        return Number(el+) + Number(cu)
    })
}5