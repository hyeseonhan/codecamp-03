// 1. 서울에서 김서방 찾기

function solution(seoul){
    // Kim 의 index 값을 담아주는 변수
    let x = 0;
    for (let i = 0; i<seoul.length, i++){
        console.log(seoul[i],i)
        if( seoul[i] === "Kim" {
            x = i;
            // 반복문 종료
            break;
        }
    }
    return '김서방은' + x +'에 있다';
}

function solution(seoul){
    let x = seoul.indexOf('Kim')
}




// 2. 문자열 다루기 기본
// 
// for
function solution(s) {
    let answer = true;

    if (s.length !==4 && s.length !== 6){
        return false;
    }
    for(let i =0; i < s.length; i++){
        if( isNaN(s[i]) === true){
            answer = false;
            break;
        }
    }
    return answer;
}

// filter
function solution(s) {

    if (s.length !== 4 && s.length !== 6){
        return false;
    }

    const answer = 
        s.split("")  // 문자열을 배열로 만들어 준다
         .filter( str => isNaN(str) === true )
         .length === 0
    return answer;
}



// 3. 약수의 합

// for문
function solution(n) {
    let answer = 0;

    for (let i = 1; i <=n; i ++ ){
        if( n % i === 0 ) {
            answer = answer +i
        }
    }

    return answer;
}

// method
function solution(n) {
    let answer = 0;

    const array = 
            new Array(n)
            .fill(1)
            .forEach( (num, index) => {
                n% (num+index)
                ? answer = answer + (num + index)
                : null
            } )
    return answer;
}