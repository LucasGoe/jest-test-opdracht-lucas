function add(num1, num2) {
    //   console.log("INPUT", num1, num2);
    const sum = num1 + num2;
    //   console.log("SUM", sum);
    return sum;
}


// 1. exporteren

module.exports = {
    add: add,
};