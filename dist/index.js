"use strict";
// let i = 0;
Object.defineProperty(exports, "__esModule", { value: true });
// i = "typescript"
console.log("Hello world!");
let value;
value = 5;
value = "string";
let j;
j = 0;
j = "string";
if (typeof j === "number") {
    console.log("its a number");
}
let [id, name, isStudent] = [1, "Alice", true];
var Size;
(function (Size) {
    Size["small"] = "x";
    Size["medium"] = "m";
    Size["large"] = "l";
})(Size || (Size = {}));
const mySize = Size.large;
console.log(mySize);
function error(err) {
    throw err;
}
let numbers = [];
function greet(name) {
    return `Hello ${name}`;
}
console.log(greet("Alice"));
let employee = {
    id: 1,
    name: "Alice",
    dateOfBirth: new Date()
};
let weight;
function kgToLbs(weight) {
    //narrowing
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    return parseInt(weight) * 2.2;
}
console.log(kgToLbs("10"));
let duck = {
    fly: () => console.log("I can fly"),
    swim: () => console.log("I can swim")
};
console.log(duck.fly());
console.log(duck.swim());
//any
// let i;
//unknown
// let value: unknown;
// value = "A string value";
// value = 42;
// if (typeof value === "string") {
// value.toString();
// } else if (typeof value === "number") {
//     console.log(value);
// }
//never
// function throwError(message: string): never {
//     throw new Error(message);
// }
//tuples
// let tuple: [string, number, boolean, string];
// tuple = ["Age", 30, true, "Extra"];
// enums
// const enum Color {
//     Red = "Stop",
//     Orange = "Be careful",
//     Green= "Go"
// }
// let mySize: Color = Color.Orange;
// console.log(mySize);
//arrays
// let arr: number[] = [];
//functions
// function greeting(name: string, age=20): string {
//     if (age === undefined) {
//         return `Hello, ${name}`;
//     }
//     return `Hello, ${name} ${age}`;
// }
// function taxYear(income: number, year = 2022): number {
//     if (year < 2022) return income * 1.2;
//     return income * 1.3;
// }
// console.log(greeting("Alice"));
// console.log(taxYear(10000));
//objects
// type Employee = {
//     readonly id:number,
//     name:string,
//     retire: (date: Date) => void
// }
// let employee: Employee  = {
//     id: 1,
//     name: "John",
//     retire: (date: Date) => {
//         console.log(date);
//     }
// };
// union types and type narrowing
// function kgToLbs(weight: number | string): number {
//     // Narrowing
//     if (typeof weight === "number")
//         return weight * 2.2;
//     else 
//         return parseInt(weight) * 2.2;
// }
//intersection types
// type Flyable = {
//     fly: () => void
// }
// type Swimmable = {
//     swim: () => void
// }
// let Duck: Flyable & Swimmable = {
//     fly: () => console.log("Flying"),
//     swim: () => console.log("Swimming")
// };
//Literal types
// let quantity: 50 | 100 = 50;
// type Metric = "cm" | "inch";
// let unit: Metric = "cm";
// if(unit ==="cm"){
//     console.log("Centimeter");
// }else{
//     console.log("Inch");
// }
//Nullable types
// function greet(name:string |  null | undefined) {
//     if (name) {
//         console.log(name.toUpperCase());
//     } else {
//         console.log("Hola!");
//     }  
// }
// greet(null);
//Optional chaining
// type Customer = {
//     birthday?: Date
// }
// function getCustomer(id: number): Customer | null | undefined {
//     return id === 0 ? null : { birthday: new Date() };  
// }
// let customer = getCustomer(0);
// console.log(customer?.birthday?.getDay());
//Optional element access operator
// let customers: null = null;
// customers?.[0]
//Optional calling
// let log: any = null;// might crush the program at any time
// log?.('a');
//# sourceMappingURL=index.js.map