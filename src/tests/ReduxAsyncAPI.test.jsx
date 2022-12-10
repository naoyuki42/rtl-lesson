import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { rest } from "msw";
import { setupServer } from "msw/node";

import customCounterSlice from "../features/customCounter/customCounterSlice";
import ReduxAsync from "../targets/ReduxAsync";

// モックサーバーの作成
const server = setupServer(
  rest.get("https://jsonplaceholder.typicode.com/users/1", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ username: "Bred Dummy" }));
  })
);

// テストの前処理と後処理
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Redux Async API Mocking Integration Test", () => {
  // 前処理の記述
  let testStore;
  beforeEach(() => {
    testStore = configureStore({
      reducer: {
        customCounter: customCounterSlice,
      },
    });
  });

  it("[Fetch Success]Should Display Username In h3 Tag", async () => {
    // コンポーネントのレンダリング
    render(
      <Provider store={testStore}>
        <ReduxAsync />
      </Provider>
    );
    // 期待値の検証
    expect(screen.queryByRole("heading")).toBeNull();
    // イベントの指定
    await userEvent.click(screen.getByText("FetchJson"));
    // 期待値の検証
    expect(await screen.findByText("Bred Dummy")).toBeInTheDocument();
  });

  it("[Fetch Failed]Should Display Anonymous In h3 Tag", async () => {
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
    render(
      <Provider store={testStore}>
        <ReduxAsync />
      </Provider>
    );
    // 期待値の検証
    expect(screen.queryByRole("heading")).toBeNull();
    // イベントの指定
    await userEvent.click(screen.getByText("FetchJson"));
    // 期待値の検証
    expect(await screen.findByText("anonymous")).toBeInTheDocument();
  });
});
