import

export default function DetailRead() {
    const router = useRouter()
    const {data} = useQuery(FETCH_BOARD, {
        variables: {boardId: router.query.number}
    })

    return (
        <DetailReadUI
            data={data}
            router={router}
    )
}    