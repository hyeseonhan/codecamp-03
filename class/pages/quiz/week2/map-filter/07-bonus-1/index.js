
export default function BonusPage(){
    const classmate = [
        {name: "철수", age: 10, school: "토끼초등학교"},
        {name: "영희", age: 13, school: "다람쥐초등학교"},
        {name: "훈이", age: 11, school: "토끼초등학교"},
    ]
    return(
        <div>
            {classmate.filter((el) => ( el.school === "토끼초등학교"))}
            <div>{el.name}</div>
            <div></div>
            <div></div>
        </div>
    
    )

}  