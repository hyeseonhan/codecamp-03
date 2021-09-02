import {useMutation, gql } from '@apollo/client'

const CREATE_BOARD = gql`
    mutation createBoard($writer:String, $title:String, $contents:String) {
        createBoard(writer:$writer, title:$title, contents:$contents){
        number
        message
        }
    }
`



export default function GraphqlMutaionBoard2Page(){
    const [ creatBoard ] = useMutation(CREATE_BOARD)

    async function aaa(){
        const result = await creatBoard({
            variables: { writer : "철수", title: "제목이에요", contents:"내용!"}
        })
        console.log(result)
        console.log(result.data.creatBoard)
            
    }
  
    return (
        <button onClick={aaa}>GRAPQL-API 요청하기!!!</button>
    )

}