import React from "react";

const RenderInput = React.memo(({ outputConsole }) => {
  const [input, setInput] = React.useState("");

  const updateValue = React.useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const outputValue = React.useCallback(() => {
    input && outputConsole(input);
  }, [input, outputConsole]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter"
        value={input}
        onChange={updateValue}
      />
      <button onClick={outputValue}>Console</button>
    </div>
  );
});

export default RenderInput;
