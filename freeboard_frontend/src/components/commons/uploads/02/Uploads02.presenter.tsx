import {
  Wrapper,
  Title,
  UploadWrapper,
  UploadDeliteButton,
  UploadImage,
  UploadButton,
} from "./Uploads02.styles";

export default function Uploads02UI(props) {
  return (
    <Wrapper>
      <Title>{props.name}</Title>
      <UploadWrapper>
        <UploadDeliteButton>
          <img src="/images/delite.png"></img>
        </UploadDeliteButton>
        <UploadImage type={props.type} {...props.register} />
      </UploadWrapper>
      <UploadButton>
        <>+</>
        <>Upload</>
      </UploadButton>
    </Wrapper>
  );
}
