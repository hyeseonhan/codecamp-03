import { useState } from "react";

import {  Title, Wrapper, WriterWrpper, Label, Subject, Error, InputWrapper,
        Contents, ZipcodeWrapper, Zipcode, SearchButton, Address, ButtonWrapper,
        Youtube, UploadButton, OptionWrapper, RadioButton, RaidioLable, SubmitButton,
        ImageWrapper,
} from '../../../styles/boards_state';

         
export default function Boards_statePage (){
    const [title, setTitle] = useState('')
    const [contents, setContents] = useState('')

    const [titleError, setTitleError] = useState('')
    const [contentsError, setContentsError] = useState('')


    function onChangeTitle(event){
        setTitle(event.target.value)
        if(event.target.value !== ""){
            setTitleError("")
        }
    }

    function onChangeContents(event){
        setContents(event.target.value)
        if(event.target.value !== ""){
            setContentsError("")
        }
    }



    function onClickSubmit(){
        if(Title === ""){
            setTitleError("제목를 입력해주세요.")
        }
        if(Contents === ""){
            setContentsError("내용를을 입력해주세요.")
        }
        if(title !== "" && contents !== ""){
            alert('게시물을 등록합니다~')
        }
    }

    return (

        <Wrapper>
            <Title>게시판 등록</Title>
            <WriterWrpper>
                <InputWrapper>
                    <Label>제목</Label>
                    <Subject
                        name="title"
                        type="text"
                        placeholder="제목을 작성해주세요."
                        onChange={onChangeTitle}
                 />
                 <Error>{titleError}</Error>       
                </InputWrapper>
                <InputWrapper>
                    <Label>내용</Label>
                    <Contents
                        name="contents"
                        type="text"
                        placeholder="내용을 작성해줏제요."
                        onChange={onChangeContents}
                    />    
                </InputWrapper>
                <InputWrapper>
                    <Label>주소</Label>
                    <ZipcodeWrapper>
                        <Zipcode
                            name="zipcode"
                            placeholder="07250"
                        />
                    <SearchButton>우편번호 검색</SearchButton>
                    </ZipcodeWrapper>                   
                </InputWrapper>
                <Address />
                <Address />
                <InputWrapper>
                    <Label>유튜브</Label>
                    <Youtube
                        name="youtube"
                        placeholder="링크를 복사해주세요."
                    />    
                </InputWrapper>
                <ImageWrapper>
                    <Label>사진첨부</Label>
                    <UploadButton>
                        <div>+</div>
                        <div>Upload</div>
                    </UploadButton>
                    <UploadButton>
                        <div>+</div>
                        <div>Upload</div>
                    </UploadButton>
                    <UploadButton>
                        <div>+</div>
                        <div>Upload</div>
                    </UploadButton>
                </ImageWrapper>
                <OptionWrapper>
                    <Label>메인설정</Label>
                    <RadioButton type="radio" id="youtube" name="radio-button" />
                    <RaidioLable htmlFor="youtube">유튜브</RaidioLable>
                    <RadioButton type="radio" id="image" name="radio-button" />
                    <RaidioLable htmlFor="image">사진</RaidioLable>
                </OptionWrapper>
                <ButtonWrapper>
                    <SubmitButton onClick={onClickSubmit}>등록하기</SubmitButton>
                </ButtonWrapper>
            </WriterWrpper>
        </Wrapper>
    )

}


