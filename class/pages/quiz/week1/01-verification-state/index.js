import { useState } from "react";

export default function (){

    const [number, setRandom] = useState("000000")

    function aaa (){
        setRandom(String(Math.floor(Math.random()*1000000)).padStart(6,"0"))
    }

    return (
        <>
        <div id="number">{number}</div>
        <button onClick={aaa}>인증번호전송</button>
        </>
    )
}