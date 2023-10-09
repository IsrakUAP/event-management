<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>ReferenceError: greetign is not defined</b></summary>
<p>

#### Answer: ?

<i>In this code an error is happen because of it is written instead of greeting is called greetign it will show ReferenceError because the word greeting is not defined in order to avoid errors it is important to use the right variable name like this "let sameName; sameName = {}"</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>"12"</b></summary>
<p>

#### Answer: ?

<i>In this code the sum function adds two numbers together by using the plus operator it takes two parameters a and b in this case it turns the number 1 into a string so it can add it with the string value "2" so the answer is the word "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>['🍕', '🍫', '🥑', '🍔']</b></summary>
<p>

#### Answer: ?

<i>In this code the property info favoriteFood is changed to "🍝" but this change does not impact the main food array because the food array has not changed and still has '🍕', '🍫', '🥑', '🍔' converting infofavoriteFood does not change the main array.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Hi there, undefined</b></summary>
<p>

#### Answer: ?

<i>In this code there is a function called sayHi that needs a name as input but in console.log(sayHi()); the function is called without giving any name when you don't provide a value for a function parameter it is set to undefined so when the name inside the function is not given a value it is considered undefined and as a result the function will output "Hi there, undefined".</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>3</b></summary>
<p>

#### Answer: ?

<i>In this code the forEach function looks at each number in the nums list and increases the count number by 1 each time it finds a value since all the values in the nums array are numbers that are not 0 the count variable goes up by three so the last number that was counted is 3.</i>

</p>
</details>
