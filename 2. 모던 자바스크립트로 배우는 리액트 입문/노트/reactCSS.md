## Inline Styles

⚠️ 속성명은 카멜 표기법으로 표시

```javascript
return <p style={{ color: "blue", textAlign: "center" }}>Hello World!</p>;
```

## CSS Modules

- 리액트 개발의 경우 컴포넌트 별로 CSS 파일을 제공하는 경우가 많다.
- .scss 형식을 위해 node-sass를 npm에서 설치한다.
  ```bash
  npm install node-sass
  ```
- CSS 클래스명의 스코프는 컴포넌트 안으로 한정된다.
- SCSS 파일정의 ( MyComponent.module.scss -> `파일명.module.scss` )
  ```scss
  .title {
    margin: 0;
    color: #aaa;
  }
  ```
- 클래스를 사용하는 커포넌트 ( MyComponent.jsx )
  cf) "classes" 는 임의의 이름

  ```jsx
  import classes from "./MyComponent.module.scss";

  export const MyComponent = () => {
    return <p className={classes.title}>MyComponent 입니다.</p>;
  };
  ```

## Styled JSX

적극적으로 사용하지는 않으나 Next.js에 표준으로 내장되어 있다.

- styled-jsx 설치 필요

```jsx
export const MyComponent = () => {
  return (
    <>
      <div className="container">...생략...</div>
    </>
  );
};
<style jsx>{/*여기에 CSS를 기술한다.*/}</style>;
```

## styled components

많이 사용하는 방식

- styled-components 를 설치한다.
  ```bash
  npm install styled-components
  ```

### example

```jsx
import styled from "styled-components";

export const MyComponent = () => {
  return (
    <SContainer>
      <p>my name is tester</p>
    </SContainer>
  );
};

const SContainer = styled.div`
  border: solid 1px #aaa;
  padding: 8px;
`;
```

## Emotion

Emotion도 많이 사용하며 다양한 사용방법을 제공한는 것이 특징이며 SCSS 표기법 사용이 가능하다.

- @emotion/react 설치

### example

```jsx
/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const MyComponent = () => {
  // 1. scss와 동일
  const containerStyle = css`
    border: solid 1px #aaa;
    padding: 8px;
  `;

  // 2. javascript 객체 스타일 -> 주의) 카멜표기법으로 표기해야함
  const titleStyle = css({
    margin: 0,
    color: "#aaa",
  });

  // 3. styled-components 작성방법

  const StyledButton = styled.button`
    background-color: #ddd;
    border: none;
  `;
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>Emotion</p>
      <StyledButton>버튼</StyledButton>
    </div>
  );
};
```

## Tailwind CSS

- 전세계적으로 사용자가 많은 CSS 프레임워크
- 테마 커스터마이즈, 다크 모드 대응, 애니메이션 등을 구현할 수 있다.
- 클래스명에 익숙해지기 위해 공식 사이트나 치트시트를 참조해야한다.
- CSS 담당자가 없다면 시도해볼 만한 선택지
- CSS 클래스명 이름을 고민하지 않아도 되서 좋다.
- 컴포넌트 라이브러리 -> Headless UI, Chakra UI, Material-UI, Semantic UI React 등

### Setting

- create React App의 경우 Tailwind의 동작에 필요한 PostCSS를 덮어 쓸 수 없으므로 CRACO를 사용
  - 개발환경 필요 요소 설치
    ```bash
    npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
    ```
  - CRACO 설치
    ```bash
    npm install @craco/craco
    ```
  - package.json 수정 -> CRACO를 사용해 기동하도록 변경
    ```json
    {
      // ...
      "scripts": {
        "start": "craco start",
        "build": "craco build",
        "test": "craco test"
      }
    }
    ```
  - 프로젝트 루트에 craco.config.js 파이을 만든다.
    ```javascript
    module.exports = {
      style: {
        postcss: {
          plugins: [require("tailwindcss"), require("autoprefixer")],
        },
      },
    };
    ```
  - 다음 명령어를 프로젝트 루트 경로에서 실행
    ```bash
    npm tailwindcss init
    ```
  - 프로젝트 루트에 tailwind.config.js라는 이름의 파일이 생성되는데 purge를 수정해준다. 지장한 파일 안에서 사용하지 않는 스타일이 있는 경우 삭제한는 옵션이다.
    ```javascript
    module.exports = {
        purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
        darkMode: false, // or 'media' or 'class'
        ... 생략 ...
        plugins: [],
    }
    ```
  - index.css 수정
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    /* 생략 */
    ```

### Exmple

```jsx
export const MyComponent = () => {
  return (
    <div className="border border-gray-400 rounded-2xl p-2 m-2 flex justify-around items-center">
      <p className="m-0 text-gray-400">Tailwind CSS !</p>
      <button className="bg-gray-300 border-0 p-2 rounded-md hover:bg-gray-400 hover:text-white">
        button
      </button>
    </div>
  );
};
```
