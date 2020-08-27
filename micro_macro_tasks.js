console.log(1);
setTimeout(() => {
  console.log(2);
}, 1000);
setTimeout(() => {
  console.log(3);
}, 0);
Promise.resolve(
  (function () {
    console.log(5);
  })()
);
console.log(4);
Promise.resolve().then(() =>
  setTimeout(() => {
    console.log(6);
  }, 0)
);
