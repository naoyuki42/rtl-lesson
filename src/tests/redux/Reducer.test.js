import reducer, {
  increment,
  incrementByAmount,
} from "../../features/customCounter/customCounterSlice";

describe("Reducer of ReduxToolKit", () => {
  describe("Increment Action", () => {
    it("Should Increment By 1 With mode 0", () => {
      // 状態の設定
      const initialState = {
        mode: 0,
        value: 1,
      };
      const action = { type: increment.type };
      const state = reducer(initialState, action);
      // 期待値の検証
      expect(state.value).toEqual(2);
    });

    it("Should Increment By 100 With mode 1", () => {
      // 状態の設定
      const initialState = {
        mode: 1,
        value: 1,
      };
      const action = { type: increment.type };
      const state = reducer(initialState, action);
      // 期待値の検証
      expect(state.value).toEqual(101);
    });

    it("Should Increment By 10000 With mode 2", () => {
      // 状態の設定
      const initialState = {
        mode: 2,
        value: 1,
      };
      const action = { type: increment.type };
      const state = reducer(initialState, action);
      // 期待値の検証
      expect(state.value).toEqual(10001);
    });
  });

  describe("IncrementByAmount Action", () => {
    it("Should Increment By Payload With mode 0", () => {
      // 状態の設定
      const initialState = {
        mode: 0,
        value: 1,
      };
      const action = { type: incrementByAmount.type, payload: 3 };
      const state = reducer(initialState, action);
      // 期待値の検証
      expect(state.value).toEqual(4);
    });

    it("Should Increment By Payload * 100 With mode 1", () => {
      // 状態の設定
      const initialState = {
        mode: 1,
        value: 1,
      };
      const action = { type: incrementByAmount.type, payload: 3 };
      const state = reducer(initialState, action);
      // 期待値の検証
      expect(state.value).toEqual(301);
    });

    it("Should Increment By Payload * 10000 With mode 2", () => {
      // 状態の設定
      const initialState = {
        mode: 2,
        value: 1,
      };
      const action = { type: incrementByAmount.type, payload: 3 };
      const state = reducer(initialState, action);
      // 期待値の検証
      expect(state.value).toEqual(30001);
    });
  });
});
