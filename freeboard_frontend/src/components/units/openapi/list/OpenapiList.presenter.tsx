import { Wrapper, InputWrapper, Search } from "./OpenapiList.styles";
import { IOpenapiListUIprops } from "./OpenapiList.types";
import ReactPlayer from "react-player";

export default function OpenapiListUI(props: IOpenapiListUIProps) {
  return (
    <>
      <Wrapper>
        <InputWrapper>
          <Search
            type="text"
            ref={props.inputRef}
            onChange={props.onChangeSearch}
          ></Search>
          {props.list &&
            props.list.documents.map((data) => (
              <ReactPlayer key={data} url={data.url} />
            ))}
        </InputWrapper>
      </Wrapper>
    </>
  );
}
