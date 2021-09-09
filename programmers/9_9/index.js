// 자릿수 더하기

function solution(n) {
    let result = 0;

    // n을 문자열 타입으로 변환
    n = String(n)
    for( let i = 0; i<n.length; i++){
        result = result +Number(n[i]);
    }
    return result;
}

function solution(n) {
    let result = 0;

    const array = String(n)
                    .split("")
                    .forEach(num => {
                            result = result+Number(num)
                        })
    return result;
                }


// x만큼 간격이 있는 n개의 숫자

function solution(x, n){
    let answer = [];

    for ( let i = 1; i<= n; i++){
        answer.push(i * x);
    }
    return answer;
}

function solution(x, n){
    
    const array = new Array(n)
                    .fill(x)
                    .map((number, index) =>{
                        return number * (index+1)
                    })
    return array
}