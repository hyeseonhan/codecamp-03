import MainList from "../../../src/components/units/board/main/list/MainList.container";

export default function MainListPage(){
    return <MainList />
}





// import { Wrapper,
//         Header,
//         HeaderTitle,
//         CardPost,
//         CardImage,
//         Title,
//         CardBottom,
//         AvatarWrapper,
//         Avatar,
//         Info,
//         Writer,
//         CreatedAt,
//         Like,
//         LikeImage,
//         LikeCount,
//         MiddleWrapper,
//         SearchTitle,
//         SearchCreatedAt,
//         SearchButton
// } from "../../../styles/main";

// export default function MainListPage() {
//     return(
//         <Wrapper>
//             <HeaderTitle>베스트 게시글</HeaderTitle>
//                 <Header>
                    
//                     <CardPost>
//                         <CardImage src="/images/half.png" />
//                         <Title>게시물 제목입니다.</Title>
//                         <CardBottom>
//                             <AvatarWrapper>
//                                 <Info>
//                                     <Avatar src="/images/avatar.png"/>  
//                                     <Writer>노원두</Writer>
//                                 </Info>
//                                 <CreatedAt>Date : 2021.02.18</CreatedAt>
//                             </AvatarWrapper>
//                             <Like>
//                                 <LikeImage src="/images/thumb.png" />
//                                 <LikeCount>356</LikeCount>
//                             </Like>
//                         </CardBottom>                     
//                     </CardPost>
//                     <CardPost>
//                         <CardImage src="/images/half.png" />
//                         <Title>게시물 제목입니다.</Title>
//                         <CardBottom>
//                             <AvatarWrapper>
//                                 <Info>
//                                     <Avatar src="/images/avatar.png"/>  
//                                     <Writer>노원두</Writer>
//                                 </Info>
//                                 <CreatedAt>Date : 2021.02.18</CreatedAt>
//                             </AvatarWrapper>
//                             <Like>
//                                 <LikeImage src="/images/thumb.png" />
//                                 <LikeCount>356</LikeCount>
//                             </Like>
//                         </CardBottom>                     
//                     </CardPost>
//                     <CardPost>
//                         <CardImage src="/images/half.png" />
//                         <Title>게시물 제목입니다.</Title>
//                         <CardBottom>
//                             <AvatarWrapper>
//                                 <Info>
//                                     <Avatar src="/images/avatar.png"/>  
//                                     <Writer>노원두</Writer>
//                                 </Info>
//                                 <CreatedAt>Date : 2021.02.18</CreatedAt>
//                             </AvatarWrapper>
//                             <Like>
//                                 <LikeImage src="/images/thumb.png" />
//                                 <LikeCount>356</LikeCount>
//                             </Like>
//                         </CardBottom>                     
//                     </CardPost>
//                     <CardPost>
//                         <CardImage src="/images/half.png" />
//                         <Title>게시물 제목입니다.</Title>
//                         <CardBottom>
//                             <AvatarWrapper>
//                                 <Info>
//                                     <Avatar src="/images/avatar.png"/>  
//                                     <Writer>노원두</Writer>
//                                 </Info>
//                                 <CreatedAt>Date : 2021.02.18</CreatedAt>
//                             </AvatarWrapper>
//                             <Like>
//                                 <LikeImage src="/images/thumb.png" />
//                                 <LikeCount>356</LikeCount>
//                             </Like>
//                         </CardBottom>                     
//                     </CardPost>
//                 </Header>  
//             <MiddleWrapper>
//                 <SearchTitle name="searchtitle" placeholder="제목을 검색해주세요."/>
//                 <SearchCreatedAt name="searchcreatedat" placeholder="YYYY.MM.DD ~ YYYY.MM.DD"/>
//                 <SearchButton>검색하기</SearchButton>
//             </MiddleWrapper>    
//         </Wrapper>
//     )
// }