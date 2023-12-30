## Quick Start

[Quick Start – React](https://react.dev/learn)

### ****Creating and nesting components****

- React components are JavaScript functions that return markup:
    - you can nest it into another component:
    - React component names must always start with a capital letter
- The `export default` keywords specify the main component in the file.
    
    ```jsx
    function MyButton() {
      return (
        <button>
          I'm a button
        </button>
      );
    }
    
    export default function MyApp() {
      return (
        <div>
          <h1>Welcome to my app</h1>
          <MyButton />
        </div>
      );
    }
    ```
    

### ****Adding styles****

- In React, you specify a CSS class with `className`. It works the same way as the HTML `[class](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class)` attribute:
    
    ```html
    <img className="avatar" />
    ```
    

### **Displaying data**

`style={{}}` is not a special syntax, but a regular `{}` object inside the `style={ }` JSX curly braces.

```jsx
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
```

### **Conditional rendering**

```jsx
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);
```

```jsx
<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>
```

When you don’t need the `else` branch, you can also use a shorter [logical `&&` syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND#short-circuit_evaluation):

```jsx
<div>
  {isLoggedIn && <AdminPanel />}
</div>
```

### **Rendering lists**

use the `map()` function to transform an array of products into an array of `<li>` items:

```jsx
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
```

### **Responding to events**

React will call your event handler when the user clicks the button.

```jsx
function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
```

### **Updating the screen**

- `useState` convention is to write `[something, setSomething]`.
- each will get its own state. Notice how each button “remembers” its own `count` state and doesn’t affect other buttons.

```jsx
import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
```

### ****Using Hooks****

Functions starting with `use` are called *Hooks*. `useState` is a built-in Hook provided by React. Hooks are more restrictive than other functions. You can only call Hooks *at the top* of your components (or other Hooks). If you want to use `useState` in a condition or a loop, extract a new component and put it there.

### ****Sharing data between components****

```jsx
import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
	/*
		read the props you have passed from its parent component:
	*/
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
```