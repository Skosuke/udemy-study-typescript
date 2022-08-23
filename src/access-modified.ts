export{};

class Person {
    public name: string;
    private age: number;
    protected nationality: string;

    constructor(name: string, age: number, nationality: string) {
        this.name = name;
        this.age = age;
        this.nationality = this.nationality;
    }

    profile(): string {
        return `name: ${this.name}, age: ${this.name}`
    }
}
let taro = new Person('Taro', 30, 'Japan');
console.log(taro.profile())
console.log(taro.name);
// console.log(taro.age);
// let hanako = new Person();

class Android extends Person {
    constructor(name:string, age:number, nationality:string) {
        super(name, age, nationality);
    }

    profile(): string {
        return `name: ${this.name}, nationality: ${this.nationality}`
    }
}