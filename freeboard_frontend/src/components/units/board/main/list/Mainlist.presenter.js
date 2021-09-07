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
    Column,
    ListName,
    Name
    
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
                <SearchTitle name="searchtitle" placeholder="제목을 검색해주세요."/>
                <SearchCreatedAt name="searchcreatedat" placeholder="YYYY.MM.DD ~ YYYY.MM.DD"/>
                <SearchButton>검색하기</SearchButton>
            </MiddleWrapper>
            <ListName>
            </ListName>
            <BoardList>
                {props.data?.fetchBoards.map((el, index) =>(
                    
                    <Row key={el._id}>
                        <Column>{index}</Column>
                        <Column>{el.title}</Column>
                        <Column>{el.writer}</Column>
                        <Column>{el.createdAt}</Column>
                    </Row>
                    
                ))}
            </BoardList>    
        </Wrapper>
    )
}