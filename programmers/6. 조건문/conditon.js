// 018. 조건문 연습

function boolean(input1, input2) {

	if(iuput1 === true || input2 === true) {
		console.log("true")
	} else if( input1 === false && input2 === false ) {
		console.log("false")
	}
}


// 019. 홀짝

function evenOdd(num){
    if (num === 0) {
    console.log("Zero");
    } else if (num % 2 === 0) {
    console.log("Even");
    } else if (num % 2 === 1) {
    console.log("Odd")
    }
}


// 020. 온도

function temperature(num){

    if(num <= 18) {
       console.log("조금 춥네요");
    } else if (num >=19 && num <= 23){
       console.log("날씨가 좋네요")
    } else if (num >= 24){
       console.log("조금 덥습니다")
    }
   }

// 021. 며칠

function days(month){
    if ( month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
     console.log("31일");
    } else if (month === 2){
     console.log("28일");
    } else if (month === 4){
     console.log("30일");
    }
   }