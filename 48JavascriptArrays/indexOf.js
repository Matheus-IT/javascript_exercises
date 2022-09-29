const myArray = [
    {name: 'matheus', age: '20'}, 
    {name: 'carol', age: '23'},
    {name: 'thiago', age: 27},
];

const index = myArray.map(e => e.name).indexOf('carol');

console.log(index);
