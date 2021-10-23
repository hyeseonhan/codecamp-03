import {
  Wrapper,
  SearchWrapper,
  InnerWrapper,
  SearchButton,
} from "./Searchbar02.styles";

export default function SearchbarUI() {
  return (
    <Wrapper>
      <SearchWrapper>
        <InnerWrapper placeholder="SEARCH WHAT YOU NEED" />
      </SearchWrapper>
      <SearchButton>SEARCH</SearchButton>
    </Wrapper>
  );
}
