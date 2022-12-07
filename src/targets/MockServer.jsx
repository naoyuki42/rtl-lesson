import React from "react";
import axios from "axios";

const MockServer = React.memo(() => {
  const [clicked, setClicked] = React.useState(false);
  const [userName, setUserName] = React.useState("");
  const [error, setError] = React.useState("");

  const fetchUser = React.useCallback(async () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => {
        const { username } = res.data;
        setUserName(username);
        setClicked(true);
      })
      .catch(() => {
        setError("Fetching Failed!");
      });
  }, []);

  const buttonText = clicked ? "Loaded" : "Start Fetch";

  return (
    <div>
      <button onClick={fetchUser} disabled={clicked}>
        {buttonText}
      </button>
      {userName && <h3>{userName}</h3>}
      {error && <p data-testid="error">{error}</p>}
    </div>
  );
});

export default MockServer;
