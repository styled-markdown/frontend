import React from "react";
import { useQuery } from "react-query";

import { getDocsApi } from "../../api";
import DocsList from "./DocsList";
import Loading from "../Loading/Loading";
import ErrorPage from "../ErrorPage/ErrorPage";

export default function MyDocs() {
  const { data, isLoading, isSuccess, isError } = useQuery(
    "docsList",
    getDocsApi,
    { retry: 1 }
  );

  return (
    <>
      {isLoading && <Loading />}
      {isError && <ErrorPage />}
      {isSuccess && <DocsList data={data} />}
    </>
  );
}
