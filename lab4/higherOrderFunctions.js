let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Map will point each item in the original array to a new item,
// based on what is inside the function 
// for the first few, I'll be adding 1 to each of the items.

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  v  v  v  v  v  v  v  v  v   v
// [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]


// Map will call the function inside its first parameter.
//      where the first parameter supplied is the item at index

// old-ish syntax (.map is es6, but this will make it a little clearer what is going on first)

// some people choose to be verbose with the function parameter
// doesn't matter. It's common to just use a single letter for this
// from what I've seen.
var zero = arr.map(function (d) {
    return d + 1;
})
zero

// using arrow function
let first = arr.map((d) => {
    return d + 1;
})
first

// using shortened arrow function.
// Because there's a single line, you can omit the `return` and curly braces
// Note, you cannot do this if you do multi-line stuff, like if you wanted
// to fetch an api call. (I mean you still can do it in 1 line by chaining,
// but that's bad practice, because it makes your code unreadable. Web developers
// fight about making code condensed vs readable. Imo it should always be readable)
let second = arr.map((d) => d + 1)
second

// using even shorter arrow function because single argument
let third = arr.map(d => d + 1)
third

// second argument passed down will be index.
let fourth = arr.map((d, index) => index)
fourth

// why won't this work?
//                     v        v
// let fifth = arr.map(d, index => index)




//////////// ForEach
// very similar to map, but doesn't put the result as an array. It acts like an iterator.
arr.forEach(d => {
    console.log(d);
})

arr.forEach((d, i) => {
    console.log(i);
})

// Reduce
let a = 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1
a

// recursive equivalent. Which would you rather write after seeing the next?
const reduceFunc = (originalArray, index, accumulator) => {
    if (index === originalArray.length - 1) {
        return accumulator + originalArray[index];
    } else {
        return accumulator + originalArray[index] + reduceFunc(originalArray, index + 1, accumulator);
    }
}
console.log(reduceFunc(arr, 0, 0));

// I've always called it accumulator, but it might help to call it "previous"
let one = arr.reduce((accumulator, d) => {
    return accumulator + d
}, 0)
one



let two = arr.reduce((acc, d) => acc + d, 0)
two
// What happens here?
// 0 (start) gets put into acc for the first index. 1 is the first index's item. reduce passes 0 + 1 to the next index
// 0 + 1 gets passed into acc for the next index. 2 is the next index's item. reduce passes 0 + 1 + 2 to the next
// 0 + 1 + 2 .... etc

// Doesn't work for just numbers

// strings
let abc = ["a", "b", "c", "d"]
let abcCombined = abc.reduce((acc, d) => acc + d, "")
abcCombined

let complexAbcCombined = abc.reduce((acc, d) => {
    let capitalizedItem = d.toUpperCase();
    return acc + capitalizedItem;
}, "startString")
complexAbcCombined

let evenMoreComplexAbc = abc.reduce((acc, d, index) => {
    let capitalizedItem = d.toUpperCase();
    return acc + capitalizedItem + index + " ";
}, "startString")
evenMoreComplexAbc

// array
let abcReplication = abc.reduce((acc, d) => { acc.push(d); return acc }, []);
abcReplication
// was the same as .map, so kinda useless there

let abcSpecial = abc.reduce((acc, d) => { if (d !== "b") acc.push(d + "abc"); return acc }, []);
abcSpecial
// skips one, which map cannot do.