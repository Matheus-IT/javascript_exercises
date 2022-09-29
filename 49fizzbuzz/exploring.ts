function* fizzBuzz() {
    const output: Array<number | string> = [];
    let c = 1;
    while (true) {
        if (c % 3 === 0 && c % 5 === 0) {
            output.push('fizzBuzz');
        } else if (c % 3 === 0) {
            output.push('fizz');
        } else if (c % 5 === 0) {
            output.push('buzz');
        } else {
            output.push(c);
        }
        c++;
        yield [...output];
    }
}

const fizzBuzzGen = fizzBuzz();

for (let i = 0; i < 15; i++) {
    console.log(fizzBuzzGen.next().value);
}
