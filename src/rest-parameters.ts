export{};


const reducer = (array: number[]) => {
    const initialValue = 0;
    const sumWithInitial = array.reduce(
        (previousValue: number, currentValue: number) => previousValue + currentValue,
        initialValue
    );
    return sumWithInitial;
}


const sum: (...values: number[]) => number = (...values: number[]) => {
    // console.log(values);
    return reducer(values);
}


console.log(sum(1, 2, 3, 4));

reducer([1, 2, 3, 4]);
