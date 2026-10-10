const assert = require("node:assert/strict");
const primeChecker = require("./index");

assert.strictEqual(
  primeChecker.isPrime(2),
  true,
);

assert.strictEqual(
  primeChecker.isPrime(8),
  false,
);