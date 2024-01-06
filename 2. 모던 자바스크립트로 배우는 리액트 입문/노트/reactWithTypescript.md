## 타입스크립트 기본

- 타입스크립트를 이용하면 유지보수성과 개발 효율성이 높아진다. 리액트와 조합하는 방법을 알아본다.
- 타입스크립트는 마이크로소프트가 개발안 오픈소스 언어이다.
- 자바스크립트에서 타입을 다루도록 한것이며 자바스트립트의 슈퍼셋이라 자바스크립트 문법과 표기법을 그대로 사용할 수 있다.
- 타입지정으로 의도하지 않은 값으로 인한 버그를 방지하고 편집기의 유용한 기능을통해 DX를 향상시킨다.
- 확장자 변경 : js -> ts, jsx -> tsx
- 타입스크립트 프로젝트 옵션
  ```bash
  npx create-react-app [프로젝트명] --template typescript
  ```

### 변수 선언예시

```typescript
let str: string = "A";
let num: number = 0;
let bool: boolean = true;
const array: Array<number> = [0, 1, 2];
array.push("10"); // NG

let null1: null = null;
let undefined1: undefined = undefined;
undefined1 = 10; // NG
```

### 기타 타입지정

```typescript
// 함수
const funcA = (num: number): void => {
  console.log(num);
};

// 객체
const obj: { str: string; num: number } = {
  str: "A",
  num: 10,
};
obj.str = 10; // NG

// intersection (교차) 타입
const obj: { str: string } & { num: number } = {
  str: "A",
  num: 10,
};
type A = {
  str: string;
  num: number;
};
type B = {
  str: string;
  bool: boolean;
};
type C = A & B;
const obj: C = {
  str: "A",
  num: 10,
  bool: false,
};

//union  타입
let val1: string | number = "";
val1 = "A"; // OK
val1 = 10; // OK
val1 = []; // NG
```

## Generic

```typescript
type CustomType<T> = {
  customValue: T;
};

const test: CustomType<string> = { customValue: "test" }; // OK
const test: CustomType<string> = { customValue: 10 }; // NG
const [str, setStr] = useState<string>("");
setStr(10); // NG
```

## tsconfig

프로젝트마다 다양한 설정을 커스터마이즈할 수 있다.
https://www.typescriptlang.org/ko/tsconfig

- strict 옵션의 경우 기존 javascript 프로젝트를 typescript로 바꿀 때 갑자기 true로 설정하면 수많은 에러가 발생한다. 먼저 false로 두고 하나씩 대응하면서 최종적으로 true 변경하자.

## Typescript 예시

### API획득 데이터 타입 정의

아래처럼 타입을 정의하면 편집기에서 user.nama 등의 오카에 대한 에러가 표시될 수 있다. 물론 컴파일할 때도 에러가 발생한다. 자바스크립트였다면 런타입에서밖에 user.nama에 대한 에러를 발견했을 것이다. 특히 API는 기본적으로 어떤 데이터를 얻었는지 알 수 없으므로 사전에 타입을 정의해두면 더욱 안전하게 개발할 수 있는 것이다. -> 백엔드와 프론트팀에서 API의 인식을 맞출 수 있다.

```javascript
import { useEffect, useState } from "react";
import { ListItem } from "./component/ListItem";
import axios from "axios";

type UserType = {
  id: number,
  name: string,
  age: number,
  personalColor: string,
};

export const App = () => {
  // const [users, setUsers] = useState([]);
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    // axios.get("https://example.com/users").then((res) => {
    axios.get<UserType[]>("https://example.com/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <ListItem id={user.id} name={user.name} age={user.age} />
      ))}
    </div>
  );
};
```

### Props에 대한 타입정의

props에 필요한 속성이 정의되지 않은경우 에디터에서 에러를 감지해 줄 수 있다.

```javascript
type UserTypeInListItem = {
  id: number,
  name: string,
  age: number,
};
export const ListItem = (props: UserTypeInListItem) => {
  const { id, name, age } = props;
  return (
    <p>
      {id}: {name}({age})
    </p>
  );
};
```
