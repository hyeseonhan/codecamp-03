// 문자열을 정수로 바꾸기
    // 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.
    // 제한 조건
    // s의 길이는 1 이상 5이하입니다.
    // s의 맨앞에는 부호(+, -)가 올 수 있습니다.
    // s는 부호와 숫자로만 이루어져있습니다.

    // s는 "0"으로 시작하지 않습니다.

function solution(s) {
    return +s   
}


// 같은 숫자는 싫어
    // 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 
    // 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

    // arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
    // arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
    // 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

    // 제한사항
    // 배열 arr의 크기 : 1,000,000 이하의 자연수
    // 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수

    function solution(arr)
    {
        const answer = arr.filter((v, i, array) => v !==array[i+1] );
        return answer;
    }
        // filter 사용해 arr에서 element와 그 다음 element 가 같지 않은 것들을 바로 배열로 반환해서 풀었다.


// 핸드폰 번호 가리기
    // 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
     // 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.
        
     // 제한 조건
     // s는 길이 4 이상, 20이하인 문자열입니다.
        
     function solution(phone_number) {
        let answer = '';
        for(let i=0; i<phone_number.length; i++){
            if(i<phone_number.length - 4){
             answer = answer + '*';
            }else {
             answer = answer + phone_number[i]
            }
        }
        return answer
    }


// 짝수와 홀수
    // 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

    // 제한 조건
    // num은 int 범위의 정수입니다.
    // 0은 짝수입니다.

    function solution(num) {
        return num % 2 === 0 ? 'Even' :'Odd';
    }

        //num % 2가 0이면 짝수, 1이면 홀수


// 평균 구하기
        // 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

        // 제한사항
        // arr은 길이 1 이상, 100 이하인 배열입니다.
        // arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

        function solution(arr) {
            const answer = arr.reduce((a,b) => a + b, 0) / arr.length;
            return answer ;
        }
     //otehr solution 
        function solution(arr) {
            let sum = 0;
            for(let i=0; i<arr.length; i++){
                sum = sum + arr[i]
            }
            return sum / arr.length
        }
        // let sum = 0 : 모든 점수의 합을 저장하는 변수
        // arr.length 만큼 for문 실행


// 가운데 글자 가져오기
    // 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

    // 재한사항
    // s는 길이가 1 이상, 100이하인 스트링입니다.

    // step 1. 가운데 글자 찾기: 주어진 단어 s 의 길이가 짝수인지 홀수인 확인 필요.
    // step 2. 짝수인 경우, 홀수인 경우 각각 조건문 생성
    // step 3. 삼항 조건 연산자 이용
    // Math.floor : 소수점 제거

    function solution(s) {
        const half = Math.floor(s.length / 2);
        return s.length %2 === 0
            ? s[half -1] + s[half]
            : s[half]
    }


//서울에서 김서방 찾기 
    // String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, 
    // "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. 
    // seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

    // 제한 사항
    // seoul은 길이 1 이상, 1000 이하인 배열입니다.
    // seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
    // "Kim"은 반드시 seoul 안에 포함되어 있습니다.

    // x : seoul 배열에서 Kim의 location => index 값 
    // 

    function solution(seoul) {
        let x = 0;
        
        for(let i = 0; i<seoul.length; i++){
            console.log(seoul[i], i)
            if(seoul[i] === 'Kim'){
                x = i;
                break;
            }
        }
        return '김서방은 ' + x + '에 있다';
    }

    // other solution
    function solution(seoul) {
        let x = seoul.indexOf('Kim');
        return '김서방은 ' +x+ '에 있다';
    }


// 문자열 다루기 기본
    // 문제 설명
    // 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, 
    // solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

    // 제한 사항
    // s는 길이 1 이상, 길이 8 이하인 문자열입니다.

    function solution(s) {
        if(s.length !==4 && s.length !== 6){
            return false;
        }
        const answer = 
              s.split("") // 문자열을 배열로 만들어 준다.
                .filter( str => isNaN(str) === true )
                .length === 0
        return answer;
    }
    // NaN : Not a Number 숫자가 아니다. 숫자를 계산 시 중간에 문자 값 등 연산에 포함되면
    // 안된는 값이 있는지 확인한다.
    // isNaN : 문자 포함시 true. 숫자로만 이루어져 있을 경우 false


// 약수의 합
    // 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

    // 제한 사항
    // n은 0 이상 3000이하인 정수입니다.

    // 1부터 n까지의 정수를 순회하면서 n 나나기 i의 나멎가 0이 되는 i를 구하고 reduce()

    function solution(n) {
        let answer = 0;

        for( let i = 0; i <= n; i++){
            if(n%i === 0) {answer = answer + i}
        }
        return answer;
    }


// 자릿수 더하기
    // 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
    // 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

    // 제한사항
    // N의 범위 : 100,000,000 이하의 자연수

    function solution(n) {
        let result = 0;

        const array = String(n)
                        .split("")
                        .forEach(num => {
                            result = result+Number(num)
                        })
        return result;   
    }