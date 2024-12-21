import { sum } from "../sum";

test("sum function should calculate the sum of two numbers", () => {
  const result = sum(10, 20);

  //Assertion
  expect(result).toBe(30);
});
