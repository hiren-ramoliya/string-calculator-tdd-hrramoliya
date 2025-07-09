const { add } = require("../stringCalculator");

test("return 0 for empty string", () => {
  expect(add("")).toBe(0);
});

test("return value for single number", () => {
  expect(add("7")).toBe(7);
});
