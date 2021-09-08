import DetailReadUI from "./BoardRouter_Detail_read.presenter"
import { useRouter } from "next/router"
import { useQuery } from "@apollo/client"
import { FETCH_BOARD } from "./BoardRouter_Detail_read.queries"


export default function DetailRead() {
    const router = useRouter()
    const {data} = useQuery(FETCH_BOARD)
    
        async function onClickDelete(){
            await deleteBoard({
                variables: {boardId: router.query.id},
                refetchQueries: [{query: FETCH_BOARD}]

            })
        }

    return (
        <DetailReadUI
            data={data}
            router={router}
        />    
    )
}    