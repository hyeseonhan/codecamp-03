import Searcchbars01UI from "./Searchbars01.presenter";
import _ from "lodash";

export default function Searchbars01(props) {
  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data });
    props.onChangeKeyword(data);
  }, 200);

  function onChangeSearchbar(event) {
    getDebounce(event.target.value);
  }

  return <Searcchbars01UI onChangeSearchbar={onChangeSearchbar} />;
}
