const { sum, mul, diff, div } = require("./index");

test("2+3 =5", () => {
  expect(sum(2, 3)).toBe(5);
});


test("3 * 4 = 12", () => {
  expect(mul(3, 4)).toBe(12);
});

test("5 - 6 = -1", () => {
  expect(diff(5, 6)).toBe(-1);
});

test("8 / 4 = 2", () => {
  expect(div(8, 4)).toBe(2);
});
