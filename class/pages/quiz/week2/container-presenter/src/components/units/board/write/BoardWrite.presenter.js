import {Mybutton} from "./BoardWrite.styles"

export default function BoardWriteUI(props){
    return(
         <>
            작성자: <input type="text" onChange={props.onChangeMyWriter} /><br />
            제목: <input type="text" onChange={props.onChangeMyTtitle} /><br />
            내용: <input type="text" onChange={props.onChangeMyContents} /><br />
            <Mybutton onClick={props.aaa} qqq={props.qqq} >GRAPQL-API 요청하기!!!</Mybutton>
        </>
    )
    
}