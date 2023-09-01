
const person ={
    id:11,
    name:"huzefa",
    email:"huzefa@gmail.com"
}


const onlyObject = person

const jsonObject = JSON.stringify(person)    

const parsedObject = JSON.parse(jsonObject)

console.log( typeof onlyObject)

console.log( typeof  jsonObject)

console.log( typeof parsedObject )





