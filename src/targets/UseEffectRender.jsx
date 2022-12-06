import React from "react";
import axios from "axios";

const UseEffectRender = React.memo(() => {
  const [user, setUser] = React.useState(null);

  const fetchUser = React.useCallback(async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
    setUser(res);
  }, []);

  React.useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div>
      {user && (
        <p>
          I am {user.username} : {user.email}
        </p>
      )}
    </div>
  );
});

export default UseEffectRender;
