export default function VerificationLetPage () {

    function aaa() {
        let code = String( Math.floor(Math.random()*1000000)).padStart(6, "0");
        document.getElementById("number").innerText = code;
    }

    return(
        <>
            <div id="number">000000</div>
            <button onClick={aaa}>인증번호전송</button>
        </>
    )

}