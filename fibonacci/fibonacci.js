const fibonacci = function (n) {
  if (n < 0) {
    return 'OOPS';
  }

  if (n === 0) {
    return 0;
  }

  let fib = 1;
  let previousFib = 0;

  for (let i = 1; i < n; i++) {
    let currentFib = fib;
    fib = fib + previousFib;
    previousFib = currentFib;
  }

  return fib;
};

module.exports = fibonacci;
