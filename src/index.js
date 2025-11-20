// 기본 타입 탬플릿
// 1. string
// let myString: string;
// console.log("String:", myString);
// 2. number
// let myNumber: number;
// console.log("Number:", myNumber);
// 3. boolean
// let myBoolean: boolean;
// console.log("Boolean:", myBoolean);
// 4. null
// let myNull: null;
// console.log("Null:", myNull);
// 5. any
// let myAny: any;
// console.log("Any string:", myAny);
//myAny 값 변경
// console.log("changed to number:", myAny);
// myAny 값 변경
// console.log("changed to boolean:", myAny);
// 1
var a = "";
var b = "";
var c = "";
var myName = "steve";
var message = "Hello, ".concat(myName);
console.log("String:", myName);
myName.toLocaleLowerCase();
// 2
var count = 10;
console.log("Number:", count);
// 3
var isOpen = true;
console.log("Boolean:", isOpen);
// 4
var user = null;
console.log("Null:", user);
// 5
var someValue;
console.log("Any:", someValue);
someValue.toString();
console.log("Any:", someValue);
someValue = false;
console.log("Any:", someValue);
someValue.toFixed();
console.log("Any:", someValue);
