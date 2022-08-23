export{};

namespace Japanese {
    export namespace Tokyo {
        export class Person {
            constructor(public name: string){}
        }
    }
    export namespace Osaka {
        export class Person {
            constructor(public name: string){}
        }
    }
    export class Person {
        constructor(public name: string){}
    }
}
namespace Engilish {
    export class Person {
        constructor(
            public firstName: string, 
            public middleName:string, 
            public lastName: string
            ){
            }
    }
}


const me = new Japanese.Person('kousuke');
console.log(me.name);

const tokyo = new Japanese.Tokyo.Person('kousuke');
console.log(tokyo.name);

const osaka = new Japanese.Osaka.Person('kouyan');
console.log(osaka.name);
// const michael = new Engilish.Person('MIchael', 'Joseph', 'Jackson');
// console.log(michael);

