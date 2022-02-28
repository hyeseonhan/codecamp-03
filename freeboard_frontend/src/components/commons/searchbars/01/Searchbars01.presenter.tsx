import { Searchbar, SearchbarInput } from "./Searchbars01.styles";
import { ISearchbars0UI1Props } from "./Searchbars01.types";

export default function Searcchbars01UI(props: ISearchbars0UI1Props) {
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
