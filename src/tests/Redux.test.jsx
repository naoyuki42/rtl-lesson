import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import customCounterSlice from "../features/customCounter/customCounterSlice";
import Redux from "../targets/Redux";

describe("Redux Integration Test", () => {
  // 前処理の記述
  let testStore;
  beforeEach(() => {
    testStore = configureStore({
      reducer: {
        customCounter: customCounterSlice,
      },
    });
  });

  it("Should Display Value With Increment By 1 Per Click", async () => {
    // コンポーネントのレンダリング
    render(
      <Provider store={testStore}>
        <Redux />
      </Provider>
    );
    // イベントの指定
    await userEvent.click(screen.getByText("+"));
    await userEvent.click(screen.getByText("+"));
    await userEvent.click(screen.getByText("+"));
    // 期待値の検証
    expect(screen.getByTestId("count-value")).toHaveTextContent(3);
  });

  it("Should Display Value With Decrement By 1 Per Click", async () => {
    // コンポーネントのレンダリング
    render(
      <Provider store={testStore}>
        <Redux />
      </Provider>
    );
    // イベントの指定
    await userEvent.click(screen.getByText("-"));
    await userEvent.click(screen.getByText("-"));
    await userEvent.click(screen.getByText("-"));
    await userEvent.click(screen.getByText("-"));
    await userEvent.click(screen.getByText("-"));
    // 期待値の検証
    expect(screen.getByTestId("count-value")).toHaveTextContent(-5);
  });

  it("Should Display Value With Increment By Input Number Per Click", async () => {
    // コンポーネントのレンダリング
    render(
      <Provider store={testStore}>
        <Redux />
      </Provider>
    );
    // イベントの指定
    await userEvent.type(screen.getByPlaceholderText("Enter"), "30");
    await userEvent.click(screen.getByTestId("count-input-value"));
    // 期待値の検証
    expect(screen.getByTestId("count-value")).toHaveTextContent(30);
    expect(screen.getByTestId("count-input-value")).toHaveTextContent("30");
  });

  it("Should Not Increment By Input Text Per Click", async () => {
    // コンポーネントのレンダリング
    render(
      <Provider store={testStore}>
        <Redux />
      </Provider>
    );
    // イベントの指定
    await userEvent.type(screen.getByPlaceholderText("Enter"), "Test");
    await userEvent.click(screen.getByTestId("count-input-value"));
    // 期待値の検証
    expect(screen.getByTestId("count-value")).toHaveTextContent(0);
    expect(screen.getByTestId("count-input-value")).toHaveTextContent("Test");
  });
});
