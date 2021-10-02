// 행렬의 덧셈

function solution(arr1, arr2) {
  let answer = [[]];

  for (let i = 0; i < arr1.length; i++) {
    for (let l = 0; l < arr1[i].length; l++) {
      // 배열의 각각의 위치에 있는 정수들을 더한 결과 값을 저장
      const sum = arr1[i][l] + arr2[i][l];

      if (answer[i] === undefined) {
        //빈배열
        answer[i] = [];
      }

      answer[i][l] = sum;
    }
  }
  return answer;
}

function sumMatrix(A, B) {
  /*var answer = Array();
  var rowMax = A.length > B.length ? A.length : B.length;
  var colMax = A[0].length > B[0].length ? A[0].length : B[0].length;
    for(var i=0; i < rowMax; i++)
  {
    answer[i] = new Array();
    for(var j=0; j < colMax; j++)
    {
      console.log(isNaN(A[i][j])?0:A[i][j]);
      console.log(isNaN(B[i][j])?0:B[i][j]);
            answer[i][j] = parseInt(isNaN(A[i][j])?0:A[i][j]) + parseInt(isNaN(B[i][j])?0:B[i][j]);
    }
  }*/

  return A.map((a, i) => a.map((b, j) => b + B[i][j]));
}

// 메서드
function solution(arr1, arr2) {
  const answer = arr1.map((num1, i) => {
    return num1.map((num2, l) => {
      return num2 + arr2[i][l];
    });
  });
  return answer;
}

// 2016년
// 접급: 1월 1일로 부터 이틀이 지난 날은 3일(일요일), 7일이 지난날은 8일(금요일)
//      => 7로 나누면 무조건 금요일(7의 배수가 되면)
//         7로 나누고 하루가 지나면 토요일...
//         1월은 31일 + 1 (2월 1일) = 월요일

const month = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};
// key 값으로 월(1~12)

// 1월 1일은 금요일이니까 시작을 금요일로
const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

function solution(a, b) {
  let answer = "";

  //총 일수를 저장하는 변수
  let days = 0;
  // a월 보다 작은 달
  for (let i = 1; i < a; i++) {
    days += month[i];
  }
  // 당일 포함하지 않는 값을 넣어야하므로 -1
  days += b - 1;

  answer = week[days % 7];

  return answer;
}

// 메서드
const month = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};
// key 값으로 월(1~12)

// 1월 1일은 금요일이니까 시작을 금요일로
const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

function solution(a, b) {
  const days = new Array(a)
    .fill(1) // 배열 생성
    .reduce((acc, cur, i) => {
      // 계속해서 연산되는게 누적
      const mn = cur + i;
      return acc + (mn !== a ? month[mn] : b - 1);
    }, 0);
  return week[days % 7];
}

// 다른 방법
const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function solution(a, b) {
  const days = new Date(2016, a - 1, b).getDay();
  return week[days];
}

// 최대공약수와 최소공배수

function solution(n, m) {
  //최대공약수: 두 수의 약수 중에서 제일 큰수
  //최소공배수: 두 수의 배수 중에서 제일 작은 수
  let answer = [];

  //공통되는 약수를 담아주는 배열
  const gcdArr = [];

  //최대공약수 구하기
  for (let i = 1; i <= m; i++) {
    if (n % i === 0 && m % i === 0) {
      gcdArr.push(i);
    }
  }
  answer[0] = Math.max(...gcdArr);

  //최소공배수 구하기
  for (let l = m; l <= n * m; l += m) {
    if (l % n === 0) {
      answer[1] = l;
      break; //반복문 끝
    }
  }
  return answer;
}

