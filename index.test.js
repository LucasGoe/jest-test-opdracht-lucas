// 2. importeren
const add = require("./index").add;

test("add() function should return the sum of 2 numbers", (

) => {
    // ARRANGE
    const number1 = 12;
    const number2 = 13;

    // ACT
    const sum = add(number1, number2);

    // ASSERT
    expect(sum).toBe(25); // expect en toBe komen uit jest!
});
