// 9월 9일 프로그래머스

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


// 9월 10일 프로그래머스

// 문자열 내림차순으로 배치하기

    function solution(s) {
    let answer = '';
    
    //sort(정렬)을 사용하기 위해 배열로 저장해주느 변수(기본적으로 오름차순)
    const arr = [];
    
    for( let i = 0; i < s.length; i++){
        arr.push(s[i]);
    }
    console.log('sort 전 : ' + arr)
    arr.sort((a,b) => {
        // 배열을 내림차순으로 정렬하는 식
        return a > b ? -1 : 1
    })
    return arr.join("")
    }

    //  -1  배열의 맨 뒤로. 1 은 배열의 맨 앞으로 
    //  오름차순 정리 a < b ? -1 : 1

    function solution(s) {
        let answer = '';
        
        const arr = [];
        
        for( let i = 0; i < s.length; i++){
            arr.push(s[i]);
        }
        arr.sort().reverse();
        return arr.join;
    } 
    
    // method
    function solution(s) {
        const result = s.split("")
                        .sort( (a, b) => {
                             return a>b ? -1 : 1
                        }).join("")
        return result;                
    }


// K번째수

    function solution(array, commands){
        let answer = [];

        for( let idx = 0; idx < commands.length; idx++){
            const i = commands[idx][0];
            const j = commands[idx][1];
            const k = commands[idx][1];
            //  배열을 자르고 정렬한 결과를 저장하는 상수
            const sliceResult = array.slice(i - 1, j)
                                      .sort((a,b) => {
                                          return a - b 
                                      })
        answer.push(sliceResult[k - 1])
        }                            
        return answer;
    }
    // 내림차순 정리 return b - a

    // method
    function solution(array, commands) {
        const answer = commands.map(el => {
            const sliceResult = array.slice( el[0] - 1, el[1])
                                    .sort ( (a, b) =>{
                                            return a - b
                                    })
            return sliceResult[el[2] - 1];
        })
        return answer;
    }