// const maxNumber=(maxNum , ...rest)=>{
//     let max=0 ;
//     rest.filter((num)=> {
//         if(num>max && num < maxNum){
//             max=num
//         }
//     })
//     console.log(max);
// }

// maxNumber(70 , 20 , 60 , 68 , 33 , 87 , 90 , 55 , 23 , 69)

// const myObject={
//     name:"yahya",
//     lastName:"nezhad",
//     age:28
// }

// const myArray=[1 , 2 , 3 , 4 , 5]

// console.log(...myArray);

// console.log({...myObject , age:30});

// const [first , , third]=myArray

// console.log(third);

// const {name}=myObject

// console.log(name);

// const myArray2=[1,3,4,2,5]

// for(let key in myArray2){
//     console.log(myArray2[key]);
// }

// const myObject2={
//     firstName:"reza",
//     lastName:'yahya',
//     parents:{
//         mother:"maryam",
//         father:"mehdi"
//     }
// }

// const parents=myObject2.parents
// for(let key in parents){
//     console.log(key);
// }

// for(let myVal of myArray2){
//     console.log(myVal);
// }

// function Person(firstName, lastName, age) {
//   (this.firstName = firstName), (this.lastName = lastName), (this.age = age);
// }
// Person.prototype.sayMyName = () => {
//   console.log(Person.firstName);
// };

// const Person1 = new Person("yahuya", "yahyaneZhad", 28);
// console.log(Person1.firstName);

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  sayMyName = () => {
    console.log(`My Name is ${this.firstName}`);
  };
}

const person1 = new Person("mohammadReza", "yahyanezhad", 28);

console.log(person1);
person1.sayMyName()
