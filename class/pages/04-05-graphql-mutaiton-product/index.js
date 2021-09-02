import { useMutation, gql } from "@apollo/client"
import { useState} from "react"

const CPREATE_PRODUCT = gql`
    mutation crateProduct($seller: String, $createProductInput: CreateProductInput!){
        createProduct(
            seller:$seller, 
            createProductInput: $createProductInput
        ){
            _id
            number
            message
        }
  }
  `

export default function GraphqlMutationProductPage(){

    const [ createProduct] = useMutation(CPREATE_PRODUCT)
    const [mySeller, setMySeller] = useState('')
    const [myName, setMyName] = useState('')
    const [myDetail, setMyDetail] = useState('')
    const [myPrice, setMyPrice] = useState('')

    function onChangeSeller(event){
        setMySeller(event.target.value)
    }

    function onChangeName(event){
        setMyName(event.target.value)  
    }

    function onChangeDetail(event){
        setMyDetail(event.target.value)
    }

    function onChangePrice(event){
        setMyPrice(event.target.value)
    }

    async function onClickSubmit(){
        const result = await createProduct({
            variables:{
                seller: mySeller,
                createProductInput:{
                    name: myName,
                    detail: myDetail ,
                    price: Number(myPrice)
                }
            }
        })
        console.log(result)
        console.log(result.data.createProduct._id)
    }

    return(
        <>
            판매자: <input type="text" onChange={onChangeSeller} /><br />
            상품명: <input type="text" onChange={onChangeName} /><br />
            상품상세: <input type="text" onChange={onChangeDetail} /><br />
            상품가격: <input type="text" onChange={onChangePrice} /><br />
            <button onClick={onClickSubmit}>상품등록하기</button>
        </>
    )


}