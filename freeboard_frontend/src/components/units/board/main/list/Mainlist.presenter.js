import { Wrapper,
    Header,
    HeaderTitle,
    CardPost,
    CardImage,
    Title,
    CardBottom,
    AvatarWrapper,
    Avatar,
    Info,
    Writer,
    CreatedAt,
    Like,
    LikeImage,
    LikeCount,
    MiddleWrapper,
    SearchTitle,
    SearchCreatedAt,
    SearchButton,
    BoardList,
    Row,
    ListTop,
    HeaderName,
    TitleName,
    ColumnBasic,
    ColumnTitle,
    ListBottom,
} from "../list/Mainlist.styles";


export default function MainListUI(props) {
    return(
        <Wrapper>
            <HeaderTitle>베스트 게시글</HeaderTitle>
                <Header>                  
                    <CardPost>
                        <CardImage src="/images/half.png" />
                        <Title>게시물 제목입니다.</Title>
                        <CardBottom>
                            <AvatarWrapper>
                                <Info>
                                    <Avatar src="/images/avatar.png"/>  
                                    <Writer>노원두</Writer>
                                </Info>
                                <CreatedAt>Date : 2021.02.18</CreatedAt>
                            </AvatarWrapper>
                            <Like>
                                <LikeImage src="/images/thumb.png" />
                                <LikeCount>356</LikeCount>
                            </Like>
                        </CardBottom>                     
                    </CardPost>
                    <CardPost>
                        <CardImage src="/images/half.png" />
                        <Title>게시물 제목입니다.</Title>
                        <CardBottom>
                            <AvatarWrapper>
                                <Info>
                                    <Avatar src="/images/avatar.png"/>  
                                    <Writer>노원두</Writer>
                                </Info>
                                <CreatedAt>Date : 2021.02.18</CreatedAt>
                            </AvatarWrapper>
                            <Like>
                                <LikeImage src="/images/thumb.png" />
                                <LikeCount>356</LikeCount>
                            </Like>
                        </CardBottom>                     
                    </CardPost>
                    <CardPost>
                        <CardImage src="/images/half.png" />
                        <Title>게시물 제목입니다.</Title>
                        <CardBottom>
                            <AvatarWrapper>
                                <Info>
                                    <Avatar src="/images/avatar.png"/>  
                                    <Writer>노원두</Writer>
                                </Info>
                                <CreatedAt>Date : 2021.02.18</CreatedAt>
                            </AvatarWrapper>
                            <Like>
                                <LikeImage src="/images/thumb.png" />
                                <LikeCount>356</LikeCount>
                            </Like>
                        </CardBottom>                     
                    </CardPost>
                    <CardPost>
                        <CardImage src="/images/half.png" />
                        <Title>게시물 제목입니다.</Title>
                        <CardBottom>
                            <AvatarWrapper>
                                <Info>
                                    <Avatar src="/images/avatar.png"/>  
                                    <Writer>노원두</Writer>
                                </Info>
                                <CreatedAt>Date : 2021.02.18</CreatedAt>
                            </AvatarWrapper>
                            <Like>
                                <LikeImage src="/images/thumb.png" />
                                <LikeCount>356</LikeCount>
                            </Like>
                        </CardBottom>                     
                    </CardPost>
                </Header>  
            <MiddleWrapper>
                <SearchTitle type="text" placeholder="제목을 검색해주세요."/>
                <SearchCreatedAt name="searchcreatedat" placeholder="YYYY.MM.DD ~ YYYY.MM.DD"/>
                <SearchButton>검색하기</SearchButton>
            </MiddleWrapper>
            <BoardList>
                <ListTop />
                <Row>    
                    <HeaderName>번호</HeaderName>
                    <TitleName>제목</TitleName>
                    <HeaderName>작성자</HeaderName>
                    <HeaderName>날짜</HeaderName>
                </Row>
                {props.data?.fetchBoards.map((el, index) =>(
                    <Row key={el._id}>
                        <ColumnBasic>{10 - index}</ColumnBasic>
                        <ColumnTitle>{el.title}</ColumnTitle>
                        <ColumnBasic>{el.writer}</ColumnBasic>
                        <ColumnBasic>{el.createdAt}</ColumnBasic>
                    </Row>
                ))}
                <ListBottom />
            </BoardList>    
        </Wrapper>
    )
}