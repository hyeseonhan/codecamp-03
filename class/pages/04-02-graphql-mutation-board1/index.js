import {useMutation, gql } from '@apollo/client'

const CREATE_BOARD = gql`
    mutation{
        createBoard(writer:"영희", title:"안녕하세요! 영희입니다.", contents:"내용"){
        number
        message
        }
    }
`



export default function GraphqlMutaionBoard1Page(){
    const [ creatBoard ] = useMutation(CREATE_BOARD)

    async function aaa(){
        const result = await creatBoard()
        console.log(result)
        // console.log(result.data.creatBoard.number)
            
    }
  
    return (
        <button onClick={aaa}>GRAPQL-API 요청하기!!!</button>
    )

}