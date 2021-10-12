import { useState } from "react"
import { useEffect } from "react"

export default function BasketLoggedInPage(){
const [basketItemes, setBasketItems] = useState([])


    useEffect(() => {

        const Itmes = JSON.parse.localStorage.getItem("baskets")
        setBasketItems(Itmes)
    }, [])

    return(
        <div>비회원으로 담은 장바구니 </div>   )
}