
export default function MapFruitsPAge(){

    const fruits = [
        { number: 1, title: "레드향" }, //결과  <div>1 레드항</>
        { number: 2, title: "샤인머스켓" }, //결과  <div>2 샤인머스캣</>
        { number: 3, title: "산청딸기" },
        { number: 4, title: "한라봉" },
        { number: 5, title: "사과" },
        { number: 6, title: "애플망고" },
        { number: 7, title: "딸기" },
        { number: 8, title: "천혜향" },
        { number: 9, title: "과일선물세트" },
        { number: 10, title: "귤" },
      ]
      return(
        <div>
            {fruits.map((el) => (
            <div>
                <span>{el.number}</span> 
                <h1>{el.title}</h1> 
            </div>
        ))}
        </div>
    )
    
}


// export default function MapFruitsPAge(){

//     const fruits = [
//         { number: 1, title: "레드향" }, //결과  <div>1 레드항</>
//         { number: 2, title: "샤인머스켓" }, //결과  <div>2 샤인머스캣</>
//         { number: 3, title: "산청딸기" },
//         { number: 4, title: "한라봉" },
//         { number: 5, title: "사과" },
//         { number: 6, title: "애플망고" },
//         { number: 7, title: "딸기" },
//         { number: 8, title: "천혜향" },
//         { number: 9, title: "과일선물세트" },
//         { number: 10, title: "귤" },
//       ]

//     const aaa = fruits.map((el) => (
//         <div>
//             {el.number} {el.title}
//         </div>
//     ))  
//     //const aaa = [<div>1 레드항</>, <div>2 샤인머스캣</>, .... ]

//     return (
//         <div> {aaa} </div>
//     )
// }