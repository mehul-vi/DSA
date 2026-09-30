let arr = [10, 20, 30, 40, 50];

// 1. length
console.log("length:", arr.length);

// 2. push - add at end
arr.push(60);
console.log("push:", arr);

// 3. pop - remove from end
arr.pop();
console.log("pop:", arr);

// 4. unshift - add at start
arr.unshift(5);
console.log("unshift:", arr);

// 5. shift - remove from start
arr.shift();
console.log("shift:", arr);

// 6. includes - check value
console.log("includes:", arr.includes(30));

// 7. indexOf - find index
console.log("indexOf:", arr.indexOf(30));

// 8. slice - get portion
let sliced = arr.slice(1, 4);
console.log("slice:", sliced);

// 9. splice - add/remove elements
let spliced = [10, 20, 30, 40, 50];
spliced.splice(2, 1);
console.log("splice:", spliced);

// 10. forEach - loop through array
arr.forEach(function (value) {
    console.log("forEach:", value);
});

// 11. map - create new array
let doubled = arr.map(function (value) {
    return value * 2;
});
console.log("map:", doubled);

// 12. filter - filter elements
let greaterThan20 = arr.filter(function (value) {
    return value > 20;
});
console.log("filter:", greaterThan20);

// 13. find - find first match
let found = arr.find(function (value) {
    return value > 25;
});
console.log("find:", found);

// 14. findIndex - find first index
let foundIndex = arr.findIndex(function (value) {
    return value > 25;
});
console.log("findIndex:", foundIndex);

// 15. some - check any match
let someResult = arr.some(function (value) {
    return value > 40;
});
console.log("some:", someResult);

// 16. every - check all match
let everyResult = arr.every(function (value) {
    return value > 0;
});
console.log("every:", everyResult);

// 17. reduce - return single value
let sum = arr.reduce(function (total, value) {
    return total + value;
}, 0);
console.log("reduce:", sum);

// 18. sort - sort ascending
let numbers = [50, 10, 40, 20, 30];

numbers.sort(function (a, b) {
    return a - b;
});
console.log("sort ascending:", numbers);

// sort descending
numbers.sort(function (a, b) {
    return b - a;
});
console.log("sort descending:", numbers);

// 19. reverse - reverse array
let reverseArr = [1, 2, 3, 4, 5];

reverseArr.reverse();
console.log("reverse:", reverseArr);

// 20. concat - merge arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combined = arr1.concat(arr2);
console.log("concat:", combined);

// 21. join - array to string
let names = ["Mehul", "Rahul", "Aman"];

console.log("join:", names.join("-"));

// 22. isArray - check array
console.log("isArray:", Array.isArray(arr));