import { useRouter } from "next/router"
import { useQuery } from "@apollo/client"
import {FETCH_BOARD} from "./BoardRead.queries"
import BoardReadUI from "./BoardRead.presenter"

export default function BoardRead() {
    const router = useRouter()
    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            number: Number(router.query.number)
        }
    })
    
    return (
        <BoardReadUI
            data={data}
            router={router}
        />
    )
}