import {useState} from 'react'
import {Error } from '../../styles/02-05-signup-state'

export default function SignupStatePage() {
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")

    const [password1, setPassword1] = useState("")
    const [password1Error, setPassword1Error ] = useState("")

    const [password2, setPassword2] = useState("")
    const [password2Error, setPassword2Error ] = useState("")

    // event? retrun에서    
    function onChangeEmail(event) {
        setEmail(event.target.value)
    }

    function onChangePassword1(event){
        setPassword1(event.target.value)
    }

    function onChangePassword2(event){
        setPassword2(event.target.value)
    }

    function onclickSignup(){ 
        // console.log('email : ', email)
        // console.log('password1 : ', password1)
        // console.log('password2 : ', password1)

        // ! 붙이면 반대로
        if(!email.includes("@")){
            setEmailError("@가 없습니다!")
            // alert("@가 없습니다!")
        }

        if(password1 !== password2){
            setPassword1Error("비밀번호1과 비밀번호2가 다릅니다!")
            // alert("비밀번호1과 비밀번호2가 다릅니다!")
        }
    }

    return (
        <div>
            이메일: <input type="text" onChange={onChangeEmail} /><br />
            <Error>{emailError}</Error> {/* emotion으로 색과 사이즈 변경하기 */}
            비밀번호: <input type="password" onChange={onChangePassword1} /><br />
            <Error>{password1Error}</Error>
            비밀번호확인: <input type="password" onChange={onChangePassword2} /><br />
            <Error>{password2Error}</Error>
            <button onClick={onclickSignup}>회원가입하기</button>
        </div>
    )
}