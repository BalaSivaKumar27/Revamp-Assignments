// 1. Question - Multiply each value of an array by ten [ Map ]

function multiplyByTen(myArray) {
    const resultArray = myArray.map(value => value * 10);
    return resultArray;
}

const input1 = [12, 2, 2, 4, 1];
const output1 = multiplyByTen(input1);
console.log("Sample Output 1:", output1);

//  Output : Sample Output 1: [ 120, 20, 20, 40, 10 ]

// --------------------------------------------------------------------------------

// 2. Question - Filter Even Numbers [ Filter ]

function filterEvenNumbers(myArray) {
    const resultArray = myArray.filter(value => value % 2 === 0);
    return resultArray;
}

const input2 = [12, 5, 7, 8, 3, 2];
const output2 = filterEvenNumbers(input2);
console.log("Sample Output 2:", output2);

// Output : Sample Output 2: [ 12, 8, 2 ]



