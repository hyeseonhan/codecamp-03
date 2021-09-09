export default function TypescriptPage(){

    
    // 문자타입 - 타입 추론
    let aaa = "안녕하세요"
    aaa = 3

    // 문자타입
    let bbb: string;
    bbb = "반갑습니다."
    bbb = 123

    // 숫자 타입
    let ccc: number = 5
    ccc = "333"

    // 배열 타입
    let ddd: number[] = [1, 2, 3, 4, 5, 6]
        // 숫자 또는 문자
    let eee: ( number | string )[] = ["1", 1, 2, 3, 4, 5, 6]
        // 전체가 숫자거나 전체가 문자여야한다
    let fff: (number[] | string[]) = [1, 2, 3, 4, 5, 6]

    // 객체 타입
    interface IProfile {
        school: string
        age: number
    }


    let profile: IProfile = {
        school: '다룸취 초등학교',
        age: 13
    }
        // 프로필 나이 바꾸고 싶음
    profile.age = 15



    // return 윗 부분은 자바스크립트 부분
    return <div>타입스크립트 페이지입니다.</div>
}