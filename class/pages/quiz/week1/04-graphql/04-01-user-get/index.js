// 1~2 
// import axios from 'axios'

// export default function UserGetPage(){

//     function zzz(){
//         const result = axios.get('https://koreanjson.com/users') 
//         console.log(result)
//     }
    
//     return (
//         <button onClick={zzz}>REST-API 요청하기</button>
//     )
// }

// 

import axios from 'axios'

export default function UserGetPage(){

    async function zzz(){
        const result = await axios.get('https://koreanjson.com/users') 
        console.log(result)
    }
    
    return (
        <button onClick={zzz}>REST-API 요청하기</button>
    )
}