import { sum } from "../sum";

test("sum function should calculate the sum of the 2 numbers", () => {

    const result = sum(3, 5);

    //Assertion
    expect(result).toBe(8);
});