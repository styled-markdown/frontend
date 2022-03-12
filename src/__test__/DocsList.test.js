import React from "react";
import { render, screen } from "@testing-library/react";

import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";

import DocsList from "../components/MyDocs/DocsList";

describe("DocsList 테스트", () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  const date = new Date().toISOString();

  it("#1. 기본 렌더링", async () => {
    const docs = Array.from(Array(3), (element, index) => {
      return {
        _id: "docsId" + index,
        title: "docsTitle" + index,
        createdAt: date,
        updatedAt: date,
        summary: "docsSummary" + index,
      };
    });

    const data = {
      data: {
        docs: docs,
      },
    };

    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <DocsList data={data} />{" "}
        </QueryClientProvider>
      </MemoryRouter>
    );

    const items = await screen.findAllByText(/docsTitle[0-2]/);

    expect(items).toHaveLength(3);
  });

  it("#2. 데이터가 없는 경우", async () => {
    const data = {
      data: {
        docs: [],
      },
    };

    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <DocsList data={data} />
        </QueryClientProvider>
      </MemoryRouter>
    );

    expect(screen.getByText("생성된 문서가 없습니다.").toBeInDocument);
    expect(
      screen.getByPlaceholderText("문서 제목을 입력해주세요").toBeInDocument
    );
  });
});
