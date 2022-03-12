import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";

import { convertDate, convertUpdatedDate } from "../utils/utils";
import DocBox from "../components/MyDocs/DocBox";

describe("DocBox 렌더링 테스트", () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  const date = new Date().toISOString();

  it("#1. 기본 렌더링", () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <DocBox
            id="someId"
            title="docs title example"
            createdAt={date}
            updatedAt={date}
            summary="summary"
          />
        </QueryClientProvider>
      </MemoryRouter>
    );

    expect(screen.getByText("docs title example").toBeInTheDocument);
    expect(screen.getByText(convertDate(date)).toBeInTheDocument);
    expect(screen.getByText(convertUpdatedDate(date)).toBeInTheDocument);
    expect(screen.queryByText("summary")).toBeNull();
  });

  it("#2. Summary Open", () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <DocBox
            id="someId"
            title="docs title example"
            createdAt={date}
            updatedAt={date}
            summary="summary"
          />
        </QueryClientProvider>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByAltText("arrow"));

    expect(screen.getByText("summary").toBeInTheDocument);
  });

  it("#3. Summary가 없는 경우", () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <DocBox
            id="someId"
            title="docs title example"
            createdAt={date}
            updatedAt={date}
            summary=""
          />
        </QueryClientProvider>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByAltText("arrow"));

    expect(screen.getByText("작성된 내용이 없습니다.").toBeInTheDocument);
  });
});
