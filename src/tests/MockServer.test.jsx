import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { rest } from "msw";
import { setupServer } from "msw/node";

import MockServer from "../targets/MockServer";

// モックサーバーの作成
const server = setupServer(
  rest.get("https://jsonplaceholder.typicode.com/users/1", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ username: "Bred dummy" }));
  })
);

// テストの前処理と後処理
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Mocking API", () => {
  it("[Fetch Success]Should display fetched data correctly and button disabled", async () => {
    // コンポーネントのレンダリング
    render(<MockServer />);
    // イベントの指定
    userEvent.click(screen.getByRole("button"));
    // 期待値の検証
    expect(await screen.findByRole("heading")).toHaveTextContent("Bred dummy");
    expect(screen.getByRole("button")).toHaveAttribute("disabled");
  });

  it("[Fetch Failure]Should display error msg, no render heading and button abled", async () => {
    // モックサーバーのエラーレスポンスの指定
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users/1",
        (req, res, ctx) => {
          return res(ctx.status(404));
        }
      )
    );
    // コンポーネントのレンダリング
    render(<MockServer />);
    // イベントの指定
    userEvent.click(screen.getByRole("button"));
    // 期待値の検証
    expect(await screen.findByTestId("error")).toHaveTextContent(
      "Fetching Failed!"
    );
    expect(screen.queryByRole("heading")).toBeNull();
    expect(screen.getByRole("button")).not.toHaveAttribute("disabled");
  });
});
