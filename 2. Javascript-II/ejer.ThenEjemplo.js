const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:
// setTimeout(checkInventory(resolve));

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (falledValue) => {
  console.log(falledValue);
};

checkInventory(order)
  .then(handleSuccess, handleFailure);


  