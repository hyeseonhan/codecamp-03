import { Searchbar, SearchbarInput } from "./Searchbars01.styles";

export default function Searcchbars01UI(props) {
  return (
    <>
      <Searchbar>
        <SearchbarInput
          placeholder="SEARCH THE TITLE"
          onChange={props.onChangeSearchbar}
        ></SearchbarInput>
      </Searchbar>
    </>
  );
}
