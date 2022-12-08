import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCustomCount,
  increment,
  decrement,
  incrementByAmount,
} from "../features/customCounter/customCounterSlice";

const Redux = React.memo(() => {
  const [number, setNumber] = React.useState(0);

  const count = useSelector(selectCustomCount);
  const dispatch = useDispatch();

  const changeNumber = React.useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  return (
    <div>
      <h3>Redux Integration Test</h3>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <span data-testid="count-value">{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button
          data-testid="count-input-value"
          onClick={() => dispatch(incrementByAmount(number | 0))}
        >
          ＋{number}
        </button>
        <input type="text" placeholder="Enter" onChange={changeNumber} />
      </div>
    </div>
  );
});

export default Redux;
