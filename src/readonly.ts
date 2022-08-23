export{};

class VisaCard {
    constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('こうすけ');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'KOHSUKE';
