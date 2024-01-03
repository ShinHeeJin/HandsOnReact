### 화살표 함수

```javascript
const func = (value) => {
  return value;
};

const func = (value1, value2) => {
  return value1 + value2;
};

const func = (num1, num2) => num1 + num2;

const func = (val1, val2) => ({
  name: val1,
  age: val2,
});
```

### 분할대입

```javascript
// 객체
const myProfile = {
  name: "테스터",
  age: 30,
};

const { name, age } = myProfile;
const { age, name } = myProfile;
const { name } = myProfile;
const { age } = myProfile;
const message = `my name is ${name}, age is ${age}`;

// 배열
const myProfile = ["테스터", 30];
const [name, age] = myProfile;
const message = `my name is ${name}, age is ${age}`;

const [name] = myProfile;
const message = `my name is ${name}`;
```

### 디폴트값 =

```javascript
const sayHello = (name = "테스터") => `${name}님, 안녕하세요!`;
sayHello();
sayHello("테스터999");

const myProfile = {
  name: "테스터",
  age: 30,
};
const { name = "서울" } = myProfile;
console.log(name); // 서울

const { address = "서울" } = myProfile;
console.log(address); // 서울
```

### 스프레드 구문

```javascript
const array = [1, 2];
const sumFunction = (num1, num2) => num1 + num2;
sumFunction(...array); // 3

// 요소 모으기, 분할대입
const array = [1, 2, 3, 4, 5];
const [num1, num2, ...array1] = array;
console.log(num1); // 1
console.log(num2); // 2
console.log(array1); // [3, 4, 5]

// 배열 복사
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [...arr1];
console.log(arr3); // [1, 2]

// 배열 결함
const arr1 = [1, 2];
const arr2 = [1, 2];
const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 1, 2]

// 여러객체 결합
const obj1 = { value1: 10, value2: 20 };
const obj2 = { value3: 10, value4: 20 };

const obj3 = { ...obj1 }; // 등호를 이용해서 복사하는 경구 참조값이 복사되어 문제가 된다.
const obj4 = { ...obj1, ...obj2 };
```

### 객체 생략 표기법

객체의 속성명과 설정할 변수명이 같은경우 아래아 같이 작성할 수 있다.

```javascript
const name = "테스터";
const age = 24;

const user = {
  name,
  age,
};
console.log(user); // {name: "테스터", age:24}
```

### filter 함수

```javascript
const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.filter((num) => {
  return num % 2 === 0;
});
```

### map 함수의 2번째 인수 index

```javascript
const fruits = ["apple", "banana", "grape"];

fruits.map((fruitName, index) =>
  console.log(`${index + 1}번째는 ${fruitName}입니다.`)
);
```

### 삼항연산자

```javascript
const printFormattedNum = (num) => {
  const formattedNum =
    typeof num === "number" ? num.toLocaleString() : "숫자를 입력하십시오";
  console.log(formattedNum);
};
printFormattedNum(1300); // 1,300
printFormattedNum("1300"); // 숫자를 입력하십시오
```

### 논리연산자의 원래의미

| | : 연산자의 왼쪽이 true라면 왼쪽을 반환, 왼쪽이 false라고 판정하면 오른쪽을 반환
&& : 연산자의 왼쪽이 왼쪽이 true라면 오른쪽을 반환, false라고 판정하면 왼쪽을 반환

```javascript
console.log(100 || "test"); // 100
console.log("test" || 100); // test
console.log(100 && "test"); // test
console.log("test" && 100); // 100
console.log(false && "test"); // false

// falsy : 0, ""
// truthy : [], {}
// nullish : null, undefined
```