function greatestCommonDivisor(a, b) {
  return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);
}
function leastCommonMultipleOfTwo(a, b) {
  return (a * b) / greatestCommonDivisor(a, b);
}
function gcdlcm(a, b) {
  return [greatestCommonDivisor(a, b), leastCommonMultipleOfTwo(a, b)];
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(gcdlcm(3, 12));

// 유클리드 호재범
// a를 b로 나눳을 때 (a,가 b 보다가 클 경우 ) === 큰 수에서 작은 수를 나웠을 때
// 나머지 값이 0 이 되면, 작은 수가 최소공배수가 된다.
// 0이 되지 않으면 작은 수가 큰 수가 되고, 나머지 값이 작은 수가 된다.
// 반복했을 때에 0이 나오면, 작은 수가 최소공배수가 된다.
function solution(n, m) {
  let a = m; //큰수
  let b = n; //큰수
  let r = 0; //a를 b  로 나눴을 때에 나머지 값을 저장

  while (a % b > 0) {
    r = a % b;
    a = b; //큰 수에 작은 수를 할당
    b = r; //작은 수에 나머지 값 할당
  }

  //최소공배수는 두 수를 곱한 값에 최대공약수를 나눈 값
  return [b, (n * m) / b];
}

//완주하지 못하 못한 선
// 배열 안에 문자열 형태로 들어감.

function solution(participant, completon) {
  let answer = "";

  //문자렬을 오름차순으로 정렬(기본으로 오름차순)
  participant.sort((a, b) => (a < b ? -1 : 1));
  completon.sort((a, b) => (a < b ? -1 : 1));

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }
  return answer;
}

function solution(participant, completion) {
  let answer = "";

  //문자렬을 오름차순으로 정렬(기본으로 오름차순)
  participant.sort((a, b) => (a < b ? -1 : 1));
  completion.sort((a, b) => (a < b ? -1 : 1));

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];

      //함수 안에서 for문을 사요했을 때에 return 을 하면
      //break 와 동시에 값을 반환한다.
      return answer;
    }
  }
}

//foreach
function solution(participant, completion) {
  let answer = "";
  participant.sort((a, b) => (a < b ? -1 : 1));
  completion.sort((a, b) => (a < b ? -1 : 1));

  //최초로 false 값을 할당하고,
  //합격자가 아닌 참가자를 찾았을 때에 true 값으로 변환
  let stop = false;
  participant.forEach((name, i) => {
    // stop이 false 일 때만 아래의 조건문을 실행
    if (name !== completion[i] && stop === false) {
      answer = name;
      stop = true;
    }
  });
  return answer;
}

//메서드
function solution(participant, completion) {
  participant.sort((a, b) => (a < b ? -1 : 1));
  completion.sort((a, b) => (a < b ? -1 : 1));

  const answer = participant.filter((name, i) => {
    return name !== completion[i];
  });
  return answer[0];
}

// 모의고사
// 오름차순으로 리턴되야함
// 1번수포자: 1번문제 1 2번문제 2 .. 6번문제에서 1. ...11번문제에 1을찍음
// 2번수포자: 8번 반복되는 순서도.
// 3번수포자: 10개의 반복되는 순서도.

// 배열에 담음
const answerTable = [
  // 1번 수포자가 찍는 방식
  [1, 2, 3, 4, 5],
  // 2번 수포자가 찍는 방식
  [2, 1, 2, 3, 2, 4, 2, 5],
  // 3번 수포자가 찍느 방식
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

function solution(answers) {
  // 학생들의 점수를 저장하는 배열
  const score = [0, 0, 0];

  for (let i = 0; i < answers.lenght; i++) {
    for (let l = 0; l < answerTable.length; l++) {
      if (answerTable[l][i % answerTable[l].length] === answers[i]) {
        score[i][l++];
      }
    }
  }
}

function solution(answers) {
  // 학생들의 점수를 저장하는 배열
  const score = [0, 0, 0];

  for (let i = 0; i < answers.lenght; i++) {
    for (let l = 0; l < answerTable.length; l++) {
      if (answerTable[l][i % answerTable[l].length] === answers[i]) {
        score [l]++;
      }
    }
  }
    const bigeest = Math.maxP(...score)
    const result = []
    
    for (let i =0; sorelenth;i++){
    if(biggest === score[i] ){
        result.pus(i+1)
    }
        return result
    }

    //메서드
  
    const answerTable = [
  // 1번 수포자가 찍는 방식
  [1, 2, 3, 4, 5],
  // 2번 수포자가 찍는 방식
  [2, 1, 2, 3, 2, 4, 2, 5],
  // 3번 수포자가 찍느 방식
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

function solution){answers}{
  const scoreList = [
    {stududnet: 1 , score:0} stududnet: 2, score :0 ,{stududnet: 3 , score:0}

  ]

  answer ,forEach (el,i) => {
    answerTable.forEach((cu),l) =>{
      if( u [i % cu.lenght] === el){
    scroreList[l.score ++}
    } )
    )
  }
}

    