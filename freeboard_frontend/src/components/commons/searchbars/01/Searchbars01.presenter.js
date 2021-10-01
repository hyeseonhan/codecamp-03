import { Searchbar, SearchbarInput } from "./Searchbars01.styles";

export default function Searcchbars01UI(props) {
  return (
    <>
      <Searchbar>
        <SearchbarInput
          placeholder="제목을 검색해주세요."
          onChange={props.onChangeSearchbar}
        ></SearchbarInput>
      </Searchbar>
    </>
  );
}
