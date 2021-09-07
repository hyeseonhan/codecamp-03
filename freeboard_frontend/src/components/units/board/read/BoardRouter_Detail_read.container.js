import DetailReadUI from "./BoardRouter_Detail_read.presenter"
import { useRouter } from "next/router"
import { useQuery } from "@apollo/client"
import { FETCH_BOARD } from "./BoardRouter_Detail_read.queries"


export default function DetailRead() {
    const router = useRouter()
    const {data} = useQuery(FETCH_BOARD, {
        variables: {boardId: router.query.number}
    })

    return (
        <DetailReadUI
            data={data}
            router={router}
        />    
    )
}    