import {Mybutton} from "./Product.styles"

export default function ProductWriteUI(props){
    return(
        <>
        <h1>{props.isEdit ? "상품수정페이지" : "상품등록페이지"}</h1>
        판매자: <input type="text" onChange={props.onChangeSeller}/><br />
        상품명: <input type="text" onChange={props.onChangeName}/><br />
        상품내용: <input type="text" onChange={props.onChangeDetail}/><br />
        상품가격: <input type="text" onChange={props.onChangePrice}/><br />
        {!props.isEdit &&(<Mybutton onClick={props.onClickPost}>상품 등록하기</Mybutton>)}
        {props.isEdit &&(<Mybutton onClick={props.onClickEdit}>상품 수정하기</Mybutton>)}
        {/* <button onClick={onClickMove}>상품 등록 화면</button> */}
        </>
    )
}