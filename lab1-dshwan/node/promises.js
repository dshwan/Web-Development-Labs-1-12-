const promiseExample = (name) => {
  return new Promise((resolve, reject) => {
    // Do anything you want
    // finishes when resolve() is called      
    setTimeout(() => {
      resolve(name);
     }, 3000);
  });
};

promiseExample('Dylan')
  .then(answer => 'Hello ' + answer)
  .then((res) => console.log(res))
  .catch((e) => console.log('Something went wrong!')) //best to have .catch last to track what fails
  .then(() => console.log('still going'));

console.log('hi');