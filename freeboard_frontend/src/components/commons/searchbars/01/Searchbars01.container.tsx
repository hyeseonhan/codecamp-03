import Searcchbars01UI from "./Searchbars01.presenter";
import _ from "lodash";
import { ISearchbars01Props } from "./Searchbars01.types";
import { ChangeEvent } from "react";

export default function Searchbars01(props: ISearchbars01Props) {
  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data });
    props.onChangeKeyword(data);
  }, 200);

  function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
  }

  return <Searcchbars01UI onChangeSearchbar={onChangeSearchbar} />;
}
