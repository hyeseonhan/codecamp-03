// 문자열 내 p와 y의 개수

// step1. s 값을 모두 소문자로 바꿈
// step2. p와 y의 갯수 비교
//  filter 사용

fuction solution(s) {
    const string = s.toLowerCase();
    const p = [...string].filter(str => str === p).length;
    const y = [...string].filter(str => str === y).length;

    return p === y ? true : false;
}


// 모든 문자 소문자로 변환 toLowerCase();
let eng = "aBCdeFg";
eng.toLowerCase();


function solution(s){
    
    //p와 y의 개숫를 저장하는 객체
    const check = {
        p : 0,
        y : 0
    }
    
    //모든 글자를 소문자로 변환
    s=s.toLowerCase();
    for(let i =0; i <s.length; i++){
        if (s[i] === 'p' || s[i] === 'y'){
        //check[s[i]] = check[s[i]] +1                 
            check[s[i]] +=1
        }
    }
    return check.p === check.y
}

function solution(s){
    //p와 y의 개숫를 저장하는 객체
   const check = {}
   const result = s.toLowerCase()
                   .split("")
                   .forEach(str => {
                       check[str] === undefined
                           ? check[str] = 1
                           : check[str] += 1
                   })
   return check.p === check.y
                   }
   
//      배열형태이므로 메서드 사용할수 잇음




// 이상한 문자 만들기

// step1. s 에서 공백을 기준으로 각각의 단어를 구분하는 배열을 생성
// step2. 짝수번째 대문자. 홀수번째 소문자. 
// step3. 바뀐단어를 공백으로 join한 후 리턴

function solution(s) {
    const words = s.split{' '}
    const answer = words
    .map(word =>
        [...word]
        .map((w, i) => (i % 2 ? w.toLowerCase() : w.toUppercase()))
        .join(' '),
        )
        .join(' ')
        return answer
}

solution ('try hello world')

// 


function solution(s) {
    let answer = ' '
    // 단어별로의 인덱스 값을 판단하는 변수     
    let idx = 0
    
    for (let i=0; i < s.length; i++){
       if (s[i] === " "){
            //빈 공백일 경우
           idx = 0;
           answer += " ";
       }else {
           answer = answer + (idx % 2 === 0 
                             ? s[i].toUpprCase() //대무자로 변환
                             : s[i].toLowerCase() /*소문자로 변환*/ )                                 
    
        idx += 1;
      }
    }
    return answer;
}

function solution(s) {
    const answer = s.split(" ")
                    .map( str => {
                        retrun str.split{" "}.map((letter, i)=>{
                            retrun i % 2 === 0
                            ? letter.toUpperCase()
                            : letter.toLowerCase()
                        }).join(" ")
                    }).join(" ")
return answer;
    }