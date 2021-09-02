import { useMutation, gql } from '@apollo/client'

const CREATE_BOARD =gql`
    mutation{
        createBoard(
            writer:"글쓴이",
            title:"제목제목제목",
            contents:"내용내용내용"
        ){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutaionBoardPage(){

    const [creatBoard] = useMutation(CREATE_BOARD)

    async function aaa(){
        const result = await creatBoard()
        console.log(result)
    }

    return(
        <button onClick={aaa}>GRAPHQL-APL 요청하기</button>
    )


    
}