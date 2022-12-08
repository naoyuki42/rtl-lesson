import reducer, {
  fetchDummy,
} from "../../features/customCounter/customCounterSlice";

describe("ExtraReducers", () => {
  // 初期状態の設定
  const initialState = {
    value: 0,
  };

  it("Should Output 100 + Payload When Fulfilled", async () => {
    // 状態の設定
    const action = { type: fetchDummy.fulfilled.type, payload: 5 };
    const state = reducer(initialState, action);
    // 期待値の検証
    expect(state.value).toEqual(105);
  });

  it("Should Output 100 - Payload When Rejected", async () => {
    // 状態の設定
    const action = { type: fetchDummy.rejected.type, payload: 5 };
    const state = reducer(initialState, action);
    // 期待値の検証
    expect(state.value).toEqual(95);
  });
});
