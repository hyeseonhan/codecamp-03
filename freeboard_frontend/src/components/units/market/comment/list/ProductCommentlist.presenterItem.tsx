import {
  Wrapper,
  Avatar,
  InnerWrapper,
  InfoWrapper,
  Writer,
  Content,
  Date,
  Reply,
} from "./ProductCommentlist.styles";

export default function ProductCommentListUIItem(props) {
  return (
    <Wrapper>
      <InnerWrapper>
        <Avatar src="/images/avatar.png" />
        <InfoWrapper>
          <Writer>{props.el?.user?.name}</Writer>
          <Content>{props.el?.contents}</Content>
          <Date>{props.el?.createdAt.slice(0, 10)}</Date>
        </InfoWrapper>
      </InnerWrapper>
      <Reply src="/images/reply.png" />
    </Wrapper>
  );
}
