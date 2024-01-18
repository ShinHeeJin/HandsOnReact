import React, { useContext } from "react";

type User = {
  id: number;
  name: string;
};

const UserContext = React.createContext<User | null>(null);

const GrandChild = () => {
  // 최 하위 컴포넌트에서 최상위 컴포넌트의 use를 가져올 수 있다.
  const user = useContext(UserContext);
  return user !== null ? <p>Hello, {user.name}</p> : <p>Hi</p>;
};

const Child = () => {
  const now = new Date();

  return (
    <div>
      <p>Current : {now.toLocaleString()}</p>
      <GrandChild />
    </div>
  );
};

const UseContextExampleParent = () => {
  const user: User = {
    id: 1,
    name: "홍길동",
  };

  return (
    <UserContext.Provider value={user}>
      <Child />
    </UserContext.Provider>
  );
};

export default UseContextExampleParent;
