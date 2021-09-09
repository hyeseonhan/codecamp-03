import BoardDetailUI from "./BoardDetail.presenter"
import { useRouter } from "next/router"
import { useQuery, useMutation } from "@apollo/client"
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries"


export default function BoardDetail() {
    const router = useRouter()
    const [deleteBoard] = useMutation(DELETE_BOARD)

    const {data} = useQuery(FETCH_BOARD, {
        variables: {boardId: router.query.board_post_detail}
    })

    

    function onClickMoveToList(){
        router.push("/boards/main")
    }

    function onClickMoveToEdit(){
        router.push(`/boards/${router.query.board_post_detail}/edit`)
    }

    async function onClickDelete(){
        try {
            await deleteBoard({variables: {boardId: router.query.board_post_detail} })
                alert("게시물이 삭제되었습니다.")    
                router.push("/boards/main")        
        }
        catch(error){
            alert(error.message)
        }
    }


    return (
        <BoardDetailUI
            data={data}
            router={router}
            onClickMoveToList={onClickMoveToList}
            onClickDelete={onClickDelete}
            onClickMoveToEdit={onClickMoveToEdit}
        />    
    )
}    