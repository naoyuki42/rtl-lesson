import React from "react";

const FrameworkList = React.memo(({ frameworks }) => {
  return !frameworks || !frameworks.length ? (
    <div>
      <p>No Data!</p>
    </div>
  ) : (
    <div>
      <ul>
        {frameworks.map(({ id, item }) => {
          return <li key={id}>{item}</li>;
        })}
      </ul>
    </div>
  );
});

export default FrameworkList;
