// let i = 0;

// i = "typescript"

console.log("Hello world!")

//any

let value;

value = 5;
value = "string"

//unknown
let j : unknown;

j = 0
j = "string"

if (typeof j === "number"){
    console.log("its a number")
}

//tuple
let [id, name, isStudent] = [1, "Alice", true]

//enum
const enum Size{
    small = "x",
    medium = "m",
    large = "l"
}

const mySize : Size = Size.large

console.log(mySize)

//never
function error(err: string):never{
    throw err
}
//arrays
let numbers:number[] = [];

function greet(name:string):string{
    return `Hello ${name}`;
}

console.log(greet("Alice"));

// let employee :{
//     id:number,
//     name: string,
//     dateOfBirth: Date
//     company: string,
//     salary: number
// } = {
//     id:1,
//     name:"Alice",
//     dateOfBirth: new Date()
// }
//objects
type Employee = {
    id:number,
    name: string,
    dateOfBirth: Date
}

let employee: Employee = {
    id:1,
    name:"Alice",
    dateOfBirth: new Date()
}

//union types
let weight: string | number 

function kgToLbs(weight: string | number): number{
    //narrowing
    if (typeof weight === "number"){
        return weight * 2.2
    }

    return parseInt(weight) * 2.2
}

console.log(kgToLbs("10"))

//intersection type
type Flyable = {
    fly: () => void
}

type Swimmable = {
    swim: ()=> void
}

let duck: Flyable & Swimmable = {
    fly: () => console.log("I can fly"),
    swim: () => console.log("I can swim")
}

console.log(duck.fly());
console.log(duck.swim());

//option chaining
type Customer = {
    id:number
    name: string | null
}

function getCustomer(id:number):Customer | null{
    return id===0 ? null : {id: 1, name: "Alice"}
}

const customer= getCustomer(0)
customer?.id

let arr = null

arr?.[0]