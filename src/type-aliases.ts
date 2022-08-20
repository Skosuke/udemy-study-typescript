export{};

type Mojiretsu = string;

const fooString: string = "Hello";

const fooMojiretsu: Mojiretsu = "Hello";
// console.log(fooMojiretsu);

type Profile =  {
    name: string;
    age: number;
}

const example1: Profile = {
    name: 'Kosuke',
    age: 30
}

console.log(example1);

type Profile2  = typeof example1;

const example2: Profile2 = {
    name: 'test',
    age: 50
}

console.log(example2);

