import { useQuery } from "@apollo/client";
import MainListUI from "./MainList.presenter";
import { FETCH_BOARDS } from "./Mainlist.queries";

export default function MainList(){
   
    const { data } = useQuery(FETCH_BOARDS)

    return (
        <MainListUI data={data} />
    );
}