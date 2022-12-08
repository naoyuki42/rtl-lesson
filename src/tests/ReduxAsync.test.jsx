import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import customCounterSlice from "../features/customCounter/customCounterSlice";
import ReduxAsync from "../targets/ReduxAsync";

describe("ReduxAsync Integration Test", () => {
  // 前処理の記述
  let testStore;
  beforeEach(() => {
    testStore = configureStore({
      reducer: {
        customCounter: customCounterSlice,
      },
    });
  });

  it("Should Display Value With 100 + Payload", async () => {
    // コンポーネントのレンダリング
    render(
      <Provider store={testStore}>
        <ReduxAsync />
      </Provider>
    );
    // イベントの指定
    await userEvent.click(screen.getByText("FetchDummy"));
    expect(await screen.findByTestId("count-value")).toHaveTextContent("105");
  });
});
