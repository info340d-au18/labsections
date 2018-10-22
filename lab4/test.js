let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//.map(function(__){})    
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  v  v  v  v  v  v  v  v  v   v
// [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

var first = arr.map(function (d) {
    return d + 1
});
first

let secon = arr.map((d) => {
    return d + 1;
})
secon

let third = arr.map(d => d + 1)
third

let a = (d, index) => index
let fourth = arr.map(a)
fourth

arr.forEach(d => {
    console.log(d)
})

arr.forEach((d, i) => {
    console.log(i)
});

let newa = 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1
newa

const reduceFunc = (originalArray, index, accumulator) => {
    if (index === originalArray.length - 1) {
        return accumulator + originalArray[index];
    } else {
        return accumulator + originalArray[index] + reduceFunc(originalArray, index + 1, accumulator)
    }
}
console.log(reduceFunc(arr, 0, 0));

let one = arr.reduce((accumulator, d) => {
    return accumulator + d
}, 0);
one

let two = arr.reduce((accumulator, d) => accumulator + d, 0)
two

let abc = ["a", "b", "c", "d"]
let abcCombined = abc.reduce((acc, d) => acc + d, "")
abcCombined
console.log(abc.join(""))

let complexAbcCombined = abc.reduce((acc, d) => {
    let capitalizedItem = d.toUpperCase();
    return acc + capitalizedItem;
}, "startString")
complexAbcCombined
