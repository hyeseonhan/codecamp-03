import ProductWriteUI from "./product.presenter";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {CREATE_PRODUCT} from "./Product.queries";
import {UPDATE_PRODUCT} from "./Product.queries";

export default function ProductWrite(props){
    const router = useRouter()

    const [createProduct] = useMutation(CREATE_PRODUCT)
    const [updateProduct] = useMutation(UPDATE_PRODUCT)

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

    async function onClickPost(){
        try{
            const result = await createProduct({
                variables: {seller: Seller,
                            createProductInput: {
                                name: Name,
                                detail: Detail,
                                price: Number(Price),
                            }
                    }
                })
                console.log(result.data.createProduct._id)  
                router.push(`/quiz/week2/08-02-product-detail/${result.data.createProduct._id}`)
            } 
            catch(error){
                console.log(error)
            }
        }    
        
    

    async function onClickEdit(){
        try{
            await updateProduct({
                variables: {
                    productId: router.query.number, 
                    updateProductInput:{
                        name: Name,
                        detail: Detail,
                        price: Number(Price),
                    }
                }
            })
            router.push(`/quiz/week2/08-02-product-detail/${router.query.number}/`)
        }
        catch(error){
            console.log(error);
        }    
    }


    return(
       <ProductWriteUI
        onChangeSeller={onChangeSeller}
        onChangeName={onChangeName}
        onChangeDetail={onChangeDetail}
        onChangePrice={onChangePrice}
        onClickPost={onClickPost}
        onClickEdit={onClickEdit}
        isEdit={props.isEdit}
       />
    )
}