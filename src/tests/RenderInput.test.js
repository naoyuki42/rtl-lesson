import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RenderInput from "../targets/RenderInput";

describe("Rendering", () => {
  it("Should render all the elements correctly", () => {
    // コンポーネントのレンダリング
    render(<RenderInput />);
    // 期待値の検証
    expect(screen.getByRole("button")).toBeTruthy();
    expect(screen.getByPlaceholderText("Enter")).toBeTruthy();
  });
});

describe("Input Form onChange Event", () => {
  it("Shout update input value correctly", async () => {
    // コンポーネントのレンダリング
    render(<RenderInput />);
    // イベントの指定
    const inputValue = screen.getByPlaceholderText("Enter");
    await userEvent.type(inputValue, "test");
    // 期待値の検証
    expect(inputValue.value).toBe("test");
  });
});

describe("Console Button Conditionally Triggered", () => {
  it("Shout not trigger output function", async () => {
    // モックの作成
    const outputConsole = jest.fn();
    // コンポーネントのレンダリング
    render(<RenderInput outputConsole={outputConsole} />);
    // イベントの指定
    await userEvent.click(screen.getByRole("button"));
    // 期待値の検証
    expect(outputConsole).not.toHaveBeenCalled();
  });

  it("Should trigger output function", async () => {
    // モックの作成
    const outputConsole = jest.fn();
    // コンポーネントのレンダリング
    render(<RenderInput outputConsole={outputConsole} />);
    // イベントの指定
    const inputValue = screen.getByPlaceholderText("Enter");
    await userEvent.type(inputValue, "test");
    await userEvent.click(screen.getByRole("button"));
    // 期待値の検証
    expect(outputConsole).toHaveBeenCalledTimes(1);
  });
});
