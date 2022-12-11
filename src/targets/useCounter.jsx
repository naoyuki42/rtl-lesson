import React from "react";

export const useCounter = (initialCount) => {
  const [count, setCount] = React.useState(initialCount);

  const increment = React.useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrement = React.useCallback(() => {
    setCount(count - 1);
  }, [count]);

  const double = React.useCallback(() => {
    setCount(count * 2);
  }, [count]);

  const triple = React.useCallback(() => {
    setCount(count * 3);
  }, [count]);

  const reset = React.useCallback(() => {
    setCount(0);
  }, []);

  return {
    count,
    increment,
    decrement,
    double,
    triple,
    reset,
  };
};
