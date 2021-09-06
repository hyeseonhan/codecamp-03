import BoardWriteUI from "./BoardWrite.presenter"
import { useState } from "react"
import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { CREATE_BOARD} from "./BoardWrite.queries"

export default function BoardWrite(){

    const router = useRouter()
    const [ creatBoard ] = useMutation(CREATE_BOARD)
    const [myWriter, setMyWriter] = useState('')
    const [myTitle, setMyTitle] = useState('')
    const [myContents, setMyContents] = useState('')

    const [qqq, setQqq] = useState(false)

    function onChangeMyWriter(event){
        setMyWriter(event.target.value)
        if (event.target.value !== "" && myTitle !== "" && myContents !==""){
            setQqq(true)
        } else {setQqq(false)}
    }

    function onChangeMyTitle(event){
        setMyTitle(event.target.value)
        if (myWriter!== "" && event.target.value !== "" && myContents !==""){
            setQqq(true)
        } else {setQqq(false)}
    }

    function onChangeMyContents(event){
        setMyContents(event.target.value)
        if (myWriter !== "" && myTitle !== "" && event.target.value !==""){
            setQqq(true)
        } else {setQqq(false)}
    }

    async function aaa(){
        try {
            const result = await creatBoard({
                variables: { writer : myWriter, title: myTitle, contents: myContents}
            })
            console.log(result)
            console.log(result.data.createBoard.number)    
            router.push(`/quiz/week2/container-presenter/06-quiz-container-presenter-read/${result.data.createBoard.number}`) 

        } catch(error){
            console.log(error)
        }
    }

    return (
        <BoardWriteUI
            onChangeMyWriter={onChangeMyWriter}
            onChangeMyTtitle={onChangeMyTitle}
            onChangeMyContents={onChangeMyContents}
            aaa={aaa}
            qqq={qqq}
        />
    )

}