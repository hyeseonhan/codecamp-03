import styled from '@emotion/styled'

interface IButtonProps {
    qqq: boolean
}


export const MyButton = styled.button`
    background-color: ${(props: IButtonProps)=>(props.qqq === true ? 'yellow' : 'gray')} ;
    
`

interface ITitleProps {
    zzz: boolean
}

export const Title = styled.h1`
    color: ${(props: ITitleProps)=>(props.zzz === true ? 'red' : 'yellow')} ;
`



// props = 객체. props 를 타입스크립트로 만들어줘야한다.
// 타입스크립트에서 정의가 되어있지 않기 때문에.
// props에 zzz, qqq 가 있다고 알려줘야한다. (interface)
// zzz에 boolean 이 아닌 다름 값을 넣으면 에러 발생