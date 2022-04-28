/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[1];
let [john, mary, joe] = ages
console.log(john, mary, joe)

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let { mike, jill, alicia } = jobs;
console.log(mike, jill, alicia)

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let languages2 = {
    firstlanguage: "english",
    Secondlanguage: "french",
    Thirdlanguage: "german",
    Fourthlanguage: "japanese",
};
let { firstlanguage, Thirdlanguage } = languages2;
console.log(firstlanguage, Thirdlanguage);

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondfavorite, ...others] = fruits;
console.log(favorite)
console.log(secondfavorite)
console.log(others)

let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak"
};
let { brian, anna, ...rest } = favoriteFoods;
console.log(brian)
console.log(anna)
console.log(rest)