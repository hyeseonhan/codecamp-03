import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated.types";
import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent } from "react";

export interface ISearchbars01Props {
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  onChangeKeyword: (value: string) => void;
}

export interface ISearchbars0UI1Props {
  onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
}
