import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../targets/useCounter";

describe("useCounter Custom Hook Test", () => {
  it("Should Initial Count", () => {
    // カスタムHookの取得
    const { result } = renderHook(() => useCounter(3));
    // 期待値の検証
    expect(result.current.count).toBe(3);
  });

  it("Should Increment By 1", () => {
    // カスタムHookの取得
    const { result } = renderHook(() => useCounter(3));
    // イベントの実行
    act(() => result.current.increment());
    // 期待値の検証
    expect(result.current.count).toBe(4);
  });

  it("Should Decrement By 1", () => {
    // カスタムHookの取得
    const { result } = renderHook(() => useCounter(3));
    // イベントの実行
    act(() => result.current.decrement());
    // 期待値の検証
    expect(result.current.count).toBe(2);
  });

  it("Should Increment By Double", () => {
    // カスタムHookの取得
    const { result } = renderHook(() => useCounter(3));
    // イベントの実行
    act(() => result.current.double());
    // 期待値の検証
    expect(result.current.count).toBe(6);
  });

  it("Should Increment By Triple", () => {
    // カスタムHookの取得
    const { result } = renderHook(() => useCounter(3));
    // イベントの実行
    act(() => result.current.triple());
    // 期待値の検証
    expect(result.current.count).toBe(9);
  });

  it("Should Reset Count", () => {
    // カスタムHookの取得
    const { result } = renderHook(() => useCounter(3));
    // イベントの実行
    act(() => result.current.reset());
    // 期待値の検証
    expect(result.current.count).toBe(0);
  });
});
