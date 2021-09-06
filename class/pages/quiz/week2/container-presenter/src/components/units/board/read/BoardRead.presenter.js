import {Title} from "./BoardRead.styels"


export default function BoardReadUI(props){
    return(
        <>
        <Title>게시물 상세 페이지 입니다!!!</Title> 
        <div>게시물 번호:{props.router.query.number}</div>
        <div>게시물 작성자:{props.data?.fetchBoard?.writer}</div>
        <div>게시물 제목:{props.data?.fetchBoard?.title }</div>
        <div>게시물 내용:{props.data?.fetchBoard?.contents }</div>
        </>
    )
}