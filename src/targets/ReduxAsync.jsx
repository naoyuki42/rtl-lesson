import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCustomCount,
  fetchDummy,
} from "../features/customCounter/customCounterSlice";

const ReduxAsync = React.memo(() => {
  const count = useSelector(selectCustomCount);
  const dispatch = useDispatch();

  return (
    <div>
      <span data-testid="count-value">{count}</span>
      <button onClick={() => dispatch(fetchDummy(5))}>FetchDummy</button>
    </div>
  );
});

export default ReduxAsync;
