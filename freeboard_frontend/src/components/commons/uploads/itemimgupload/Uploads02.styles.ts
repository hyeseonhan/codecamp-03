import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.div`
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 23.68px;
`;

export const UploadWrapper = styled.div`
  width: 180px;
  height: 180px;
  margin-right: 20px;
  border: 1px solid black;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const UploadDeliteButton = styled.div`
  width: 14px;
  height: 14px;
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 5px 3px 3px 0px;
`;

export const UploadImage = styled.img`
  width: 140px;
  height: 140px;
  margin-right: 18px;
`;

export const UploadButton = styled.button`
  width: 180px;
  height: 180px;
  border: none;
  font-weight: 500;
  font-style: normal;
  font-size: 16px;
  line-height: 23.68px; ;
`;

export const UploadFileHidden = styled.input`
  display: none;
`;
