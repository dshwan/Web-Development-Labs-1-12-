// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

const sleepyHello = () => new Promise(resolve => setTimeout(() => {
  console.log('Hello');
  resolve();
}, 1200));

const test = async () => {
  try {
  await sleepyHello();
  } catch (e) {
    console.log('This failed');
  }
  console.log('Now this');
};

// sleepyHello()
// .then(() => console.log('Now This')); 

test()
.then(() => console.log('Now Here'));