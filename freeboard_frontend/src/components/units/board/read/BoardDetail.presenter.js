import {Wrapper, WriterWrapper, WriterWrapperLeft, WriterWrapperRight,   
    ProfilImage, WriterDate, Location, Triangle, Address1, Address2, Icon, FileIcon, 
    MapIcon, Writer, Date, InputWrapper, Title, ContentsImage, Contents,Youtube, LikeWrapper, ButtonWrapper, Button, 
    Like, LikeImage, LikeCount, Dislike, DislikeImage, DislikeCount,} from "./BoardDetail.styles"
import '@fortawesome/fontawesome-free/js/all.js';    


export default function BoardReadUI(props){
    return(
        <Wrapper>
            <WriterWrapper>
                <WriterWrapperLeft>
                    <ProfilImage>
                    <i width="46.67" height="46.67" class="fas fa-user-circle fa-2x"></i>
                    </ProfilImage>
                    <WriterDate>
                        <Writer>{props.data&&props.data.fetchBoard.writer}</Writer>
                        <Date>Date : 2021.02.18</Date>
                    </WriterDate>
                </WriterWrapperLeft>
                <WriterWrapperRight>
                    <Location>
                        <Address1>서울특별 영등포구 양산로 200</Address1>
                        <Address2>(영등포동5가,영등포시장역)영등포 타임스퀘어 2층</Address2>
                    </Location>
                    <Triangle></Triangle>   
                    <Icon>
                        <FileIcon><i class="fas fa-infinity"></i></FileIcon>
                        <MapIcon><i class="fas fa-map-marker-alt"></i></MapIcon>
                    </Icon>
                </WriterWrapperRight>  
            </WriterWrapper>
            <InputWrapper>
                <Title>{props.data&&props.data.fetchBoard.title}</Title>
                <ContentsImage><img width="996" height="480" src="/images/posty.jpeg"/></ContentsImage>
                <Contents>{props.data&&props.data.fetchBoard.contents}</Contents>
            </InputWrapper>
            <Youtube>
            <iframe width="486" height="240" src="https://www.youtube.com/embed/ScWXi59imGI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Youtube>
            <LikeWrapper>
                <Like>
                    <LikeImage><i width="22" height="20" class="far fa-thumbs-up"></i></LikeImage>
                    <LikeCount>1920</LikeCount>
                </Like>
                <Dislike>
                    <DislikeImage><i width="22" height="20" class="far fa-thumbs-down"></i></DislikeImage>
                    <DislikeCount>1920</DislikeCount>
                </Dislike>
            </LikeWrapper>
            <ButtonWrapper>
                <Button onClick={props.onClickMoveToList}>목록으로</Button>
                <Button onClick={props.onClickMoveToEdit}>수정하러</Button>
                <Button onClick={props.onClickDelete}>삭제하기</Button>
            </ButtonWrapper>
        </Wrapper>

        
    )
}