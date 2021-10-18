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

// 실패율

function solution(N, stages) {
  // console.log(stages)
  stages.sort((a, b) => a - b);

  const clearArr = [];
  for (let i = 1; i <= N; i++) {
    // console.log(i)
    clearArr.push({
      stage: i, // 현재 스테이지의 번호
      clear: 0, // 클리어 하지 못한 유저의 수
      fail: 0, // 총 실패율을 저장
    });
  }

  let users = stages.length;
  for (let i = 0; i < stages.length; i++) {
    if (clearArr[stages[i] - 1]) {
      clearArr[stages[i] - 1].clear += 1;

      // 현재 스테이지와 다음 스테이지의 번호가 동일하지 않을 때
      if (stages[i] !== stages[i + 1]) {
        const fail = clearArr[stages[i] - 1].clear / users;
        users = users - clearArr[stages[i] - 1].clear;

        clearArr[stages[i] - 1].fail = fail;
        // console.log(clearArr[stages[i] - 1], users, fail);
      }
    }
    // console.log( clearArr[ stages[i]  - 1 ], stages[i] )
  }
  // console.log(clearArr);
  const answer = clearArr
    .sort((a, b) => {
      //console.log(a, b);
      return b.fial - a.fail;
    })
    .map((el) => el.stage);
  return answer;
}

//메서드
function solution(N, stages) {
  stages.sort((a, b) => a - b);

  const clearArr = new Array(N).fill(1).map((el, i) => {
    //console.log(el, i)
    const stage = el + i; // 현재의 스테이지 값 저장
    const result = { stage: stage, clear: 0, fail: 0 };

    for (let l = 0; l < stages.length; l++) {
      if (stages[i] === stage) {
        result.clear += 1;

        if (stages[l + 1] !== stage) {
          result.fail = result.clear / stages.length;
          stages.splice(0, result.clear);
          break;
        }
      }
    }

    // return result;
  });
  console.log(clearArr);
}

// 예산

function solution(d, budget) {
  const team = [];
  // console.log(d);
  // 신청한 예산들을 오름차순으로 정렬
  d.sort((a, b) => a - b);

  // 부서들이 신처한 금액의 총 합
  let sum = 0;
  for (let i = 0; i < d.length; i++) {
    // console.log(d[i])

    sum += d[i];
    // console.log(d[i], sum);

    if (sum <= budget) {
      team.push(d[i]);
    }
  }
  // console.log(team)
  return team.length;
}

// 다른 사람 풀이
function solution(d, budget) {
  d.sort((a, b) => a - b);

  while (d.reduce((a, b) => a + b, 0) > budget) d.pop();

  return d.length;
}

// 메서드

function solution(d, budget) {
  const result = d
    .sort((a, b) => a - b)
    .filter((price) => {
      // 총 예산에서 해당 지원금을 삭감
      // console.log(price);
      budget -= price;
      // console.log(budget, price);

      // 예산이 0 이상일 경우에만 return
      if (budget >= 0) {
        return price;
      }
    });

  // console.log(result);
  return result.length;
}

function solution(d, budget) {
  const result = d
    .sort((a, b) => a - b)
    .filter((price) => {
      budget -= price;
      if (budget >= 0) {
        return price;
      }
    });
  return result.length;
}

// 크레인 인형뽑기 게임

function solution(board, moves) {
  let answer = 0;
  const bucket = [];

  // 1.크레인이 이동하는 위치값을 구하는 반복문
  for (let i = 0; i < moves.length; i++) {
    for (let l = 0; l < board.length; l++) {
      //
      // 2. 크레인이 이동해서 뽑아올 수 있는 인형의 위치값을 구하는 반복문
      for (let l = 0; l < board.length; l++) {
        // console.log(moves[i], board[l], board[l][moves[i] - 1]);
        const doll = board[l][moves[i] - 1];

        // 인형이 있는 칸이 빈칸이 아니라면
        if (doll !== 0) {
          // 방금 뽑은 인형의 위치를 빈칸으로 만들어준다.
          board[l][moves[i] - 1] = 0;
          // console.log(bucket, doll);

          // 버켓에 넣으려고 하는 인형과 버켓의 맨 위의 인형이 동일한지 비교
          if (bucket[bucket.length - 1] === doll) {
            answer += 2;
            bucket.splice(bucket.length - 1, 1);
            // bucket.pop() // 배열의 맨 뒤에 있는 데이터 삭제
            break;
          }
          bucket.push(doll);
          break;
        }
      }
    }
  }
  // console.log(bucket);
  return answer;
}

// 메서드

function solution( board, moves){
  let answer = 0
  const bucket = []

  moves.forEach( move => {
    // 반복문을 실행하지 않게 하는변수 ( = fasle 일때만 forEach 가 작동)
      let check = false
    board.forEach( location => {
      const doll = (location[ mmove -1]
        if(bucket[bu])
    })
    
    )

   if(doll !== 0 ){
     location[move - 1 ] = 0
     bucket.push(doll)
   }
  })
  console.log(bucket)
}