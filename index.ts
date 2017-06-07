const add1 = (x: number): number => x + 1;
const add3 = (x: number): number => x + 3;

export const calculus = (x: number, y: number) => {
    const a = add1(x);
    const b = add3(y);
    if (a > b) {
        console.log("a is greater than b");
    } else {
        console.log("a is less than or equal to b");
    }
    return a + b;
};

calculus(6, 7);
