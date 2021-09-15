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
    const words = s.split('')
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
                        return str.split(" ").map((letter, i)=>{
                            return i % 2 === 0
                            ? letter.toUpperCase()
                            : letter.toLowerCase()
                        }).join(" ")
                    }).join(" ")
return answer;
    }


//자연수 뒤집어 배열로 만들기

// 숫자는 배열매서드 reverse () 사용 불가 => 숫자를 문자열 형태 배열로 만듬
// reverse() 메서드사용. 각각의 요소를 숫자로 변경해 리턴

function solution(n){
    const answer = [... `${n}`].reverse().map(v=> +v)
    return answer
}

// 선생님
function solution(n){
    const result = []
    // 숫자 타입을 문자열 타입으로 변환
    n = String(n);

    for (let i =0; i<n.length; i++){
        result.push(Number(n[i]))
    }
    result.reverse();
    return result;
}

function solution(n){
    const result = []

    n = String(n);

    for (let i = n.length -1; i>=0; i--){
        result.push(Number(n[i]))
    }
    return result;
}
    // 메서드
function solution(n) {
    // toString === String
    const result = n.toString()
                    .split("")
                    .reverse()
                    .map(el=>{
                        return Number(el)
                    })
    return result;
}

// 나누어 떨어지는 숫자 배열

// arr의 각 요소를 순회하면서 요소와 divisor의 나머지가 0인 값만 추출
// filter() 메서드는 callback함수의 리턴값이 true인 요소만 반환하게 되는데 나머지가
// 0인 경우 0은 false로 보기 때문에 v%divisor 앞에 !를 넣어 true값으로 리턴한다.

function solution(arr, divisor) {
    const answer = arr.filter(v =>!(v%divisor)).sort((a,b)=> a-b);
    if (!answer.length) return[-1];
    return answer;
}

function solution(arr, divisor) {
    var answer = arr.filter(v => v%divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}

// 선생님
function solution(arr, divisor){
    let answer = [];

    for (let i = 0; i< arr.length; i++){
        if(arr[i] % divisor === 0  ) {
            answer.push(arr[i]);
        }
    }
    
    return answer.length === 0
        ?[-1]
        : answer.sort((a,b) => a - b)
}

    // 메서드
function solution(arr, divisor){
    const answer = arr.filter( number => {
        return number % divisor === 0
    }).sort((a,b) => a - b)
    return answer.length === 0
        ? [-1]
        : answer
}


// 콜라츠

function solution(num){
    let count =0;
    while (num >1){
        num = num % 2 ? num * 3 + 1 : num / 2;
    count += 1;
    if (count === 500){
        break
    }
}
    return

}