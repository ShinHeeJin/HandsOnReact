## Props

컴포넌트는 전달받은 props에 따라 표시하는 스타일과 내용을 변경한다.
컴포넌트를 일반 HTML 태크처럼 사용이 가능하며 둘러싸인 부분을 children이라는 특별한 props로 전달 받는다.

```javascript
<ColoredMessage color="blue">잘 지내시죠?</ColoredMessage>
...
export const ColoredMessage = ({color, children}) => { // destructure
    return <p style={color: color}>{children}</p>
}
```

## State

set함수 안에 함수를 정의할 것. cf) 괄호 안에 함수를 기술하면 해당 함수의 인수에 '업데이트 직전 해당 State값'이 전달된다.

```javascript
export const App = () = {
    const [num, setNum] = useState(0);

    // setNum(num + 1);
    setNum((prev) => prev + 1);
}
```

## Rerendering

'State'가 변경될 때 함수 컴포넌트는 다시 처음부터 처리가 실행된다. 이를 반복하며 차이가 있는 DOM을 감지하고 업데이트를 반영하여 화면을 표시한다.

## useEffect

어떤 값이 변했을때에 한해서만 어떤 처리를 실행한다.

- ⚠️ 추가로 컴포넌트 마운트 시(가장처음)에도 반드시 실행된다는 점 주의
- 만약 두번째 인자로 []를 지정하면 '가장 처음 컴포넌트를 표시할 때만 실행되는 처리'를 의미한다.
  - 화면을 표시하고 초기 데이터를 얻을 때 자주 이용됨.

```javascript
export const App = () => {
  useEffect(() => {
    alert("num changed");
  }, [num]);

  return {
    /*생략*/
  };
};
```

## export

### normal export

```javascript
export const SomeComponent = () => {};
//...
import { SomeComponent } from "./SomeComponent";
// alias 사용 사능
import { SomComponent as Some } from "./SomeComponent";
```

### default export

{}를 제외하고 import가 가능하며 파일 1개에서 한번만 export default를 사용할 수 있다.
해당 파일의 내용을 모두 모아서 export 하는 경우에 사용한다.

```javascript
export default const SomeComponent = () => {};
//...
import SomeComponent from "./SomeComponent";
```
