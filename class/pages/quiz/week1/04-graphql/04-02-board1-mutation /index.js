import { useMutation, gql } from '@apollo/client'
import { useState } from 'react'

const CREATE_BOARD =gql`
    mutation createBoard($writer:String, $title:String, $contents:String){
            creatBoard(writer:$writer, title:$title,contents:$contents)  
        {
        
            number
            message
        }
    }
`

export default function GraphqlMutaionBoar1dPage(){

    const [creatBoard] = useMutation(CREATE_BOARD)
    const [myWriter, setMyWriter] = useState('')
    const [myTitle, setMyTitle] = useState('')
    const [myContents, setMyContents] = useState('')

    function onChangeMyWriter(event){
        setMyWriter(event.target.value)
    }

    function onChangeMyTitle(event){
        setMyTitle(event.target.value)
    }

    function onChangeMyContents(event){
        setMyContents(event.target.value)
    }

    async function onClickSubmit(){
        const result = await creatBoard({
            variables: {writer:myWriter, title:myTitle, contents:myContents}
        })
        console.log(result)
        console.log(result.data.creatBoard)  
    }

    return(
        <>
        작성자: <input type="text" onChange={onChangeMyWriter} /><br />
        제목: <input type="text" onChange={onChangeMyTitle} /><br />
        내용: <input type="text" onChange={onChangeMyContents} /><br />
        <button onClick={onClickSubmit}>GRAPHQL-APL 요청하기</button>
        </>
    )


    
}