
// Destructr the objects 
// Nested Objects
var myData = {fName:"Dheeraj",LName:"Singh",address:{permanent:"earth",temperory:"saturn"}}

//console.log(myData)
var {fName, LName,address:{permanent,temperory}}= myData
//console.log(fName, LName,permanent, temperory)

// Array Destructuring 
// forming an array of objects that has sitinct values
let persons=[] // i have 10 items inside this person array 
for(let i=0; i< 10; i++){
    let p={Name:"Dheeraj"+i, Company:"Careerera"+i} 
    persons.push(p)
}



// var [,b,,c,,d,,f,,r,,t,,s]= persons
// console.log(b,c,d,f,r,t,s)
// var [b,,c,,d,,f,,r,,t,,s]= persons
// console.log(b,c,d,f,r,t,s)

// only extract evens 
// only extract odd indexes

//2 more ways to get these as even and odd indexs



// // rest
//  var [a,b,c,...d]=persons
// // console.log("========Previous==========")
// // console.log(a,b,c,d)
// console.log("========Next==========")
// console.log(a,b,c,...d)


// console.log(...persons)




var student= {fName:"Dheeraj",
            lastName:"Singh",
            projects:["traveloes","careerera","zap","care dynamics"],
            subjects:[
                {subName:"Java",faculty:"Dheerajthedev"},
                {subName:"Dot Net",faculty:"raman"},
                {subName:"Python",faculty:"Alex"},
                {subName:"Node js",faculty:"Ron"}
            ]
        }
var { fName,lastName, projects:[a,b,c,d],subjects:[e,f,g,h]} = student

console.log(fName,lastName,a,b,c,d,e,f,g,h)
//console.log(student)