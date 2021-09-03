import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_PRODUCT = gql`
    query fetchProduct($productId: ID){
        fetchProduct(productId: $productId){
            seller
            name
            detail
            price 
        }   
    }
`

export default function DynamicProductRead(){
    const router = useRouter()

    const {data} = useQuery(FETCH_PRODUCT, {
        variables: { 
            productId: router.query.number}
    })

    return(
        <>
        {/* <div>상품 상세 페이지입니다.</div>
        <div>상품 번호:{router.query.number} </div> */}
        <div>상품 판매자:{ data?.fetchProduct.seller}</div>
        <div>상품명:{ data?.fetchProduct.name}</div>
        <div>상품내용:{ data?.fetchProduct.detail}</div>
        <div>상품가격:{ data?.fetchProduct.price}</div>
        </>
    )
}