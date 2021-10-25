import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* font-family: "LightBold"; */
  width: 100%;
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-left: 60px;
  /* border: 1px solid red; */
  margin-bottom: 300px;
`;

export const State = styled.div`
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  :hover {
    color: #f04237;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 30px;
`;
export const Info = styled.div`
  font-weight: 700;
  font-size: 20px;
  padding-bottom: 10px;
`;

export const InnerWrapper1 = styled.div`
  padding-left: 18px;
  border-left: 2px dotted black;
  margin-bottom: 30px;
`;

// const Name = styled.div``;

export const NameInfo = styled.div`
  font-size: 12px;
  padding-bottom: 10px;
`;

// const Email = styled.div``;

export const EmailInfo = styled.div`
  font-size: 12px;
  padding-bottom: 15px;
`;

export const InnerWrapper3 = styled.div`
  padding-left: 18px;
  border-left: 2px dotted black;
  margin-bottom: 30px;
`;

export const LogoutButton = styled.div`
  border: 1px solid black;
  font-size: 12px;
  font-weight: 600;
  width: 70px;
  padding-top: 2px;
  padding-bottom: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: #f04237;
  /* margin-bottom: 20px; */
`;

export const Avatar = styled.img`
  width: 70px;
  height: 70px;
  border: 1px solid black;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 70%;
`;

export const InnerLeftWrapper2 = styled.div`
  height: 115px;
  padding-left: 18px;
  border-left: 2px dotted black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PointInfo = styled.div`
  font-size: 12px;
  padding-left: 10px;
`;
