// 1. 짝수와 홀수

// 짝수 : num % 2 = 0 
// 홀수 : num % 2 = 1
// 삼항연산자로 이용

function solution(num) {
    return num % 2 ? 'Odd' : 'Even';
}


// 2. 평균 구하기

// solution 1. reduce 메서드 이용. 배열의 모든 요소의 합 -> arr.length  값으로 나누어 평균 도출
// reduce : 누산값 / 배열이나 객체에서 원하는 값을 추출 or 새로운 배열이나 객체 생성.     

function solution(arr) {
    const answer = arr.reduce((a,b) => a + b, 0) / arr.length;
    return answer ;
}

// soulution 2. arr.length 만큼 for문을 실행한 후 sum/arr.length 값을 return. 반복되는 값 arr.length를 변수 len에 할당.

function solution(arr) {
    let sum = 0;
    const len = arr.length;
    for (let i =0; i < len; i++){
        sum += arr[i];
    }
    return sum/len;
}


// 3. 가운데 글자 가져오기

// step 1. 가운데 글자 찾기: 주어진 단어 s 의 길이가 짝수인지 홀수인 확인 필요.
// step 2. 짝수인 경우, 홀수인 경우 각각 조건문 생성
// step 3. 삼항 조건 연산자 이용

function solution(s) {

}



// 1.

function solution(num) {
    // 삼항연산자
    retrun num % 2 === 0 
    ? 'Even'
    : 'Odd'

    // if 조건문 사용
    if( num % 2 === 0 ){
        retrun 'Even';
    } else {
        retrun 'Odd';
    }
}

// 2.
function solution(arr) {
    // 평균 구하기: 모든 점수의 합 / 점수의 갯수
    
    // sum: 모든 점수를 담는 변수
    let sum = 0;
                                 // i++ : i = i+1
    for( let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    
    retrun sum / arr.length
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
    
    if( s.length % 2 === 0 ){
        //  짝수일 경우
        return s[half -1] + s[half]
    }else{
        // 홀수인 경우 
        return s[half];
    }

    const half = Math.floor(s.length / 2);
    return s[half];
}   

function solution(s) {
    // 가운데 있는 글자의 인덱스 값을 저장
    const hal = Math.floor(s.length/2);
    
    //삼항연산자 
    return s.length % 2 === 0 
    ? s[half - 1] +s[half]
    : s[half]
} 