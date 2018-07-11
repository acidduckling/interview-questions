let getPath = require('./task1/get-path');
let data = require('./task1/data.json');
let cuAdd = require('./task2/cu');

// Task 1 - should return Tim:
const path = ['pet', 'kid', 'owner', 'name'];
console.log('Task 1 result: ', getPath(path, data));

// Task 2 - should all equal 6:
console.log(
  'Task 2 result: ',
  cuAdd(1, 2, 3),
  cuAdd(1, 2)(3),
  cuAdd(1)(2, 3),
  cuAdd(1)(2)(3),
);