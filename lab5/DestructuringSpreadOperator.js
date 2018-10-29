// lets consider an object
let object = { a: 1, b: 2, c: 3 };

// Let's consider a function
const foo = (objectIn) => {
    console.log(objectIn.a);
}
foo(object); // should print `1`

// Now what if we only WANTED to use objectIn.a in the function?
// Passing in the entire object is kinda dumb if we know we only want the `a` part.
// consider destructuring!
const bar = ({ a }) => {
    console.log(a);
}
bar(object); // this works too? How?!

// Why not just?
const fooUpdated = (input) => {
    console.log(input);
}
fooUpdated(object.a); // There are times you can just do this, but knowing that a feature like destructuring exists is good

// expandable. What if we originally had to only use one thing, 
// but then we needed something else from the same object? Easy!
// helps for unit tests later on. You'd still have to rewrite it, but only the expected outputs would be different
const baz = ({ a, b }) => {
    console.log(a, b);
}
baz(object);

///////////// Spread operator   
// What if you want to clone an object?
let a = { dog: 1, cat: 2 };
let b = a;
a
b

b.giraffe = 3;
a
b

a.tiger = 4;
a
b

// Why does this happen? Similar to java, pointers are the culprit. How do you clone an object then??
let c = { dog: 1, cat: 2, hamster: 3 }
c

let d = { ...c }
d

d.giraffe = 4;
c
d

let e = { ...c, lion: 5 }
c
e
// See what it does? It takes all the keys in the object and spreads them apart
try {
    console.log(...c) // error!
} catch (e) {
    // console.log(e);
}
console.log({ ...c }) // no error

// Spread operator in a function
// will spread out all the parameters.
const func = (...params) => {
    console.log(params[1])
    console.log(params[3])
    console.log(params);
}
func(1, 2, 3, 4, 5, 6);


// misc
let asdf = 3;
let asdfa = 4;
let asdfaa = 5;
let obj = { asdf: asdf, asdfa: asdfa, asdfaa: asdfaa }
obj;
let obj2 = { asdf, asdfa, asdfaa }
obj2