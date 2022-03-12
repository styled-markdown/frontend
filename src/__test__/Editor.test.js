import React from "react";
import { render, screen } from "@testing-library/react";

import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";

import Editor from "../components/Editor/Editor";

describe("Editor 렌더링 테스트", () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  it("#1. 기본 렌더링 - 일반 텍스트만 있는 경우", async () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Editor text={"test"} onChange={() => {}} />
        </QueryClientProvider>
      </MemoryRouter>
    );

    const items = await screen.findAllByText("test");

    expect(items).toHaveLength(2);
  });

  it("#2. 기본 렌더링 - 마크다운 헤딩 문법이 포함된 경우", async () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Editor text={"# Heading 1"} onChange={() => {}} />
        </QueryClientProvider>
      </MemoryRouter>
    );

    expect(screen.getByDisplayValue("# Heading 1").toBeInDocument);
    expect(screen.getByText("Heading 1").toBeInDocument);
  });

  it("#3. 강조 문법이 포함된 경우", async () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Editor text={"!!important!!"} onChange={() => {}} />
        </QueryClientProvider>
      </MemoryRouter>
    );

    expect(screen.getByDisplayValue("!!important!!").toBeInDocument);
    expect(screen.getByText("important").textContent).toBe("important");
    expect(screen.getByText("important").getAttribute("style")).toBeTruthy();
    expect(
      screen.getByText("important").getAttribute("style").includes("red")
    ).toBeTruthy();
  });

  it("#4. 컬러 문법이 포함된 경우", async () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Editor text={"This is %blue_blue%."} onChange={() => {}} />
        </QueryClientProvider>
      </MemoryRouter>
    );

    expect(screen.getByDisplayValue("This is %blue_blue%.").toBeInDocument);
    expect(screen.getByText("blue").getAttribute("style")).toBeTruthy();
    expect(
      screen.getByText("blue").getAttribute("style").includes("blue")
    ).toBeTruthy();
  });
});
