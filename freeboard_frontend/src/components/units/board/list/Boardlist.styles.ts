import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import { IBoardListEmotion } from "./Boardlist.types";

export const Wrapper = styled.div`
  width: 1200px;

  @media ${breakPoints.mobile} {
    width: 667px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background-color: green; */
  }

  @media ${breakPoints.phone} {
    width: 375px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: blue; */
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 302px;
  /* border: 1px solid black; */
  display: flex;
  /* background-color: black; */
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

export const MiddleWrapper = styled.div`
  padding-top: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 20px;
    /* background-color: green; */
  }

  @media ${breakPoints.phone} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 20px;
  }
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

  @media ${breakPoints.mobile} {
    display: none;
  }

  @media ${breakPoints.phone} {
    display: none;
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

  @media ${breakPoints.mobile} {
    display: none;
  }

  @media ${breakPoints.phone} {
    display: none;
  }
`;

export const BoardList = styled.div`
  width: 100%;
  height: 583px;
  margin-top: 50px;

  @media ${breakPoints.mobile} {
    /* display: initial; */
    width: 667px;
    height: 483px;
    /* background-color: green; */
  }

  @media ${breakPoints.phone} {
    width: 355px;
    height: 370px;
    margin-top: 50px;
  }
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

  @media ${breakPoints.mobile} {
    height: 42px;
    line-height: 42px;
  }

  @media ${breakPoints.phone} {
    height: 32px;
    line-height: 32px;
  }
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

  @media ${breakPoints.mobile} {
    height: 42px;
    line-height: 42px;
  }

  @media ${breakPoints.phone} {
    height: 32px;
    line-height: 32px;
  }
`;

export const ListTop = styled.div`
  border-top: 3px solid black;
`;

export const HeaderName = styled.div`
  width: 10%;
  text-align: center;

  @media ${breakPoints.mobile} {
    width: 20%;
  }

  @media ${breakPoints.phone} {
    display: none;
  }
`;

export const HeaderWriter = styled.div`
  width: 10%;
  text-align: center;

  @media ${breakPoints.mobile} {
    width: 20%;
  }

  @media ${breakPoints.phone} {
    width: 15%;
  }
`;

export const TitleName = styled.div`
  width: 70%;
  text-align: center;

  @media ${breakPoints.mobile} {
    width: 50%;
  }
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;

  @media ${breakPoints.mobile} {
    width: 20%;
  }

  @media ${breakPoints.phone} {
    display: none;
  }
`;

export const ColumnWriter = styled.div`
  width: 10%;
  text-align: center;

  @media ${breakPoints.mobile} {
    width: 20%;
  }

  @media ${breakPoints.phone} {
    width: 15%;
  }
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;

  /* :hover {
    background-color: black;
    color: white;
  } */

  @media ${breakPoints.mobile} {
    width: 50%;
  }
`;

export const ListBottom = styled.div`
  /* border-top: 2px solid gray; */
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;

  @media ${breakPoints.mobile} {
    width: 100%;
    padding-top: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media ${breakPoints.phone} {
    width: 100%;
    padding-top: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PageNumber = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media ${breakPoints.mobile} {
    order: 2;
  }

  @media ${breakPoints.phone} {
    order: 2;
  }
`;

export const Fake = styled.div`
  color: white;

  @media ${breakPoints.mobile} {
    display: none;
  }

  @media ${breakPoints.phone} {
    display: none;
  }
`;

export const Page = styled.div`
  padding-right: 20px;
  cursor: pointer;
  color: ${(props: IBoardListEmotion) =>
    props.current === true ? "#f04237" : "black"};
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

  @media ${breakPoints.mobile} {
    order: 1;
    width: 130px;
    height: 26px;
    border-radius: 10px;
    font-size: 10px;
    /* margin-left: 300px; */
    margin-bottom: 10px;
  }

  @media ${breakPoints.phone} {
    order: 1;
    width: 110px;
    height: 26px;
    border-radius: 10px;
    font-size: 10px;
    /* margin-left: 300px; */
    margin-bottom: 8px;
  }
`;

export const PencilIcon = styled.img`
  filter: invert(100%);
  -webkit-filter: invert(100%);

  @media ${breakPoints.mobile} {
    width: 13px;
    height: 13px;
  }

  @media ${breakPoints.phone} {
    display: none;
  }
`;

export const Word = styled.span`
  color: ${(props: IBoardListEmotion) => props.isMatched && "red"};
`;
