import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { InputWrapper, Wrapper } from "../../../../styles/router_detail";

import {

 } from '../../../../styles/router_detail_read'


const FETCH_BOARD =gql`
    query fetchBoard($boardId: ID!){
        fetchBoard(boardId:$boardId){
            writer
            title
            contents
        }
    }
`

export default function BoardRouter_DetailRead() {
    const router = useRouter()

    const {data} = useQuery(FETCH_BOARD, {
        variables: {boardId: router.query.aaa}
    })

    return(
        <Wrapper>
            <WriterWrapper>
                <ProfilImage>
                    <img src="  "/>
                </ProfilImage>
                <WriterDate>
                    <Writer>{data?.fetchBoard.writer}</Writer>
                    <Date>Date : 2021.02.18</Date>
                </WriterDate>
            </WriterWrapper>
            <InputWrapper>
                <Title>{data?.fetchBoard.title}</Title>
                <img src="" />
                <Contents>{data?.fetchBoard.contents}</Contents>
            </InputWrapper>
            <InputWrapper>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ScWXi59imGI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </InputWrapper>
            <InputWrapper>
                <Like>
                    <LikeImage><img src="  "/></LikeImage>
                    <LikeCount>1920</LikeCount>
                </Like>
                <Dislike>
                    <DislikeImage><img src="  "/></DislikeImage>
                    <DislkeCount>1920</DislkeCount>
                </Dislike>
            </InputWrapper>
        </Wrapper>

        
    )
}    




        // <>
        // <div>작성자: {data?.fetchBoard.writer}</div>
        // <div>제목: {data?.fetchBoard.title}</div>
        // <div>내용: {data?.fetchBoard.contents}</div>
        // </>