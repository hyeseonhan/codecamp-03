import { Wrapper, InputWrapper, Search, Youtube } from "./OpenapiList.styles";
import { IOpenapiListUIprops } from "./OpenapiList.types";

export default function OpenapiListUI(props: IOpenapiListUIProps) {
  return (
    <>
      <Wrapper>
        <Search
          type="text"
          ref={props.inputRef}
          onChange={props.onChangeSearch}
        ></Search>
        <InputWrapper>
          {props.list &&
            props.list.documents.map((data) => (
              <>
                <Youtube key={data} url={data.url} width={486} height={240} />
              </>
            ))}
        </InputWrapper>
      </Wrapper>
    </>
  );
}
