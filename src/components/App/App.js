import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { queryClient } from "../../reactQuery";
import AppHeader from "../AppHeader/AppHeader";
import IndexPage from "../IndexPage/IndexPage";

export default function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AppHeader />
          <Routes>
            <Route path="/" element={<IndexPage />} />
          </Routes>
          <ReactQueryDevtools initialIsOpen={false} />
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
