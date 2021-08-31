export default function HellowLetPage(){


    function zzz(){
        document.getElementById("aaa").innerText = "반갑습니다."
        document.getElementById("aaa").innerText = "반갑습니다."
        document.getElementById("aaa").innerText = "반갑습니다."
        document.getElementById("aaa").innerText = "반갑습니다."
    }

    return(
        <div>
        <button id="aaa" onClick = {zzz}>안녕하세요</button>
        <button id="aaa" onClick = {zzz}>안녕하세요</button>
        <button id="aaa" onClick = {zzz}>안녕하세요</button>
        <button id="aaa" onClick = {zzz}>안녕하세요</button>
        </div>
    )

}