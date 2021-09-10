const isNumber = (value) => typeof value === 'number';

function sum(a, b) {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  }

  throw new TypeError('All params of function must be numbers');
}

module.exports = sum;
