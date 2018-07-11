# JS Developer Application Test

This was a task I was asked to complete a couple of years ago for a job application.

I never did it at the time because I got a job offer from another application before I even attempted this.

Because I am just brushing up on my JS, I decided to complete this today, just for the hell of it!

I decided to use Jest for the tests, as its nice and easy :-)

## Task 1

Mary is a breeder. She has a pet called Ringo. Ringo is the father of a puppy called Tia. Tia is owned by Tim.

In this data structure, any nested object can be undefined. That is for example, Mary may have no pet, Ringo may have no kid, Tia may have no owner.

### Requirements:

Write a function or functions to retrieve the owner’s name given a data structure like above.
If any of the nested object is undefined, the resulting owner name will be undefined.

- Code needs to be written in javascript.
- We prefer ES6 over ES5.
- We prefer functional over classes.
- We prefer tests over no tests.
- Use any 3rd party module you like.

## Task 2

Given a ES6 function like below:

```js
const add = (a, b, c) => a + b + c;
```

Write a function named ‘cu’ to take the ‘add’ function as its argument:
```js
const cu = (fn) => …

const cuAdd = cu(add);
```

that the following will be evaluated to **true**.

```js
cuAdd(1, 2, 3) === 6

cuAdd(1)(2, 3) === 6

cuAdd(1, 2)(3) === 6

cuAdd(1)(2)(3) === 6
```
Use of 3rd party module is **not allowed**.
