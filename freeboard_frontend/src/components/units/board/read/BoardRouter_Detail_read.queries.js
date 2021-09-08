import {gql} from '@apollo/client'

export const FETCH_BOARD =gql`
    query fetchBoard($boardId: ID!){
        fetchBoard(boardId:$boardId){
            _id
            writer
            title
            contents
        }
    }
`
export const DELETE_PRODUCT =gql`
    mutation deleteBoard($boardId: ID!){
        deleteBoard(boardId:$boardId){
            _id
        }
    }
`
