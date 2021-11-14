import {
  Wrapper,
  Header,
  HeaderTitle,
  CardPost,
  CardImage,
  CardNone,
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
  RowFirst,
  Row,
  ListTop,
  HeaderName,
  TitleName,
  ColumnBasic,
  ColumnTitle,
  Word,
  ListBottom,
  Footer,
  PageNumber,
  Fake,
  Page,
  LeftIcon,
  RightIcon,
  PostButton,
  PencilIcon,
} from "./Boardlist.styles";
import Searchbarcs01 from "../../../commons/searchbars/01/Searchbars01.container";
import { v4 as uuidv4 } from "uuid";

export default function BoardListUI(props) {
  return (
    <Wrapper>
      <HeaderTitle>BEST POST</HeaderTitle>
      <Header>
        {props.dataBoardsOfTheBest?.fetchBoardsOfTheBest.map((el) => (
          <CardPost key={el._id} id={el.id} onClick={props.onClickBest}>
            {el?.images[0] ? (
              <CardImage
                src={`https://storage.googleapis.com/${el.images[0]}`}
              />
            ) : (
              <CardNone>NO IMAGE</CardNone>
            )}

            {/* <Title>{el.title}</Title> */}
            <CardBottom>
              <Title>{el.title}</Title>
              <AvatarWrapper>
                <CreatedAt>{el.createdAt.slice(0, 10)}</CreatedAt>
                <Info>
                  <Avatar src="/images/avatar.png" />
                  <Writer>{el.writer}</Writer>
                </Info>
              </AvatarWrapper>
              <Like>
                <LikeImage src="/images/thumb.png" />
                <LikeCount>{el.likeCount}</LikeCount>
              </Like>
            </CardBottom>
          </CardPost>
        ))}
      </Header>
      <MiddleWrapper>
        {/* <SearchTitle
          name="title"
          type="text"
          placeholder="제목을 검색해주세요."
        /> */}
        <Searchbarcs01
          refetch={props.refetch}
          onChangeKeyword={props.onChangeKeyword}
        />
        <SearchCreatedAt
          name="searchcreatedat"
          type="text"
          placeholder="YYYY.MM.DD ~ YYYY.MM.DD"
        />
        <SearchButton>SEARCH</SearchButton>
      </MiddleWrapper>
      <BoardList>
        <ListTop />
        <RowFirst>
          <HeaderName>번호</HeaderName>
          <TitleName>제목</TitleName>
          <HeaderName>작성자</HeaderName>
          <HeaderName>날짜</HeaderName>
        </RowFirst>
        {props.data?.fetchBoards.map((el, index) => (
          <Row key={el._id} onClick={props.onClickMoveToBoardDetail}>
            <ColumnBasic>{10 - index}</ColumnBasic>
            <ColumnTitle id={el._id}>
              {el.title
                .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                .split("#$%")
                .map((el) => (
                  <Word key={uuidv4()} isMatched={props.keyword === el}>
                    {el}
                  </Word>
                ))}
            </ColumnTitle>
            <ColumnBasic>{el.writer}</ColumnBasic>
            <ColumnBasic>{el.createdAt.slice(0, 10)}</ColumnBasic>
          </Row>
        ))}
        <ListBottom />
      </BoardList>
      <Footer>
        <Fake>이건정렬맞추기위한구라</Fake>
        <PageNumber>
          <LeftIcon onClick={props.onClickPrevPage} src="/images/left.png" />
          {new Array(10).fill(1).map(
            (_, index) =>
              props.startPage + index <= props.lastPage && (
                <Page
                  key={props.startPage + index}
                  onClick={props.onClickPage}
                  id={String(props.startPage + index)}
                  current={props.startPage + index === props.current}
                >
                  {props.startPage + index}
                </Page>
              )
          )}
          <RightIcon onClick={props.onClickNextPage} src="/images/right.png" />
        </PageNumber>
        <PostButton onClick={props.onClickMoveToBoard}>
          <PencilIcon src="/images/pencil.png" />
          게시물 등록하기
        </PostButton>
      </Footer>
    </Wrapper>
  );
}
