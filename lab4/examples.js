let arrayOfIntegers = [5, 4, 3, 2, 1];

console.log(arrayOfIntegers.map(function (d, i) {
    return `${d + 1} ${i}`;
}))

console.log(arrayOfIntegers.reduce(function (acc, d, i) {
    return acc + d + i;
}, 0));

let map = function (objectIn, functionIn) {
    let finalArray = [];
    for (let i = 0; i < objectIn.length; i++) {
        let objectToRunThroughFunction = objectIn[i];
        let objectToPush = functionIn(objectToRunThroughFunction, i);
        finalArray.push(objectToPush);
    }
    return finalArray;
}

console.log(map(arrayOfIntegers, function (d, i) {
    return `${d + 1} ${i}`;
}));

let reduce = function (objectIn, functionIn, accumulatorStartingPoint) {
    let returnVariable = accumulatorStartingPoint;
    for (let i = 0; i < objectIn.length; i++) {
        let objectToRunThroughFunction = objectIn[i];
        let accumulatorNewValue = functionIn(returnVariable, objectToRunThroughFunction, i);
        returnVariable = accumulatorNewValue;
    }
    return returnVariable;
}

console.log(reduce(arrayOfIntegers, function (acc, d, i) {
    return acc + d + i;
}, 0))