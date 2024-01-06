## FC, SFC, VFC

```
SFC, VFC는 deprecated되었다. React.FC 를 사용한다.
```

### 용어

- React.FC: React.FunctionComponent
- React.SFC: React.StatelessFunctionComponent
- React.VFS: VoidFunctionComponent

### 내용

- React.SFC는 React 16.7에서 deprecated
  - 함수형 컴포넌트는 Stateless, Stateful 둘다 될수 있기때문에 SFC라는 이름이 혼동되기 때문
- React 18 전까지 FC는 props에 children를 가졌다.
  - 반면, React.VFC는 props에 childres이 없었다.
- 하지만 React 18부터 FC는 기본적으로 children을 가지지 않도록 변경되었다.
  - 만약 children 이있는 타입을 사용해야 한다면 PropsWithChildren<P> 타입을 사용하ㄷ자.

### React.FC

- Function Component 타입의 줄임말로, React + Typescript 개발시 사용하는 타입
- 함수형 컴포넌트 사용시 타입선언에 쓸 수 있도록 React에서 제공한다.
- props(P)와 context를 입력받아 ReactElement 또는 null을 반환한다.
- 비교
  ```jsx
  const Component2 = (props: MyProps) => {};
  const Component1: React.FC<MyProps> = (props) => {};
  ```

### definition

```jsx
interface FunctionComponent<P = {}> {
  (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  propTypes?: WeakValidationMap<P>;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<P>;
  displayName?: string;
}
```

### example

```jsx
import { FC } from "react";

type UserProps = {
  name: string,
  cart: string[],
};

const UserBox: FC<UserProps> = ({ name, cart }) => {
  return (
    <div>
      <div>name: {name}</div>
      <div>cart: {cart.length}</div>
    </div>
  );
};
```

### 참고자료

- [React FC vs SFC vs VFC](https://solo5star.tistory.com/38)
- [[TypeScript] React.FC에 사용에 대해 생각해보기](https://shape-coding.tistory.com/entry/TypeScript-ReactFC%EC%97%90-%EC%82%AC%EC%9A%A9%EC%97%90-%EB%8C%80%ED%95%B4-%EC%83%9D%EA%B0%81%ED%95%B4%EB%B3%B4%EA%B8%B0)
- [[TS] React.FC](https://velog.io/@hamjw0122/TS-React.FC)
