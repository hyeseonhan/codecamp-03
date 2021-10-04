import {
  Wrapper,
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
import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.container";
import { v4 as uuidv4 } from "uuid";

export default function BoardListUI(props) {
  return (
    <Wrapper>
      <HeaderTitle>BEST POST</HeaderTitle>

      <MiddleWrapper>
        {/* <SearchTitle
          name="title"
          type="text"
          placeholder="제목을 검색해주세요."
        /> */}
        <Searchbars01
          refetch={props.refetch}
          onChangeKeyword={props.onChangeKeyword}
        />
        <SearchCreatedAt
          name="searchcreatedat"
          type="text"
          placeholder="YYYY.MM.DD ~ YYYY.MM.DD"
        />
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
        {/* <Row
            key={el._id}
            id={el._id}
            onClick={props.onClickMoveToBoardDetail}
          >
            <ColumnBasic
              id={el._id}
              onClickMoveToBoardDetail={props.onClickMoveToBoardDetail}
            >
              {10 - index}
            </ColumnBasic>
            <ColumnTitle
              id={el._id}
              onClickMoveToBoardDetail={props.onClickMoveToBoardDetail}
            >
              {" "}
              {el.title}{" "}
            </ColumnTitle>
            <ColumnBasic
              id={el._id}
              onClickMoveToBoardDetail={props.onClickMoveToBoardDetail}
            >
              {el.writer}
            </ColumnBasic>
            <ColumnBasic
              id={el._id}
              onClickMoveToBoardDetail={props.onClickMoveToBoardDetail}
            >
              {el.createdAt.slice(0, 10)}
            </ColumnBasic>
          </Row> */}

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
      <Header>
        {props.dataBoardsOfTheBest?.fetchBoardsOfTheBest.map((el) => (
          <CardPost key={el._id} id={el.id} onClick={props.onClickBest}>
            <CardImage src={`https://storage.googleapis.com/${el.images[0]}`} />
            <Title>{el.title}</Title>
            <CardBottom>
              <AvatarWrapper>
                <Info>
                  <Avatar src="/images/avatar.png" />
                  <Writer>{el.writer}</Writer>
                </Info>
                <CreatedAt>{el.createdAt.slice(0, 10)}</CreatedAt>
              </AvatarWrapper>
              <Like>
                <LikeImage src="/images/thumb.png" />
                <LikeCount>{el.likeCount}</LikeCount>
              </Like>
            </CardBottom>
          </CardPost>
        ))}
        {/* <CardPost>
          <CardImage src="/images/posty.jpeg" />
          <Title>게시물 제목입니다.</Title>
          <CardBottom>
            <AvatarWrapper>
              <Info>
                <Avatar src="/images/avatar.png" />
                <Writer>노원두</Writer>
              </Info>
              <CreatedAt>Date : 2021.02.18</CreatedAt>
            </AvatarWrapper>
            <Like>
              <LikeImage src="/images/thumb.png" />
              <LikeCount>356</LikeCount>
            </Like>
          </CardBottom>
        </CardPost> */}
      </Header>
    </Wrapper>
  );
}
