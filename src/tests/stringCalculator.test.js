const { add } = require("../stringCalculator");

test("return 0 for empty string", () => {
  expect(add("")).toBe(0);
});

test("return value for single number", () => {
  expect(add("7")).toBe(7);
});

test("return sum of two numbers", () => {
  expect(add("3,6")).toBe(9);
});

test("return sum for multiple comma-separated numbers", () => {
  expect(add("2,1,4,5")).toBe(12);
});

test("handle newlines as delimiter", () => {
  expect(add("3\n2,4")).toBe(9);
});

test("support custom delimiter", () => {
  expect(add("//;\n4;8")).toBe(12);
});
