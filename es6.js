//ES6 CLASSES
class student{
    constructor(name){
        this.name=name;
    }
}
const student1 = new student ('Sakshi');
console.log(student1.name);


//ES6 ARROW FUNCTIONS
let sum=(x,y) => x+y;
console.log(sum(6,7));


//ES6 VARIABLES
let a=10;    //let is a block scoped version of var, limited to its defined block;
const b=12;  //once created, value cant be changed, also has block scope; defines constant reference to a value
var c=20;


//ES6 ARRAY METHODS
//1. for each()
//This method helps you to loop over arrays' items
const arr=[1,2,3,4,5];
arr.forEach(element => {
    console.log(element);
});

//2. includes()
//Checks if array includes the element passed as parameter; returns boolean value
let isPresent=arr.includes(4);
console.log(isPresent);

//3. filter()
//creates new array with elements that passed the condition given inside the parameter
const arrFilter= arr.filter(num=>num>2);
console.log(arrFilter);

//4. map()  #most imp
// creates new array by calling the provided function in every element
const addOne=arr.map(num=>num*2);
console.log(addOne);