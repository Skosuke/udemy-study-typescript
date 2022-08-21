export{};

type Pitcher1 = {
    ThrowingSpeed: number
};

type Batter1 = {
    battingAverage: number
}

const DaimajinSasaki: Pitcher1 = {
    ThrowingSpeed: 154
}

const OchiaiHiromitsu: Batter1 = {
    battingAverage: 0.367
}

// type TwoWayPlayer = {
//     ThrowingSpeed: number
//     battingAverage: number
// }

type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShouhei: TwoWayPlayer = {
    ThrowingSpeed: 165,
    battingAverage: 0.286
}

