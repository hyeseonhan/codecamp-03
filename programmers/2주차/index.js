// 9월 6일 프로그래머스

function solution(s) {}

function solution(s) {
  console.log(typeof Number(s));
  return nNumber(s);
}

function solution(s) {
  return +s;
  return Number(s);
}

function solution(s) {
  return s / 1;
  // return Number(s)
}

function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i = i + 1) {
    // console.log(arr[i])
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

function solution(phone_number) {
  let answer = "";

  // console.log(phone_number)

  for (let i = 0; i < phone_number.length; i = i + 1) {
    console.log(phone_number[i]);
    if ((i < phone_nu, ber.longth - 4)) {
      answer = answer + "*";
    }
  }

  function solution(phone_number) {
    let answer = "";

    // console.log(phone_number)

    for (let i = 0; i < phone_number.length; i = i + 1) {
      // console.log(phone_number[i])
      if (i < phone_nuber.length - 4) {
        answer = answer + "*";
      } else {
        answer = answer + phone_number[i];
      }
      // console.log(i, answer)
    }
  }
  return answer;
}

// 9월 7일 프로그래머스

// 1. 짝수와 홀수

// 짝수 : num % 2 = 0
// 홀수 : num % 2 = 1
// 삼항연산자로 이용

function solution(num) {
  return num % 2 ? "Odd" : "Even";
}

// 2. 평균 구하기

// solution 1. reduce 메서드 이용. 배열의 모든 요소의 합 -> arr.length  값으로 나누어 평균 도출
// reduce : 누산값 / 배열이나 객체에서 원하는 값을 추출 or 새로운 배열이나 객체 생성.

function solution(arr) {
  const answer = arr.reduce((a, b) => a + b, 0) / arr.length;
  return answer;
}

// soulution 2. arr.length 만큼 for문을 실행한 후 sum/arr.length 값을 return. 반복되는 값 arr.length를 변수 len에 할당.

function solution(arr) {
  let sum = 0;
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    sum += arr[i];
  }
  return sum / len;
}

// 3. 가운데 글자 가져오기

// step 1. 가운데 글자 찾기: 주어진 단어 s 의 길이가 짝수인지 홀수인 확인 필요.
// step 2. 짝수인 경우, 홀수인 경우 각각 조건문 생성
// step 3. 삼항 조건 연산자 이용

function solution(s) {}

// 1.

function solution(num) {
  // 삼항연산자
  return num % 2 === 0 ? "Even" : "Odd";

  // if 조건문 사용
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// 2.
function solution(arr) {
  // 평균 구하기: 모든 점수의 합 / 점수의 갯수

  // sum: 모든 점수를 담는 변수
  let sum = 0;
  // i++ : i = i+1
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum / arr.length;
}

//3.
function solution(s) {
  // 가운데 있는 글자의 인덱스 값을 저장
  // Math.floor : 소수점 제거
  // 홀수인 경우는 작동
  const half = Math.floor(s.length / 2);
  return s[half];
}

function solution(s) {
  // 가운데 있는 글자의 인덱스 값을 저장
  // Math.floor : 소수점 제거

  if (s.length % 2 === 0) {
    //  짝수일 경우
    return s[half - 1] + s[half];
  } else {
    // 홀수인 경우
    return s[half];
  }

  const half = Math.floor(s.length / 2);
  return s[half];
}

function solution(s) {
  // 가운데 있는 글자의 인덱스 값을 저장
  const hal = Math.floor(s.length / 2);

  //삼항연산자
  return s.length % 2 === 0 ? s[half - 1] + s[half] : s[half];
}

// 9월 8일 프로그래머스

// 1. 서울에서 김서방 찾기

function solution(seoul) {
  // Kim 의 index 값을 담아주는 변수
  let x = 0;
  for (let i = 0; i < seoul.length; i++) {
    console.log(seoul[i], i);
    if (seoul[i] === "Kim") {
      x = i;
      // 반복문 종료
      break;
    }
  }
  return "김서방은" + x + "에 있다";
}

function solution(seoul) {
  let x = seoul.indexOf("Kim");
}

// 2. 문자열 다루기 기본
//
// for
function solution(s) {
  let answer = true;

  if (s.length !== 4 && s.length !== 6) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i]) === true) {
      answer = false;
      break;
    }
  }
  return answer;
}

// filter
function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }

  const answer =
    s
      .split("") // 문자열을 배열로 만들어 준다
      .filter((str) => isNaN(str) === true).length === 0;
  return answer;
}

// 3. 약수의 합

// for문
function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer = answer + i;
    }
  }

  return answer;
}

// method
function solution(n) {
  let answer = 0;

  const array = new Array(n).fill(1).forEach((num, index) => {
    n % (num + index) ? (answer = answer + (num + index)) : null;
  });
  return answer;
}

// 9월 9일 프로그래머스

// 자릿수 더하기

function solution(n) {
  let result = 0;

  // n을 문자열 타입으로 변환
  n = String(n);
  for (let i = 0; i < n.length; i++) {
    result = result + Number(n[i]);
  }
  return result;
}

function solution(n) {
  let result = 0;

  const array = String(n)
    .split("")
    .forEach((num) => {
      result = result + Number(num);
    });
  return result;
}

// x만큼 간격이 있는 n개의 숫자

function solution(x, n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    answer.push(i * x);
  }
  return answer;
}

function solution(x, n) {
  const array = new Array(n).fill(x).map((number, index) => {
    return number * (index + 1);
  });
  return array;
}

// 9월 10일 프로그래머스

// 문자열 내림차순으로 배치하기

function solution(s) {
  let answer = "";

  //sort(정렬)을 사용하기 위해 배열로 저장해주느 변수(기본적으로 오름차순)
  const arr = [];

  for (let i = 0; i < s.length; i++) {
    arr.push(s[i]);
  }
  console.log("sort 전 : " + arr);
  arr.sort((a, b) => {
    // 배열을 내림차순으로 정렬하는 식
    return a > b ? -1 : 1;
  });
  return arr.join("");
}

//  -1  배열의 맨 뒤로. 1 은 배열의 맨 앞으로
//  오름차순 정리 a < b ? -1 : 1

function solution(s) {
  let answer = "";

  const arr = [];

  for (let i = 0; i < s.length; i++) {
    arr.push(s[i]);
  }
  arr.sort().reverse();
  return arr.join;
}

// method
function solution(s) {
  const result = s
    .split("")
    .sort((a, b) => {
      return a > b ? -1 : 1;
    })
    .join("");
  return result;
}

// K번째수

function solution(array, commands) {
  let answer = [];

  for (let idx = 0; idx < commands.length; idx++) {
    const i = commands[idx][0];
    const j = commands[idx][1];
    const k = commands[idx][1];
    //  배열을 자르고 정렬한 결과를 저장하는 상수
    const sliceResult = array.slice(i - 1, j).sort((a, b) => {
      return a - b;
    });
    answer.push(sliceResult[k - 1]);
  }
  return answer;
}
// 내림차순 정리 return b - a

// method
function solution(array, commands) {
  const answer = commands.map((el) => {
    const sliceResult = array.slice(el[0] - 1, el[1]).sort((a, b) => {
      return a - b;
    });
    return sliceResult[el[2] - 1];
  });
  return answer;
}
