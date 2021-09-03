// 023. 숫자 더하기
 
function sum(num) {
	let sum = 0;

	for( let i = 1; i <= num; i = i + 1 ) {
		sum = sum + i;
	}
    return sum
}

  // function 을 실행하려면 return 을 해줘야함 


//   024. 특정 문자열 세기

str = "I am from Korea"

let count = 0;
  for (let i = 0; i < str.length; i = i + 1) {
		if(str[i] === "a" || str[i] === 'A') {
			count = count + 1;
		}
  }

  count

  str = "A day without laughter is a day wasted."
"A day without laughter is a day wasted."

let count = 0;
  for (let i = 0; i < str.length; i = i + 1) {
		if(str[i] === "a" || str[i] === 'A') {
			count = count + 1;
		}
  }

  count


// 025. 문자열 삽입

num = 3;
  let result = '';
  for (let i = 1; i <= num; i = i + 1) {
		result = result + i;

		if(i !== num) {
			result = result + '-';
		} 
  }

  result

// 026. 홀수 문자열

function str(num) {
	let str = '';	
	for( let i = 1; i <= num; i = i + 1 ) {
		if( i % 2 !== 0 ) {
			str = str + i;
		}
	}
        console.log(str)
}

str(5)


// 027. 가장 큰 수 찾기

str = "12345"

let biggest = Number( str[0] )
	for( let i = 1; i < str.length; i = i + 1 ) {
        
		if( Number(str[i]) > biggest ) {
			biggest = Number(str[i])
		}
	}


// 41. 조건문 실전 적용 - 점수에 따른 등급 

function grade(score) {
	let result = "";

if( score > 100 || score <0) {
    result = '잘못된 점수입니다';
} else if (score >= 90 && score <= 100){
    result = 'A';
} else if(score >= 80 && score <= 89) {
    result = 'B';
} else if(score >= 70 && score <= 79) {
    result = 'C';
} else if(score >= 60 && score <= 69) {
    result = 'D';
} else if(score <= 59) {
    result = 'F'
}
 console.log(result)
}

grade(77)


// 043. 마이페이지

const myShopping = [
    { category: "과일", price: 12000　},
    { category: "의류", price:10000　 },
    { category: "의류", price: 20000　},
    { category: "장난감", price: 9000 },
    { category: "과일", price: 5000　 },
    { category: "의류", price: 10000  },
    { category: "과일", price: 8000　　},
    { category: "의류", price: 7000　　},
    { category: "장난감", price: 5000  },
    { category: "의류", price: 10000　 },
];
let count = 0; 
let price = 0;
let grade = '';
for (let i = 0; i < myShopping.length; i = i+1){
if(myShopping[i].category === '의류'){
  count = count + 1;
  price = price + myShopping[i].price;

  if ( count >= 0 && count <= 2){
    //   bronze
    grade = 'bronze'
  } else if ( count = 3 && count <= 4){
   // sliver
    grade = 'sliver'
  } else if(count >= 5) {
    grade = "gold";
  }
}

}
console.log('의류를 구매한 횟수는 총'+ count+'회 금액은'+ price + '원이며 등급은' + grade +'입니다.')