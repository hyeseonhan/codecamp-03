import BoardWriteUI from "./BoardWrite.presenter"
import { useState } from "react"
import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { CREATE_BOARD} from "./BoardWrite.queries"
import { UPDATE_BOARD } from "./BoardWrite.queries"

export default function BoardWrite(props){

    const router = useRouter()

    const [ createBoard ] = useMutation(CREATE_BOARD)
    const [ updateBoard ] = useMutation(UPDATE_BOARD)

    const [writer, setWriter] = useState('')
    const [password, setPassword] = useState('')
    const [title, setTitle] = useState('')
    const [contents, setContents] = useState('')

    const [writerError, setWriterError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [titleError, setTitleError] = useState('')
    const [contentsError, setContentsError] = useState('')

    const [color, setColor] = useState(false)

    function onChangeWriter(event){
        setWriter(event.target.value)
        if(
            event.target.value !== "" &&
            password !== "" &&
            title !== "" &&
            contents !==""
            ){
                setWriterError("")
                setColor(true)
            } else {setColor(false)}
        }

        function onChangePassword(event){
        setPassword(event.target.value)
        if(
            writer !== "" &&
            event.target.value !== "" &&
            title !== "" &&
            contents !== ""
            ){
                setPasswordError("")
                setColor(true)
             } else {setColor(false)}
        }

        function onChangeTitle(event){
        setTitle(event.target.value)
        if(
            writer !== "" &&
            password !== "" &&
            event.target.value !== "" &&
            contents !== ""
            ){
                setTitleError("")
                setColor(true)
            } else {setColor(false)}  
        }

        function onChangeContents(event){
        setContents(event.target.value)
        if(
            writer !== "" &&
            password !== "" &&
            title !== "" &&
            event.target.value !== ""
            ){
                setContentsError("")
                setColor(true)
             } else {setColor(false)}
        }

    async function onClickSubmit(){
        try{
            if(writer === ""){
                setWriterError("작성자를 입력해주세요.")
            }
            if(password === ""){
                setPasswordError("비밀번호를 입력해주세요.")
            }
            if(title === ""){
                setTitleError("제목을 입력해주세요.")
            }
            if(contents === ""){
                setContentsError("내용을 입력해주세요.")
            }
            if(writer !== "" && password !== "" && title !== "" && contents !== ""){
                alert('게시물을 등록합니다~')
            }
            const result = await createBoard({
                variables:{
                    createBoardInput:{
                        writer:writer,
                        title:title,
                        contents:contents,
                        password:password
                    }
                }
            })
            console.log(result)
            console.log(result.data.createBoard._id)
            router.push(`/boards/${result.data.createBoard._id}`)
            }
        catch(error){
            console.log(error)
        }
    }  

    async function onClickEdit(){
        try{
            await updateBoard({
                variables: {
                    updateBoardInput:{
                        title:title,
                        contents:contents,
                    },
                    password:password,
                    boardId: router.query.board_post_detail,
                }
            })
            router.push(`/boards/${router.query.board_post_detail}`)
        }catch(error){
            console.log(error);
        }


    }

    return (
        <BoardWriteUI
            writerError={writerError}
            passwordError={passwordError}
            titleError={titleError}
            contentsError={contentsError}
            onChangeWriter={onChangeWriter}
            onChangePassword={onChangePassword}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            onClickSubmit={onClickSubmit}
            onClickEdit={onClickEdit}
            isEdit={props.isEdit}
            color={color}
        />    
    )
}