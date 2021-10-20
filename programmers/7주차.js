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

// 비밀지도

function solution(n, arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i++) {
    // n 만큼의 길이를 가지는 빈 배열을 넣어준다.
    answer[i] = [];
    // console.log(arr[i], arr2[i])

    const map1 = arr1[i].toString(2).padStart(n, "0");
    const map2 = arr2[i].toString(2).padStart(n, "0");
    // console.log(arr1[i], map1);
    // console.log(arr2[i], map2);
    // console.log(arr1[i], arr2[i]);

    for (let l = 0; l < map1.length; l++) {
      // console.log(map1[l], map2[l]);
      // 둘 중 하나라도 벽이라면
      if (map1[l] === "1" || map2[l] === "1") {
        answer[i][l] = "#";
      } else {
        answer[i][l] = " ";
      }
    }
    answer[i] = answer[i].join("");
  }
  // console.log(answer);
  return answer;
}

// 메서드

function solution(n, arr1, arr2) {
  const answer = arr1.map((map1, i) => {
    // console.log(map1, arr[i])
    map1 = map1.toString(2).padStart(n, "0");
    // console.log(map1)
    const map2 = arr2[i].toString(2).padStart(n, "0");
    // console.log(map2)

    return map1
      .split("")
      .map((el, l) => {
        // console.log(el, map2[l]);
        return el === "1" || map2[l] === "1" ? "#" : " ";
      })
      .join("");
  });
  // console.log(answer);
  return answer;
}

function solution(n, arr1, arr2) {
  return arr1.map((v, i) =>
    addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, (a) =>
      +a ? "#" : " "
    )
  );
}

const addZero = (n, s) => {
  return "0".repeat(n - s.length) + s;
};

var solution = (n, a, b) =>
  a.map((a, i) =>
    (a | b[i]).toString(2).padStart(n, 0).replace(/0/g, " ").replace(/1/g, "#")
  );

// 다트게임

const bonus = ["S", "D", "T"]; // 보너스를 판단하기 위해서 배열에 저장
const option = ["*", "#"]; // 옵션을 판단하기 위해서 배열에 저장

function solution(dartResult) {
  const answer = [];
  let score = ""; // 점수를 뽑아서 저장
  for (let i = 0; i < dartResult.length; i++) {
    // console.log(isNaN(Number(dartResult[i])) , dartResult[i])
    if (!isNaN(Number(dartResult[i]))) {
      // element가 숫자일때
      // console.log(dartResult[i])
      score += dartResult[i];
    } else {
      // element가 문자일때
      if (bonus.includes(dartResult[i])) {
        // dart의 보너스에 의해서 점수가 바뀜
        score = Number(score);
        if (dartResult[i] === "D") {
          score = Math.pow(score, 2);
        } else if (dartResult[i] === "T") {
          score = Math.pow(score, 3);
        }

        // element중에서 bonus중의 하나라도 값이 있으면 true(보너스인 경우)
        answer.push(score);
        score = "";
      } else if (option.includes(dartResult[i])) {
        // option 배열중에 하나라도 나왔을때
        // console.log(dartResult[i])
        if (dartResult[i] === "#") {
          // 아차상인 경우 해당 점수 * -1
          answer[answer.length - 1] *= -1;
        } else if (dartResult[i] === "*") {
          // 스타상인 경우 해당 점수 * 2
          answer[answer.length - 1] *= 2;

          if (answer.length > 1) {
            // 앞에 데이터가 있으므로 앞에 데이터까지 곱하기 2
            answer[answer.length - 2] *= 2;
          }
        }
      }
    }
  }
  return answer.reduce((acc, cur) => acc + cur);
}

//다른사람
function solution(dartResult) {
  const bonus = { S: 1, D: 2, T: 3 },
    options = { "*": 2, "#": -1, undefined: 1 };

  let darts = dartResult.match(/\d.?\D/g);

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
      score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

    if (split[3] === "*" && darts[i - 1]) darts[i - 1] *= options["*"];

    darts[i] = score;
  }

  return darts.reduce((a, b) => a + b);
}
