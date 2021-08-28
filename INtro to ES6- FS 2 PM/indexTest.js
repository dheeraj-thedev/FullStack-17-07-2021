
var person = {fName:"Dheeraj",lname:"Singh", age:37, contact:1234567890}
var person1 = {fName:"Dheeraj",lname:"Singh", age:37, contact:1234567890}
var person2 = {fName:"Dheeraj",lname:"Singh", age:37, contact:1234567890}
var person3 = {fName:"Dheeraj",lname:"Singh", age:37, contact:1234567890}

// persons= [person,person1, person2, person3]

// console.log("FirstName\t\t|LastName\t|Age\t|Contact")
// for(let ctr=0; ctr<persons.length; ctr++){
//     // console.log(persons[ctr]);
//     console.log(`${persons[ctr].blablabla} \t\t |${persons[ctr].lname}\t\t${persons[ctr].age}\t${persons[ctr].contact}`)

// }


// Destructructing in ES6 

// What is Destructructing ?
// ans -> convinient way to extract the values from the objects or arrays 


// ES5 | Valinalla
// var dheeraj={fName:"Dheeraj",lname:"Singh", age:37, contact:1234567890}

// dheeraj.fName
// dheeraj.lname
// dheeraj.age
// dheeraj.contact

var {fName,lname,age,contact,dasdsa,dsdsa}=person
console.log("FName "+fName )
console.log("Last Name "+ lname)
console.log("Age", age)
console.log("Contact ", contact)
console.log(dasdsa)
console.log(dsdsa)
