export{};

const nextYearSarary = (
    currentSarary: number, 
    rate: number = 1.1
    ) => {
    return currentSarary * rate;
}

console.log(nextYearSarary(1000));