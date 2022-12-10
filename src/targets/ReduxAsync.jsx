import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCustomCount,
  selectUsername,
  fetchDummy,
  fetchJson,
} from "../features/customCounter/customCounterSlice";

const ReduxAsync = React.memo(() => {
  const count = useSelector(selectCustomCount);
  const username = useSelector(selectUsername);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <span data-testid="count-value">{count}</span>
        <button onClick={() => dispatch(fetchDummy(5))}>FetchDummy</button>
      </div>
      <div>
        {username && <h1>{username}</h1>}
        <button onClick={() => dispatch(fetchJson())}>FetchJson</button>
      </div>
    </>
  );
});

export default ReduxAsync;
