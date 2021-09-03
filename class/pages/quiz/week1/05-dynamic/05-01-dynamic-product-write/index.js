import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'

const CREATE_PRODUCT = gql`
    mutation createProduct(
        $seller:String 
        $createProductInput: CreateProductInput!
        ){
        createProduct(seller:$seller, createProductInput:$createProductInput){
                _id
                # number
                # message

        }
    }
`

export default function DynamicProductWrite(){
    const router = useRouter()

    const [createProduct] = useMutation(CREATE_PRODUCT)
    const [Seller, setSeller] = useState('')
    const [Name, setName] = useState('')
    const [Detail, setDetail] = useState('')
    const [Price, setPrice] = useState('')

    function onChangeSeller(event){
        setSeller(event.target.value)
    }

    function onChangeName(event){
        setName(event.target.value)
    }

    function onChangeDetail(event){
        setDetail(event.target.value)
    }

    function onChangePrice(event){
        setPrice(event.target.value)
    }

    async function onClickMove(){
        try{
            const result = await createProduct({
                variables: {
                    seller: Seller,
                    createProductInput:{
                    name: Name,
                    detail: Detail,
                    price: Number(Price),
                    }
                } 
            })
            console.log(result)
            console.log(result.data.createProduct._id)
           router.push(`/quiz/week1/05-dynamic/05-02-dynamic-product-read/${result.data.createProduct._id}`)
        }
        catch(error){
            console.log(error)
        }
    }

    return(
        <>
        판매자: <input type="text" onChange={onChangeSeller} /><br />
        상품명: <input type="text" onChange={onChangeName} /><br />
        상품내용: <input type="text" onChange={onChangeDetail} /><br />
        상품가격: <input type="text" onChange={onChangePrice} /><br />
        <button onClick={onClickMove}>상품 등록 화면</button>
        </>
    )
}