export{};

enum Months {
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.March);
console.log(Months.May);

enum COLORS {
    RED = '#FF0000',
    WHITE = '#FFFFFF',
    GREEN = '#008000',
    BLUE = '#0000FF',
    BLACK = '#000000'
}

let green = COLORS.GREEN;

console.log({green});

enum COLORS {
    YELLOW = '#FFFF00'
}

let yellow = COLORS.YELLOW;
console.log({yellow});