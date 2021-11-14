import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  padding-top: 80px;
`;

export const Header = styled.div`
  width: 100%;
  height: 302px;
  border: 1px solid black;
  display: flex;
  background-color: black;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const HeaderTitle = styled.div`
  width: 100%px;
  display: flex;
  justify-content: center;
  font-size: 36px;
  font-weight: 700;
  line-height: 42.19px;
  font-family: "LightBold";
  margin-bottom: 20px;
`;

export const CardPost = styled.div`
  width: 242px;
  /* height: 257px; */
  height: 242px;
  border: 1px solid black;
  border-radius: 180px;
  border: none;
  /* box-shadow: 0px 0px 8px gray; */
`;

export const CardImage = styled.img`
  width: 242px;
  height: 121px;
  border-top-left-radius: 180px;
  border-top-right-radius: 180px;
  /* border: 3px solid black; */
  border-bottom: 3px solid black;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;

export const CardNone = styled.div`
  width: 242px;
  height: 121px;
  border-top-left-radius: 180px;
  border-top-right-radius: 180px;
  border-bottom: 3px solid black;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  /* color: white; */
  background-color: white;
  font-size: 30px;
  font-weight: 700;
  font-family: "LightBold";
  padding-top: 28px;
`;

export const Title = styled.div`
  text-align: center;
  width: 160px;
  font-size: 18px;
  font-weight: 500;
  line-height: 26.64px;
  padding-top: 11px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardBottom = styled.div`
  height: 121px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  border-bottom-left-radius: 180px;
  border-bottom-right-radius: 180px;
  border-top: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
`;

export const Avatar = styled.img`
  margin-right: 6px;
  width: 20px;
  height: 20px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: center;
`;

export const Writer = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 23.68px;
`;

export const CreatedAt = styled.div`
  font-size: 12px;
  font-weight: 400;
  /* padding-top: 8px; */
  color: #828282;
  padding-bottom: 10px;
`;

export const Like = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LikeImage = styled.img`
  padding-bottom: 2px;
  margin-right: 4px;
  width: 17px;
  height: 17px;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
`;

export const LikeCount = styled.div`
  font-size: 16px;
`;

export const MiddleWrapper = styled.div`
  padding-top: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SearchTitle = styled.div`
  border: 1px solid #f2f2f2;
  width: 776px;
  height: 52px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 10px;
`;

export const SearchCreatedAt = styled.input`
  border: 1px solid #bdbdbd;
  width: 244px;
  height: 52px;
  padding: 25px;
  border-radius: 15px;
  border: 2px solid black;
  /* border: none;
  box-shadow: 0px 0px 5px black; */

  outline: none;
  margin: 0px 20px;
  /* box-shadow: 0px 0px 5px black; */
  ::placeholder {
    color: black;
    font-weight: 600;
    font-family: "LightBold";
  }
`;

export const SearchButton = styled.div`
  width: 94px;
  height: 52px;
  background-color: black;
  border: none;
  border-radius: 10px;
  color: white;
  /* font-size: 16px; */
  font-weight: 500;
  line-height: 23.68px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoardList = styled.div`
  width: 1200px;
  height: 583px;
  margin-top: 60px;
`;

export const RowFirst = styled.div`
  display: flex;
  height: 52px;
  line-height: 52px;
  border-bottom: 3px solid black;
  cursor: pointer;
  font-weight: 700;
  color: #f04237;
  /* :hover {
    background-color: black;
    color: white;
  } */
`;

export const Row = styled.div`
  display: flex;
  /* flex-direction: row; */
  height: 52px;
  line-height: 52px;
  /* border-bottom: 1px solid #bdbdbd; */
  border-bottom: 2px solid black;
  cursor: pointer;

  :hover {
    background-color: black;
    color: white;
  }
`;

export const ListTop = styled.div`
  border-top: 3px solid black;
`;

export const HeaderName = styled.div`
  width: 10%;
  text-align: center;
`;

export const TitleName = styled.div`
  width: 70%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;

  /* :hover {
    background-color: black;
    color: white;
  } */
`;

export const ListBottom = styled.div`
  /* border-top: 2px solid gray; */
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;
`;

export const PageNumber = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Fake = styled.div`
  color: white;
`;

export const Page = styled.div`
  padding-right: 20px;
  cursor: pointer;
  color: ${(props) => (props.current === true ? "#f04237" : "black")};
`;

export const LeftIcon = styled.img`
  padding-right: 28.59px;
  cursor: pointer;
`;

export const RightIcon = styled.img`
  padding-left: 8.59px;
  cursor: pointer;
`;

export const PostButton = styled.div`
  width: 171px;
  height: 52px;
  background-color: black;
  color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  border: 1px solid #f2f2f2;
`;

export const PencilIcon = styled.img`
  filter: invert(100%);
  -webkit-filter: invert(100%);
`;

export const Word = styled.span`
  color: ${(props) => props.isMatched && "red"};
`;
