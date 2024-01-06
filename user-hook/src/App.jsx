import { useFetchUsers } from "./hooks/useFetchUsers";

export const App = () => {
  const { userList, isLoading, isError, onClickFetchUser } = useFetchUsers();

  return (
    <div>
      <button onClick={onClickFetchUser}>사용자 정보 얻기</button>
      {isError && <p style={{ color: "red" }}>에러가 발생했습니다.</p>}
      {isLoading ? (
        <p>데이터를 얻고 있습니다.</p>
      ) : (
        userList.map((user) => (
          <p key={user.id}>{`${user.id} : ${user.name}(${user.age})세`}</p>
        ))
      )}
    </div>
  );
};
