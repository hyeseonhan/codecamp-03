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

// 신규 아이디 추천

const filter = "qwertyuiopasdfghjklzxcvbnm1234567890-_.";

function solution(new_id) {
  // 1단계: 대문자를 -> 소문자로 치환
  new_id = new_id.toLowerCase();
  //  console.log(new_id)

  let result = "";
  // 2단계 : 소문자, 숫자, 빼기, 밑줄 마침표를 제외한 모든 문자 제거
  for (let i = 0; i < new_id.longth; i++) {
    // console.log(new_id[i], filter.includes( new_id[i]))
    if (filter.includes(new_id[i])) {
      result += new_id[i];
    }
  }
  // console.log(result)

  // 3단계: .가 연속으로 들어오면 .으로 치환 (.. => .)
  while (result.includes("..")) {
    // console.log(result)
    result = result.replace("..", ".");
  }
  // console.log(result)

  // 4단계 : .가 처음이나 끝에 위치한다면 제거
  if (result[0] === ".") {
    result = result.substr(1); // substr(1) 문자열의 첫번째를 지울수 있다
  }

  function removeLastDot() {
    if (result[result.length - 1] === ".") {
      result = result.slice(0, result.length - 1);
    }
  }
  removeLastDot();
  // console.log(result)

  // 5단계 : 빈 문자열이라면 "a" 대입
  if (result === "") {
    result = "a";
  }
  // console.log(result)

  // 6단계 : 문자열 길이가 16 이상이면 15의 길이값을 가지는 문자열로 치환( = 15 길이까지 자른다)
  //        제거 후에, 무침표가 끝에 위치하면 제거
  if (result.length >= 16) {
    result = result.slice(0, 15);
    console.log(result);
    removeLastDot();
  }
  // console.log(result)

  // 7단계 : 문자열 길이가 2자 이하라면, 마지막 글자를 3이 될때까지 반복해서 추가
  if (result.length <= 2) {
    result = result.padEnd(3, result[result.length - 1]);
  }
  // console.log(result)

  return result;
}

// 배열 메서드

const filter = "qwertyuiopasdfghjklzxcvbnm1234567890-_.";

function solution(new_id) {
  // 1단계: 대문자를 -> 소문자로 치환
  new_id = new_id.toLowerCase();

  // 2단계 : 소문자, 숫자, 빼기, 밑줄 마침표를 제외한 모든 문자 제거
  let result = new_id.split("").filter((str) => filter.includes(str));

  // 3단계: .가 연속으로 들어오면 .으로 치환 (.. => .)
  result = result.filter(
    (str, i) => (str === "." && result[i + 1] !== ".") || str !== "."
  );

  // 4단계 : .가 처음이나 끝에 위치한다면 제거
  if (result[0] === ".") {
    result.splice(0, 1);
  }
  function removeLastDot() {
    if (result[result.length - 2] === ".") {
      result.splice(result.length - 1, 1);
    }
  }
  removeLastDot();

  // 5단계 : 빈 문자열이라면 "a"
  if (result.length === 0) {
    result = ["a"];
  }
  // 6단계 : 문자열 길이가 16 이상이면 15의 길이값을 가지는 문자열로 치환( = 15 길이까지 자른다)
  //        제거 후에, 무침표가 끝에 위치하면 제거\
  if (result.length >= 16) {
    result = result.slice(0, 15);
    removeLastDot();
  }
  // console.log(result);
  // 7단계 : 문자열 길이가 2자 이하라면, 마지막 글자를 3이 될때까지 반복해서 추가
  if (result.length <= 2) {
    const add = new Array(3 - result.length).fill(result[result.length - 1]);
    // console.log(add);
    result = result.concat(add);
  }
  // console.log(result);
  return result.join("");
}

function solution(new_id) {
  let engTest = /^[a-zA-Z]*$/;
  let num = /^[0-9]*$/;

  let newID = new_id
    .split("")
    .map((el, idx) => {
      if (engTest.test(el)) {
        return el.toLowerCase();
      } else {
        return el;
      }
    })
    .filter((el) => {
      return (
        el === "-" ||
        el === "_" ||
        el === "." ||
        engTest.test(el) ||
        num.test(el)
      );
    });
  newID = newID.join("");
  while (newID.includes("..")) {
    newID = newID.replace("..", ".");
  }
  if (newID[0] === ".") {
    newID = newID.substr(1);
  }
  if (newID[newID.length - 1] === ".") {
    newID = newID.slice(0, newID.length);
  }
  if (newID.length === 0) {
    newID += "a";
  }
  if (newID.length >= 16) {
    newID = newID.slice(0, 15);
  }
  if (newID[newID.length - 1] === ".") {
    newID = newID.slice(0, newID.length - 1);
  }
  while (newID.length < 3) {
    newID += newID[newID.length - 1];
  }
  return newID;
}

function solution(new_id) {
  const answer = new_id
    .toLowerCase() // 1
    .replace(/[^\w-_.]/g, "") // 2
    .replace(/\.+/g, ".") // 3
    .replace(/^\.|\.$/g, "") // 4
    .replace(/^$/, "a") // 5
    .slice(0, 15)
    .replace(/\.$/, ""); // 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}

const solution = (new_id) => {
  const id = new_id
    .toLowerCase()
    .replace(/[^\w\d-_.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .padEnd(1, "a")
    .slice(0, 15)
    .replace(/^\.|\.$/g, "");
  return id.padEnd(3, id[id.length - 1]);
};

const solution = (new_id) =>
  new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, "")
    .replace(/\.+/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/, "a")
    .match(/^.{0,14}[^.]/)[0]
    .replace(/^(.)$/, "$1$1$1")
    .replace(/^(.)(.)$/, "$1$2$2");
