export default function HelloLetPage() {

    function aaa(){
        let word = document.getElementById("aaa").innerText ="반갑습니다."
        document.getElementById("aaa").innerText = word
    }

    return(
        <>
            <button id="aaa" onClick ={aaa}>안녕하세요</button>
        </>
    )
}