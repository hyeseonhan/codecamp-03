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
