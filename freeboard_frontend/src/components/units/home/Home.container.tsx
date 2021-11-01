import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_USED_ITEMS } from "./Home.queries";
import HomeUI from "./Home.presenter";

export default function Home() {
  const { data: Itemsdata } = useQuery(FETCH_USED_ITEMS, {
    variables: { page: 1 },
  });

  const { data: Boardsdata } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 },
  });

  return <HomeUI Itemsdata={Itemsdata} Boardsdata={Boardsdata} />;
}
