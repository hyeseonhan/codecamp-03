import {useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { IMutation, IMutationCreateBoardArgs } from '../../src/commons/types/generated/types'

const CREATE_BOARD = gql`
    mutation createBoard($writer:String, $title:String, $contents:String) {
        createBoard(writer:$writer, title:$title, contents:$contents){
        number
        message
        }
    }
`

export default function DynamicBoardWrite(){
    const router = useRouter()

    const [ creatBoard ] = useMutation<Pick <IMutation, 'createBoard'>, IMutationCreateBoardArgs >(CREATE_BOARD)
    const [myWriter, setMyWriter] = useState<string>('')
    const [myTitle, setMyTitle] = useState<string>('')
    const [myContents, setMyContents] = useState('')

    const bbb: string = "asdf"  // 상수에 타입 지정하기
    

    // setMyWriter(234243423)  // 문자랑 숫자 모두 넣고 싶을때
    

    function onChangeMyWriter(event){
        setMyWriter(event.target.value)
    }

    function onChangeMyTtitle(event){
        setMyTitle(event.target.value)
    }

    function onChangeMyContents(event){
        setMyContents(event.target.value)
    }

    async function aaa(){
        try {
            const result = await creatBoard({
                variables: { writer : myWriter, title: myTitle, contents: myContents}
            })
            result.data.createBoard.number
            console.log(result)
            console.log(result.data.createBoard.number)    
            // router.push('/05-06-dynamic-board-read/'+ result.data.creatBoard.number ) 옛날방식
            router.push(`/05-06-dynamic-board-read/${result.data.createBoard.number}`) 
            // 최신 방식 (템플릿 리터럴)

        } catch(error){
            console.log(error)
        }
    }
  
    return (
        <>
            작성자: <input type="text" onChange={onChangeMyWriter} /><br />
            제목: <input type="text" onChange={onChangeMyTtitle} /><br />
            내용: <input type="text" onChange={onChangeMyContents} /><br />
            <button onClick={aaa}>GRAPQL-API 요청하기!!!</button>
        </>
    )
}